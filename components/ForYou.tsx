import { DashboardCard } from './DashboardCard';
import { Code, Sparkles, Camera } from 'lucide-react';

export function ForYou() {
  const personalSnaps = [
    { text: "Great work on the Acme presentation!", time: "2 hours ago" },
    { text: "Your strategic insights really shaped the client meeting", time: "Yesterday" },
    { text: "Keep up the excellent work on the digital transformation project", time: "2 days ago" },
    { text: "Your leadership on the Ohio campaign was impressive", time: "3 days ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-lg bg-purple-500/10">
          <Sparkles className="w-5 h-5 text-purple-500" />
        </div>
        <h2 className="text-xl font-medium text-foreground">For You</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full ml-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code-ascope */}
        <DashboardCard className="bg-gradient-to-br from-purple-500/20 via-card to-indigo-500/10 border-purple-500/20 shadow-inner p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-medium text-card-foreground">Code-ascope</h3>
            </div>
            
            <blockquote className="border-l-4 border-purple-500/50 pl-4 py-2">
              <p className="text-card-foreground italic leading-relaxed">
                "Today, the universe is sending you a memo titled 'Operation: Shine Bright!' Expect 
                your ideas to ignite like sparklers and possibly create some organized chaos. Your 
                strategic mind is sharper than a katana, and projects will suddenly flow like 
                the office plants are growing. That being said, there's something about your current 
                workflow that feels a bit more polished. Like a well-oiled machine that 
                doesn't quite feel fully dialed yet. But you know what, that's okay. 'Don't attempt to 
                connect the coffee method. Like approaching a rodent, this is about patience."
              </p>
              <footer className="text-purple-500 text-sm mt-2">
                — Your Astrologer
              </footer>
            </blockquote>
          </div>
        </DashboardCard>

        {/* Snaps About You */}
        <DashboardCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-medium text-card-foreground">Snaps About You</h3>
            </div>
            
            <div className="space-y-3">
              {personalSnaps.map((snap, index) => (
                <div key={index} className="rounded-xl ring-1 ring-border p-4 bg-secondary hover:ring-primary/50 hover:bg-secondary/80 transition-all duration-200">
                  <p className="text-card-foreground text-sm mb-2">{snap.text}</p>
                  <p className="text-muted-foreground text-xs">{snap.time}</p>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}