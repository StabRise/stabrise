'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    comment: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setError(null)
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) newErrors.email = 'Email is required.'
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required.'
    return newErrors
  }

  const onSubmit = async (data: typeof formData) => {
    setSubmitted(false)
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/contact_form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', company: '', email: '', comment: '' })
      } else {
        setError(result.message || 'An error occurred. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    await onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8">
      {submitted && (
        <div className="rounded-md bg-green-100 p-4 text-sm text-green-800 dark:bg-green-200">
          ✅ Thank you for reaching out! We'll get back to you shortly.
        </div>
      )}

      {error && (
        <div className="rounded-md bg-red-100 p-4 text-sm text-red-800 dark:bg-red-200">
          ❌ {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
            disabled={loading}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="company" className="mb-1 block text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email<span className="text-red-500"> *</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
          disabled={loading}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="comment" className="mb-1 block text-sm font-medium">
          Comment<span className="text-red-500"> *</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
          disabled={loading}
        />
        {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment}</p>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-sky-400"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
