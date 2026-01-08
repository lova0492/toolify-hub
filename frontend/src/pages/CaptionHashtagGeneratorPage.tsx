import { Hash, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface CaptionHashtagGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function CaptionHashtagGeneratorPage({ onNavigate }: CaptionHashtagGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Hash className="w-4 h-4" />
              Caption & Hashtag Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                Boost Your Social Reach
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate engaging captions and trending hashtags that increase visibility and drive engagement across all social platforms
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
              <h2 className="text-3xl font-bold">What is the Caption & Hashtag Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Caption & Hashtag Generator is your social media optimization powerhouse. It creates compelling captions that capture attention and generates strategic hashtag combinations that maximize your content's reach. Whether you're posting on Instagram, TikTok, Twitter, or LinkedIn, our AI analyzes your content context and generates platform-optimized captions with relevant, trending hashtags that help your posts get discovered by the right audience. Stop guessing which hashtags work—let AI find the perfect combination for maximum engagement.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Describe Your Post</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter keywords, topics, or themes for your social media post
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI creates engaging captions and relevant hashtag sets
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Post & Grow</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy and paste to boost your post's reach and engagement
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
                  'Instagram posts and stories',
                  'TikTok video descriptions',
                  'Twitter/X engagement',
                  'LinkedIn content marketing',
                  'Facebook business posts',
                  'Pinterest pin descriptions',
                  'YouTube video descriptions',
                  'Influencer content creation'
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
                    <h3 className="text-lg font-semibold">Increased Reach</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic hashtags help your content get discovered by new audiences
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Better Engagement</h3>
                    <p className="text-sm text-muted-foreground">
                      Compelling captions encourage likes, comments, and shares
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Trending Discovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay current with trending hashtags relevant to your niche
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time Savings</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate perfect captions and hashtags in seconds, not minutes
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
                    toolType="caption"
                    placeholder="Example: Travel adventure in Bali, sunset beach, tropical paradise, wanderlust vibes..."
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
