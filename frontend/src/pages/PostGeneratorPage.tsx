import { FileText, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface PostGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function PostGeneratorPage({ onNavigate }: PostGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <FileText className="w-4 h-4" />
              Post Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Create Engaging Social Posts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate compelling social media content that resonates with your audience and drives engagement across all platforms
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What is it */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is the Post Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Post Generator is your AI-powered content creation assistant that helps you craft engaging social media posts in seconds. Whether you're managing a brand, building your personal presence, or running marketing campaigns, our tool generates high-quality, platform-optimized content tailored to your topic, tone, and target audience. Say goodbye to writer's block and hello to consistent, engaging social media content that drives results.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Enter Your Topic</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe your post topic, target audience, and desired tone
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Creates Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI generates engaging, platform-optimized post content
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Post & Engage</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy your post and share it across your social platforms
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'LinkedIn professional updates',
                  'Twitter/X thought leadership',
                  'Facebook community engagement',
                  'Instagram story captions',
                  'Content marketing campaigns',
                  'Product announcements',
                  'Event promotions',
                  'Daily social media scheduling'
                ].map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Consistent Posting</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintain a regular posting schedule without spending hours on content creation
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Increased Engagement</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate content optimized for engagement with compelling hooks and calls-to-action
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time Efficiency</h3>
                    <p className="text-sm text-muted-foreground">
                      Create weeks of content in minutes instead of hours of brainstorming
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Multiple Variations</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate different versions to test what resonates best with your audience
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tool Interface */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <ToolInterface 
                    toolType="post"
                    placeholder="Example: Write a motivational LinkedIn post about overcoming challenges in entrepreneurship, professional tone, include a call-to-action..."
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/20 border border-border/50 rounded-lg p-8 text-center backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">Advertisement Space - 728x90</p>
          </div>
        </div>
      </div>
    </div>
  );
}
