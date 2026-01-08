import { FileVideo, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface ScriptGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ScriptGeneratorPage({ onNavigate }: ScriptGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <FileVideo className="w-4 h-4" />
              YouTube Script Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Create Engaging Video Scripts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate complete, structured YouTube scripts with compelling intros, informative body content, and strong calls-to-action
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
              <h2 className="text-3xl font-bold">What is the YouTube Script Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The YouTube Script Generator is your complete video content creation assistant. It generates fully structured scripts with engaging introductions that hook viewers, informative body content that delivers value, and compelling outros with clear calls-to-action. Whether you're creating educational content, product reviews, vlogs, or marketing videos, our AI crafts scripts that keep viewers engaged from start to finish. Simply provide your topic and style preferences, and receive a professional script ready for recording.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Enter Topic & Style</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe your video topic, target audience, and desired style
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Script Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI generates a complete script with intro, body, and outro
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Record & Upload</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the script to create your video and publish with confidence
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
                  'Educational and tutorial videos',
                  'Product reviews and unboxings',
                  'Vlogs and lifestyle content',
                  'Marketing and promotional videos',
                  'How-to guides and demonstrations',
                  'Interview and podcast formats',
                  'Commentary and opinion pieces',
                  'Documentary-style content'
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
                    <h3 className="text-lg font-semibold">Structured Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Well-organized scripts with clear intro, body, and outro sections
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Engaging Narratives</h3>
                    <p className="text-sm text-muted-foreground">
                      Scripts designed to hook viewers and keep them watching until the end
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time-Efficient</h3>
                    <p className="text-sm text-muted-foreground">
                      Create complete video scripts in minutes instead of hours of planning
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Professional Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Scripts that sound natural and professional when recorded
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Example Structure */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Script Structure</h2>
              <div className="space-y-4">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Badge variant="outline">INTRO</Badge>
                    <p className="text-sm text-muted-foreground">
                      Hook viewers with an engaging opening, introduce the topic, and set expectations for the video
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Badge variant="outline">BODY</Badge>
                    <p className="text-sm text-muted-foreground">
                      Deliver your main content with clear points, examples, and valuable information that keeps viewers engaged
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Badge variant="outline">OUTRO</Badge>
                    <p className="text-sm text-muted-foreground">
                      Summarize key points, include a strong call-to-action, and encourage viewers to like, subscribe, and comment
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
                    toolType="script"
                    placeholder="Example: Topic: How AI is transforming healthcare, Style: informative and engaging, Target audience: healthcare professionals and tech enthusiasts..."
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
