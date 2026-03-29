import React, { useState } from 'react';

export default function GroupManager({ onGroupJoined }) {
  const [code, setCode] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleCreate = () => {
    const fakeCode = "TRV-" + Math.floor(1000 + Math.random() * 9000);
    setCode(fakeCode);
    onGroupJoined(fakeCode, 1);
    setIsJoined(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-indigo-50">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Create a group</h2>
      {!isJoined ? (
        <button 
          onClick={handleCreate}
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Generate Group Code
        </button>
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Your Group Code:</p>
          <div className="text-3xl font-black text-indigo-600 tracking-widest bg-indigo-50 py-2 rounded-lg">
            {code}
          </div>
          <p className="text-xs text-green-600 mt-2 font-medium">✓ System Online (Demo Mode)</p>
        </div>
      )}
    </div>
  );
}