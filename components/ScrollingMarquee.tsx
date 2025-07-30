export function ScrollingMarquee() {
  const snaps = [
    "Coffee chat with design team",
    "New project kickoff meeting",
    "Client presentation went amazing!",
    "Team lunch at the new Italian place",
    "Quarterly planning session complete",
    "Friday team happy hour planned",
    "New hire orientation scheduled",
    "Product demo received great feedback",
    "Strategy workshop next week",
    "Weekend team building event"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 border-y border-pink-300/30 py-4 shadow-lg">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {snaps.map((snap, index) => (
          <span key={index} className="mx-8 text-white font-medium text-sm drop-shadow-sm">
            📸 {snap}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {snaps.map((snap, index) => (
          <span key={`duplicate-${index}`} className="mx-8 text-white font-medium text-sm drop-shadow-sm">
            📸 {snap}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}