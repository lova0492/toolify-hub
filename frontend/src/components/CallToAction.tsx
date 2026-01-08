import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  onGetStarted: () => void;
  username: string | null;
}

export default function CallToAction({ onGetStarted, username }: CallToActionProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphic card */}
          <div className="relative rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Ready to Transform Your Workflow?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {username 
                  ? "Continue exploring our powerful AI tools and take your content creation to the next level."
                  : "Join thousands of creators who are already using AI to supercharge their content creation process. Get started for free today."
                }
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-10 py-7 h-auto group shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {username ? 'Explore More Tools' : 'Sign In to Get Started'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Features list */}
              <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>Instant access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
