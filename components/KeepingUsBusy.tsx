import { DashboardCard } from './DashboardCard';
import { Clock, TrendingUp, Play, MoreHorizontal } from 'lucide-react';

export function KeepingUsBusy() {
  const inProgressItems = [
    { date: '8/10/2024', title: 'Acme Project B2B', type: 'Premium', priority: 'high' },
    { date: '8/10/2024', title: 'Covered California', type: 'Website', priority: 'medium' },
    { date: '7/29/2024', title: 'DCT Ala Digital', type: 'Brand and campaign', priority: 'low' },
    { date: '7/29/2024', title: 'Young Brands', type: 'Automation', priority: 'medium' },
    { date: '7/29/2024', title: 'Hillcrest College', type: 'Digital transformation', priority: 'high' }
  ];

  const pendingItems = [
    { date: '8/12/2024', title: 'NY Post', type: 'Brand and campaign', priority: 'low' },
    { date: '8/10/2024', title: 'NY State Student Aid', type: 'Platform Work', priority: 'medium' },
    { date: '7/29/2024', title: 'Gala', type: 'Digital Transformation', priority: 'high' },
    { date: '7/29/2024', title: 'Beth Shriell', type: 'Digital Transformation', priority: 'low' },
    { date: '7/29/2024', title: 'Stand Together', type: 'Digital Transformation', priority: 'medium' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-500 bg-green-500/10';
      default: return 'text-blue-500 bg-blue-500/10';
    }
  };

  const renderPipelineItems = (items: typeof inProgressItems) => (
    <div className="space-y-3 max-h-80 overflow-y-auto">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-4 border-l-2 border-dashed border-border">
          <div className="absolute left-[-5px] top-2 w-2 h-2 bg-primary rounded-full"></div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-muted-foreground">{item.date}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${getPriorityColor(item.priority)}`}>
                  {item.priority}
                </span>
              </div>
              <h4 className="font-medium text-card-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-lg bg-primary/10">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-medium text-foreground">What's Keeping Us Busy</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest Meeting Recording - 1/3 width */}
        <DashboardCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-red-500" />
              <h3 className="font-medium text-card-foreground">Latest Meeting</h3>
            </div>
            
            <div className="bg-red-600 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">July Team Meeting</span>
                <MoreHorizontal className="w-4 h-4" />
              </div>
              <p className="text-sm opacity-90">Monthly 1st</p>
              <div className="mt-3 bg-red-700 rounded px-3 py-2">
                <p className="text-sm font-medium">Recent Recording</p>
                <p className="text-xs opacity-75">Tuesday at 3:00PM</p>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* New Business Pipeline - 2/3 width with internal columns */}
        <div className="lg:col-span-2">
          <DashboardCard className="p-6 h-full">
            <div className="space-y-4 h-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-card-foreground">New Business Pipeline</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {/* In Progress Column */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">In Progress</h4>
                    <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">{inProgressItems.length} projects</span>
                  </div>
                  {renderPipelineItems(inProgressItems)}
                </div>

                {/* Pending Decision Column */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">Pending Decision</h4>
                    <span className="text-xs bg-orange-500/10 text-orange-500 px-2 py-1 rounded">{pendingItems.length} projects</span>
                  </div>
                  {renderPipelineItems(pendingItems)}
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}