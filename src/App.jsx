import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import AddMoneyForm from './components/AddMoneyForm';

import Dashboard from './components/Dashboard';

import GroupManager from './components/GroupManager';

import VisualChart from './components/VisualChart';



function App() {

  // 1. Create a unique ID for this user session so the DB knows who is who

  const [userId] = useState(uuidv4());

 

  // 2. State to track if we are in a group or solo

  const [groupData, setGroupData] = useState({ id: null, size: 1 });



  const [contributions, setContributions] = useState([]);

  const handleGroupJoined = (id, size) => {

    setGroupData({ id, size });

  };



  return (

    <div className="max-w-6xl mx-auto p-6">

      <header className="mb-10 text-center">

        <h1 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2">🌍🪂INTENT TRAVEL🏝️🌋 </h1>

        <p className="text-gray-600 italic">"HELPING TURN YOUR MAYBE'S INTO BOARDING PASSES."</p>

        {groupData.id && (

          <div className="mt-4 inline-block bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-bold">

            Active Group: {groupData.id}

          </div>

        )}

      </header>

      <div className="max-w-md mx-auto mb-10 p-1 bg-slate-900/5 rounded-3xl border border-slate-200/60 shadow-sm">
  <div className="flex items-center gap-2 p-2">
    <div className="flex-1 relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">#</span>
      <input 
        type="text" 
        placeholder="ENTER-TRIP-CODE" 
        className="w-full pl-8 pr-4 py-3 bg-white border-none rounded-2xl text-sm font-mono tracking-widest uppercase outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-slate-700"
      />
    </div>
    <button className="bg-slate-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95">
      Join
    </button>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        <div className="space-y-6">

          <GroupManager userId={userId} onGroupJoined={handleGroupJoined} />

          <AddMoneyForm onAdd={(newOne) => setContributions([...contributions, newOne])} />

        </div>


        <div className="space-y-6">

          <Dashboard

  contributions={contributions}

  userId={userId}

  groupId={groupData.id}

/>

        </div>

      </div>

    

      <div className="mt-12">

        <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-800">

          <h2 className="text-2xl font-bold text-slate-100 mb-6">Group Consensus Visualization</h2>

          {/* This will update automatically as you add money */}

          <VisualChart contributions={contributions} />

        </div>

      </div>

    </div>

  );

}



export default App;