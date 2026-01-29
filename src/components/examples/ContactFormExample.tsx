/**
 * Server Actions Example with useActionState
 * Demonstrates instant interaction patterns with React 19
 */

'use client'

import { useActionState, useTransition, useState } from 'react'

// Simulated server action
async function submitContactForm(prevState: any, formData: FormData) {
    'use server'

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const email = formData.get('email')
    const message = formData.get('message')

    if (!email || !message) {
        return { success: false, message: 'Please fill in all fields' }
    }

    // Simulated successful submission
    return { success: true, message: 'Thank you! We will contact you soon.' }
}

export default function ContactFormExample() {
    const [state, formAction] = useActionState(submitContactForm, null)
    const [isPending, startTransition] = useTransition()

    return (
        <div className="max-w-2xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8 text-center">
                Contact Us
            </h2>

            <form action={formAction} className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#333333] mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8BD95]"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#333333] mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8BD95]"
                        placeholder="Your message..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#D8BD95] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#C8AD85] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>

                {state?.message && (
                    <div
                        className={`p-4 rounded-lg ${state.success
                                ? 'bg-green-50 text-green-800'
                                : 'bg-red-50 text-red-800'
                            }`}
                    >
                        {state.message}
                    </div>
                )}
            </form>
        </div>
    )
}
