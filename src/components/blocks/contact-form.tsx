'use client'

import { useForm } from '@tanstack/react-form'
import { useRef, useState } from 'react'
import Label from '../ui/label'
import Input from '../ui/input'
import Textarea from '../ui/textarea'
import Button from '../ui/button'
import FieldError from '../ui/field-error'
import Alert from '../ui/alert'
import sendMessage from '@/actions/send-message'
import {
  validateFirstname,
  validateLastname,
  validateEmail,
  validateMessage,
} from '@/lib/validation'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../ui/icon'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../ui/map'), { ssr: false })

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      try {
        setSubmitStatus('loading')

        const response = await sendMessage(value)

        if (!response.success) {
          if (response.errors) {
            Object.entries(response.errors).forEach(([fieldName, fieldErrors]) => {
              if (fieldErrors && fieldErrors.length > 0) {
                form.setFieldMeta(fieldName as keyof typeof value, (prev) => ({
                  ...prev,
                  errors: fieldErrors,
                }))
              }
            })
            return
          }

          throw new Error('Fehler beim Senden der Nachricht')
        }

        setSubmitStatus('success')
      } catch (_) {
        setSubmitStatus('error')
      }
    },
    onSubmitInvalid: () => {
      if (formRef.current) {
        const firstInvalidInput =
          formRef.current.querySelector<HTMLInputElement>('[aria-invalid="true"]')

        if (firstInvalidInput) {
          firstInvalidInput.focus()
        }
      }
    },
  })

  return (
    <>
      {submitStatus === 'success' ? (
        <Alert title="Vielen Dank für Ihre Nachricht." variant="success" className="mb-8">
          Wir werden uns schnellstmöglich um Ihre Nachricht kümmern.
        </Alert>
      ) : null}

      {submitStatus === 'error' ? (
        <Alert title="Fehler beim Senden der Nachricht." variant="error" className="mb-8">
          Bitte versuchen Sie es später erneut oder schreiben Sie uns eine E-Mail an{' '}
          <a
            href="mailto:info@regio-lions.de"
            className="text-primary-900 font-medium underline hover:text-gray-900 focus-visible:text-gray-900"
          >
            info@regio-lions.de
          </a>
          .
        </Alert>
      ) : null}

      <div className="max-w-6xl mx-auto px-4 py-32">
        <header className="text-center">
          <h2 className="text-5xl font-bold font-title uppercase mb-4 text-neutral-900">
            Kontaktieren Sie uns für <span className="bg-amber-300">Fragen</span>
          </h2>
          <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
            If you need more details about the marathon, from race packets to course details, we’ve
            got the answers.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-8">
          <figure className="relative">
            <Image
              src="/image-1.jpg"
              alt="Kontakt"
              width={600}
              height={500}
              className="w-full object-cover h-full"
            />
            <figcaption className="absolute bottom-8 right-8 bg-neutral-800 p-8 text-white">
              <ul>
                <li className="border-b border-neutral-700 pb-4 mb-4">
                  <Link className="text-white relative block pl-24 text-right" href="/">
                    <span className="font-title uppercase font-bold block">E-Mail</span>
                    <span className="text-xl">info@3laenderlauf.de</span>
                    <span className="bg-amber-300 rounded-full p-2 inline-block absolute left-0 top-1/2 -translate-y-1/2">
                      <Icon name="email" className="size-5 text-neutral-800" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white relative block pl-24 text-right" href="/">
                    <span className="font-title uppercase font-bold block ">Telefon</span>
                    <span className="text-xl">+41 79 123 45 67</span>
                    <span className="bg-amber-300 rounded-full p-2 inline-block absolute left-0 top-1/2 -translate-y-1/2">
                      <Icon name="phone" className="size-5 text-neutral-800" />
                    </span>
                  </Link>
                </li>
              </ul>
            </figcaption>
          </figure>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
            ref={formRef}
            className=" bg-neutral-50 p-8"
            noValidate
          >
            <div className="mb-4 flex flex-col gap-4 sm:flex-row md:mb-8 md:gap-8">
              <form.Field
                name="firstname"
                validators={{
                  onChange: ({ value }) => validateFirstname(value),
                }}
              >
                {(field) => (
                  <div className="sm:w-1/2">
                    <Label htmlFor="firstname">Vorname</Label>
                    <Input
                      id="firstname"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      required
                      autoComplete="given-name"
                      error={field.state.meta.errors[0]}
                    />
                    <FieldError id={field.name} error={field.state.meta.errors[0]} />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="lastname"
                validators={{
                  onChange: ({ value }) => validateLastname(value),
                }}
              >
                {(field) => (
                  <div className="sm:w-1/2">
                    <Label htmlFor="lastname">Nachname</Label>
                    <Input
                      id="lastname"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      required
                      autoComplete="family-name"
                      error={field.state.meta.errors[0]}
                    />
                    <FieldError id={field.name} error={field.state.meta.errors[0]} />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="mb-4 flex flex-col gap-4 sm:flex-row md:mb-8 md:gap-8">
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => validateEmail(value),
                }}
              >
                {(field) => (
                  <div className="sm:w-1/2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      type="email"
                      id="email"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      required
                      autoComplete="email"
                      error={field.state.meta.errors[0]}
                    />
                    <FieldError id={field.name} error={field.state.meta.errors[0]} />
                  </div>
                )}
              </form.Field>

              <form.Field name="phone">
                {(field) => (
                  <div className="sm:w-1/2">
                    <Label htmlFor="phone" optional>
                      Telefonnummer
                    </Label>
                    <Input
                      id="phone"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      autoComplete="tel"
                    />
                  </div>
                )}
              </form.Field>
            </div>

            <form.Field
              name="message"
              validators={{
                onChange: ({ value }) => validateMessage(value),
              }}
            >
              {(field) => (
                <div className="mb-4 md:mb-8">
                  <Label htmlFor="message">Ihre Nachricht</Label>
                  <Textarea
                    name={field.name}
                    id="message"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    required
                    minLength={10}
                    error={field.state.meta.errors[0]}
                  />
                  <FieldError id={field.name} error={field.state.meta.errors[0]} />
                </div>
              )}
            </form.Field>

            <Button
              type="submit"
              variant="primary"
              disabled={submitStatus === 'loading' || submitStatus === 'success'}
            >
              {submitStatus === 'success' ? 'Nachricht erfolgreich gesendet' : null}
              {submitStatus === 'loading' ? 'Wird gesendet...' : null}
              {submitStatus === 'idle' ? 'Nachricht senden' : null}
              {submitStatus === 'error' ? 'Fehler beim Senden' : null}
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-32">
        <Map className="h-96 w-full" />
      </div>
    </>
  )
}
