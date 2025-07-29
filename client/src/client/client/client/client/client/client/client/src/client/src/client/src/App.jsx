import React from 'react'
import ExpenseForm from './components/ExpenseForm'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-indigo-100 to-blue-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">BillSwift - Expense Reimbursement</h1>
        <ExpenseForm />
      </div>
    </div>
  )
}
