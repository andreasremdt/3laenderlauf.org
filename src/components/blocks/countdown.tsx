'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-05-16T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-4 font-title uppercase font-bold items-center">
      <div className="flex flex-col items-center">
        <span className="text-5xl">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="text-sm font-medium tracking-wider">Tage</span>
      </div>
      <span className="text-5xl mb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-sm font-medium tracking-wider">Stunden</span>
      </div>
      <span className="text-5xl mb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-sm font-medium tracking-wider">Minuten</span>
      </div>
      <span className="text-5xl mb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-sm font-medium tracking-wider">Sekunden</span>
      </div>
    </div>
  )
}
