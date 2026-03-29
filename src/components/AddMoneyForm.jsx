import React, { useState } from 'react';

export default function AddMoneyForm({ onAdd }) {
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!destination || !amount) return alert("Please fill in both fields!");

    if (onAdd) {
      onAdd({
        id: Math.random().toString(36).substr(2, 9),
        destination: destination,
        amount: parseFloat(amount),
        timestamp: new Date().getTime()
      });
    }

    // Clear the form for the next entry
    setDestination('');
    setAmount('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">💰</span> Add to your Bucket List
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What place are you feeling of going to today? </label>
          <input
            type="text"
            placeholder="e.g. Tokyo, Paris, Bali"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">How much are you willing to spend on it? ($)</label>
          <input
            type="number"
            placeholder="How much intent? (e.g. 500)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
        >
          Stack My Intent ✈️
        </button>
      </form>
      
      <p className="text-[5px] text-gray-400 mt-4 text-center uppercase tracking-widest">
        Live Demo Mode Enabled
      </p>
    </div>
  );
}