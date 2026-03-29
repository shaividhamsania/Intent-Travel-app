# INTENT TRAVEL

**Intent Travel** is a financial intent engine designed to solve the misery of getting a trip out of the group chat. With data driven suggestions and visualizations, it bridges the gap between planning and executing a trip a majority or everyone from the group is trying to take within a budget. 

---

## 💡 The Problem
In groups, there's almost always conflicting travel views. This lack of **tangible intent** leads to indecision, missed bookings, and travel plans that never leave the chat.

## 🚀 The Solution (& future feature additions)
Intent Travel introduces a **Consensus Leaderboard**. The willingness to go to a place is measured by how much someone is willing to pay to go to a place. If the stakes are high, the value of the place is higher than the rest. The places with the highest willingness to pay attached to it are places preferred more. Well there is a caveat and it is that doesn't that make just the rich have a veto over the lesser privileged? To solve that issue, I am going to be including a preference tracker that tracks which place has the most amount of people willing to go to that place. Now as obvious as it seems, the place that will be highest preferred to go to would have the most amount of people vouch for it and also a relatively higher cumulative willingness to pay attached to it (as would be evident from the graphs).

Decisions like these are best made when they're data driven and so I am going to analyze hotel, flights, food, attractions and activity cost APIs for the cities and provide a budget required to travel to a place. If the cumulative of all spendings the group can make is lesser than the budget, Intent Travel will suggest them cheaper, next best preferred destinations AND budget friendly activities, stays, etc options for that highest preferred place and the group gets to choose which one to go ahead with. 

I also want to make the UI/UX and design scalable to an extent where I incorporate a mapping service like Google maps and it can become an interactive, game-y experience for users. 

---

## 🛠️ Technical Stack
* **Frontend:** React
* **Styling:** Tailwind CSS (Custom Soft-UI / Bubbly Aesthetic)
* **Data Visualization:** UI designed for future Chart.js integration.
* **Architecture:** Component-driven design for rapid scaling and modularity.
* **AI:** Used for rapid prototyping and component structuring.

---

## 🧠 Key Features
* **The Engine:** A custom aggregator that sorts and ranks destinations based on total financial weight.
* **Dynamic Analytics:** A responsive bar chart that updates in real-time as new "stakes" are added.
* **Group Sync:** Unique group ID generation to simulate a shared environment.
* **AI Integration:** While the current version is logic for the MVP, the React state is designed work well with LLM prompts ensuring smooth transition to a possible automated agent version.
* **Soft-UI Design:** A "no-edge" aesthetic built with custom Tailwind configurations and the Fredoka/Quicksand font families for a modern, friendly user experience.

---

## Some Formulae used
* **Total spending intent for a city** = Sum of all individual spending intent inputs for the city
In the code In (Dashboard.jsx) I used a method called .reduce().  it looks at your list: [ {Bali: 100}, {Tokyo: 200}, {Bali: 50} ] and "reduces" it down to a summary: { Bali: 150, Tokyo: 200 }

* **.sort((a, b) => b[1] - a[1])** I used a priority sort that ensures the destination with the most money associated with it always jumps to the top of the list. It creates a competitive-leaderboard feel.

---

## Challenges I overcame: 
I navigated a critical backend connectivity issue by switching to implementing a local state management system for a reliable demo. 
---
