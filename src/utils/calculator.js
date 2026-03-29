export const calculateGroupMetrics = (contributions, totalMembers) => {
  const destMap = {};

  contributions.forEach(con => {
    const dest = con.destination.toLowerCase();
    if (!destMap[dest]) {
      destMap[dest] = { totalSum: 0, participants: new Set() };
    }
    destMap[dest].totalSum += Number(con.amount);
    destMap[dest].participants.add(con.userId);
  });

  return Object.keys(destMap).map(dest => {
    const data = destMap[dest];
    const participantCount = data.participants.size;
    // Score = Total Money * (People interested / Total Group Size)
    const groupScore = data.totalSum * (participantCount / totalMembers);
    
    return {
      destination: dest.charAt(0).toUpperCase() + dest.slice(1),
      totalSymbolicMoney: data.totalSum,
      participants: participantCount,
      groupScore: Number(groupScore.toFixed(2))
    };
  }).sort((a, b) => b.groupScore - a.groupScore);
};