import { useState, useRef, useEffect, useCallback } from 'react'

interface UseDropdownOptions {
  itemCount: number
}

export function useDropdown<T extends HTMLElement = HTMLAnchorElement>({ itemCount }: UseDropdownOptions) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<(T | null)[]>([])

  const close = useCallback(() => {
    setIsOpen(false)
    setFocusedIndex(-1)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
    setFocusedIndex(0)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }, [isOpen, close, open])

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      itemRefs.current[focusedIndex]?.focus()
    }
  }, [isOpen, focusedIndex])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [close])

  function handleTriggerKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
      case 'Enter':
      case ' ':
        event.preventDefault()
        open()
        break
      case 'ArrowUp':
        event.preventDefault()
        setIsOpen(true)
        setFocusedIndex(itemCount - 1)
        break
    }
  }

  function handleMenuKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % itemCount)
        break
      case 'ArrowUp':
        event.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + itemCount) % itemCount)
        break
      case 'Home':
        event.preventDefault()
        setFocusedIndex(0)
        break
      case 'End':
        event.preventDefault()
        setFocusedIndex(itemCount - 1)
        break
      case 'Escape':
        event.preventDefault()
        close()
        triggerRef.current?.focus()
        break
      case 'Tab':
        close()
        break
    }
  }

  function getItemProps(index: number) {
    return {
      ref: (el: T | null) => {
        itemRefs.current[index] = el
      },
      tabIndex: focusedIndex === index ? 0 : -1,
      onClick: close,
    }
  }

  return {
    isOpen,
    focusedIndex,
    containerRef,
    triggerRef,
    open,
    close,
    toggle,
    handleTriggerKeyDown,
    handleMenuKeyDown,
    getItemProps,
  }
}
