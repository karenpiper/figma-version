import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { ScrollingMarquee } from './components/ScrollingMarquee';
import { ForYou } from './components/ForYou';
import { Vibes } from './components/Vibes';
import { KeepingUsBusy } from './components/KeepingUsBusy';
import { WorkShowcase } from './components/WorkShowcase';
import { BottomSections } from './components/BottomSections';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
        <Header />
        <ScrollingMarquee />
        
        <main className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <div className="space-y-12">
            {/* For You Section */}
            <section>
              <ForYou />
            </section>
            
            {/* Vibes Section */}
            <section>
              <Vibes />
            </section>
            
            {/* What's Keeping Us Busy Section */}
            <section>
              <KeepingUsBusy />
            </section>
            
            {/* Latest Work Showcase Section */}
            <section>
              <WorkShowcase />
            </section>

            {/* Bottom Sections */}
            <section>
              <BottomSections />
            </section>
          </div>
        </main>
        
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}