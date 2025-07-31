import React, { useState } from 'react'
import axios from 'axios'

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    description: '',
    amount: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/expenses`, formData)
      setStatus('Submitted successfully ✅')
      setFormData({ fullName: '', email: '', description: '', amount: '' })
    } catch (err) {
      console.error(err)
      setStatus('Submission failed ❌')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full border px-4 py-2 rounded" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full border px-4 py-2 rounded" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Expense Description" required className="w-full border px-4 py-2 rounded" />
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount (USD)" required className="w-full border px-4 py-2 rounded" />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Submit</button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  )
}

export default ExpenseForm
