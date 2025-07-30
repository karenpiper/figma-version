import { Calendar, BookOpen, Database, ExternalLink, Copy } from 'lucide-react';

export function BottomSections() {
  const teamMoments = [
    {
      type: "Meeting",
      title: "Strategy Sprint Planning",
      date: "Mar 26 • 9:00 AM",
      attendees: "Karen, J +2",
      color: "bg-blue-600",
      bgTint: "bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 border-blue-500/20"
    },
    {
      type: "Due Date", 
      title: "Client Presentation Deadline",
      date: "Mar 22 • 6:00 PM",
      attendees: "Mike C, +1",
      color: "bg-orange-600",
      bgTint: "bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900 border-orange-500/20"
    },
    {
      type: "PTO",
      title: "Alex - Vacation",
      date: "Mar 25 • All Day",
      attendees: "Alex R",
      color: "bg-purple-600",
      bgTint: "bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 border-purple-500/20"
    },
    {
      type: "Office Event",
      title: "Team Happy Hour", 
      date: "Mar 28 • 5:30 PM",
      attendees: "All Team",
      color: "bg-green-600",
      bgTint: "bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 border-green-500/20"
    }
  ];

  const teamStaples = [
    {
      title: "Strategy Playbook",
      description: "Essential guide for team reference.",
      link: "#"
    },
    {
      title: "Brand Voice Guidelines", 
      description: "Essential reference for team reference.",
      link: "#"
    },
    {
      title: "Client Onboarding Process",
      description: "Essential process for team reference.",
      link: "#"
    },
    {
      title: "Competitive Analysis Template",
      description: "Essential template for team reference.",
      link: "#"
    }
  ];

  const weeklyReads = [
    {
      title: "Q1 Market Trends Report",
      description: "Industry insights",
      link: "#"
    },
    {
      title: "AI in Strategic Planning",
      description: "Harvard Business Review",
      link: "#"
    },
    {
      title: "Customer Journey Mapping 2024",
      description: "UX Collective",
      link: "#"
    }
  ];

  const resources = [
    {
      title: "Market Research Database",
      description: "Access to premium market research and industry reports",
      credentials: "Database • Password: research2024",
      type: "Research"
    },
    {
      title: "Competitive Intelligence Hub", 
      description: "Internal competitive analysis and insights",
      credentials: "Notion • Password: intel456",
      type: "Templates"
    },
    {
      title: "Customer Insights Repository",
      description: "User research findings and customer feedback",
      credentials: "Airtable • Password: insights789",
      type: "Tools"
    },
    {
      title: "Industry Trend Reports",
      description: "Quarterly trend analysis and forecasting",
      credentials: "Google Drive • Password: trends123",
      type: "Training"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Team Moments */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 w-full">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-xl font-medium text-foreground">Team Moments</h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full ml-4"></div>
        </div>
        
        {/* Container box for team moments */}
        <div className="bg-gray-50 dark:bg-card/50 rounded-2xl border border-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMoments.map((moment, index) => (
              <div key={index} className={`${moment.bgTint} rounded-xl border shadow-sm p-4 hover:shadow-md transition-all duration-200`}>
                <div className="space-y-3">
                  <div className={`${moment.color} text-white text-xs font-medium px-2 py-1 rounded w-fit`}>
                    {moment.type}
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm">{moment.title}</h3>
                    <p className="text-gray-300 text-xs mt-1">{moment.date}</p>
                    <p className="text-gray-300 text-xs mt-1">{moment.attendees}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Must Reads */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 w-full">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <BookOpen className="w-5 h-5 text-amber-500" />
          </div>
          <h2 className="text-xl font-medium text-foreground">Must Reads</h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team Staples */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">⭐</span>
              <h3 className="font-medium text-foreground">Team Staples</h3>
            </div>
            
            <div className="space-y-3">
              {teamStaples.map((item, index) => (
                <div key={index} className="rounded-2xl border border-border backdrop-blur-sm overflow-hidden bg-card text-card-foreground p-4 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                    </div>
                    <button className="text-amber-500 hover:text-amber-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* This Week's Must Reads */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">⏰</span>
              <h3 className="font-medium text-foreground">This Week's Must Reads</h3>
            </div>
            
            <div className="space-y-3">
              {weeklyReads.map((item, index) => (
                <div key={index} className="rounded-2xl border border-border backdrop-blur-sm overflow-hidden bg-card text-card-foreground p-4 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                    </div>
                    <button className="text-orange-500 hover:text-orange-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Repository */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 w-full">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Database className="w-5 h-5 text-emerald-500" />
          </div>
          <h2 className="text-xl font-medium text-foreground">Resources Repository</h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full ml-4"></div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {['Research', 'Templates', 'Tools', 'Training'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === 'Research' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-secondary text-muted-foreground hover:bg-accent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div key={index} className="rounded-2xl border border-border backdrop-blur-sm overflow-hidden bg-card text-card-foreground p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-card-foreground">{resource.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-secondary rounded px-3 py-1">
                        <span className="text-emerald-500 text-xs font-medium">{resource.credentials.split(' • ')[0]}</span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-muted-foreground text-xs">{resource.credentials.split(' • ')[1]}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500/20 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}