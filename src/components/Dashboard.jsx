import React from 'react';

export default function Dashboard({ contributions }) {
  // Group the contributions by destination
  const totals = contributions.reduce((acc, curr) => {
    acc[curr.destination] = (acc[curr.destination] || 0) + curr.amount;
    return acc;
  }, {});

  const sortedDestinations = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 min-h-[300px]">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">📊</span> Intent Leaderboard
      </h2>

      {sortedDestinations.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
          <p>No intent stacked yet.</p>
          <p className="text-xs">Add a destination to see the stat!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedDestinations.map(([dest, amount]) => (
            <div key={dest} className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <span className="font-bold text-indigo-900 capitalize">{dest}</span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-mono">
                ${amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}