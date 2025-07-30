import { DashboardCard } from './DashboardCard';
import { Music, HelpCircle, Play, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vibes() {
  const playlistSongs = [
    { title: "Late Night Vibes", artist: "Synthwave Collective", duration: "3:45" },
    { title: "Focus Flow", artist: "Lo-Fi Beats", duration: "4:12" },
    { title: "Creative Energy", artist: "Ambient Studios", duration: "5:23" },
    { title: "Strategy Session", artist: "Deep Work Mix", duration: "3:58" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-lg bg-pink-500/10">
          <Music className="w-5 h-5 text-pink-500" />
        </div>
        <h2 className="text-xl font-medium text-foreground">Vibes</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Beast Babe */}
        <DashboardCard className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <h3 className="font-medium text-card-foreground">Beast Babe</h3>
            </div>
            
            <div className="relative inline-block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Adam Kauser"
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Winner!
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-card-foreground">Adam Kauser</h4>
              <p className="text-sm text-muted-foreground">Green Unveiled</p>
              <p className="text-sm text-muted-foreground">Berlin</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg p-3">
              <p className="text-sm font-medium text-pink-500">This Week's Champion</p>
              <p className="text-xs text-muted-foreground mt-1">Outstanding project delivery</p>
            </div>
          </div>
        </DashboardCard>

        {/* Question of the Week */}
        <DashboardCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-yellow-500" />
              <h3 className="font-medium text-card-foreground">Question of the Week</h3>
            </div>
            
            <div className="text-center py-4">
              <div className="bg-yellow-500/10 rounded-lg p-4 mb-4">
                <p className="text-lg text-yellow-500 font-medium italic mb-2">
                  "Are hot dogs a sandwich?"
                </p>
                <p className="text-sm text-muted-foreground">—Adam Kauser</p>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-green-500/10 text-green-500 py-2 px-3 rounded-lg text-sm hover:bg-green-500/20 transition-colors">
                  Yes (12)
                </button>
                <button className="flex-1 bg-red-500/10 text-red-500 py-2 px-3 rounded-lg text-sm hover:bg-red-500/20 transition-colors">
                  No (8)
                </button>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Playlist */}
        <DashboardCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-emerald-500" />
              <h3 className="font-medium text-card-foreground">Team Playlist</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-emerald-500/10 rounded-lg p-3">
                <p className="text-emerald-500 font-medium text-sm">Now Playing</p>
                <p className="text-card-foreground text-sm">{playlistSongs[0].title}</p>
                <p className="text-muted-foreground text-xs">{playlistSongs[0].artist} • {playlistSongs[0].duration}</p>
              </div>
              
              <div className="space-y-2">
                {playlistSongs.slice(1).map((song, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-secondary transition-colors">
                    <div>
                      <p className="text-card-foreground text-sm">{song.title}</p>
                      <p className="text-muted-foreground text-xs">{song.artist}</p>
                    </div>
                    <span className="text-muted-foreground text-xs">{song.duration}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                <Play className="w-4 h-4" />
                Open in Spotify
              </button>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}