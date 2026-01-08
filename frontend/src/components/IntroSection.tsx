import { Sparkles, Users, Target, Zap, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Introduction */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to AI Tool Hub</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your Complete AI Toolkit for
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Content Creation</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              AI Tool Hub is a comprehensive platform offering <strong>26+ powerful AI-powered tools</strong> designed specifically for content creators, marketers, social media managers, bloggers, and creative professionals. Whether you're crafting engaging social media posts, optimizing content for SEO, generating professional avatars, or analyzing text metrics, our suite of intelligent tools empowers you to work smarter, faster, and more creatively.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From AI content generation and image prompt creation to text processing utilities and SEO optimization tools, we've built everything you need to enhance your digital presence and streamline your workflow. No technical expertise required—just describe what you need, and our AI handles the rest. Best of all, you can start using our tools immediately with no credit card required.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Built for Creators</h3>
                <p className="text-sm text-muted-foreground">
                  Designed specifically for content creators, marketers, and professionals who need reliable AI tools for daily workflows
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">26+ AI Tools</h3>
                <p className="text-sm text-muted-foreground">
                  From content generation and SEO optimization to text processing and image tools—everything you need in one place
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">No Expertise Needed</h3>
                <p className="text-sm text-muted-foreground">
                  User-friendly interfaces with instant results—no technical knowledge or AI expertise required
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Boost Productivity</h3>
                <p className="text-sm text-muted-foreground">
                  Save hours of work with AI automation—create content in seconds that would normally take hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Free to Start</h3>
                <p className="text-sm text-muted-foreground">
                  Try our tools immediately with no credit card required—experience the power of AI risk-free
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Professional Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Generate professional-grade content, graphics, and copy that rivals human-created work
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that powerful AI tools should be accessible to everyone, not just large enterprises with big budgets. Our mission is to democratize AI technology by providing a comprehensive suite of tools that empower creators, entrepreneurs, and professionals to produce better content faster, compete more effectively, and focus on what they do best—creating value for their audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
