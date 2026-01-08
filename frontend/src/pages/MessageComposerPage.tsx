import { MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface MessageComposerPageProps {
  onNavigate: (page: PageType) => void;
}

export default function MessageComposerPage({ onNavigate }: MessageComposerPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <MessageSquare className="w-4 h-4" />
              Message Composer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Compose Professional Messages
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Craft clear, professional messages for any context with AI-powered writing assistance that ensures perfect tone and clarity
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
              <h2 className="text-3xl font-bold">What is the Message Composer?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Message Composer is your intelligent writing assistant that helps you create professional, contextually appropriate messages for any situation. Whether you're reaching out to clients, following up after meetings, responding to customer inquiries, or networking with industry peers, our AI ensures your messages are clear, professional, and effective. Simply describe the context and purpose of your message, and let our AI craft the perfect communication that gets results.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Describe Context</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter the purpose, recipient, and desired tone of your message
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Composition</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI crafts a professional message tailored to your needs
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Send & Connect</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy your message and send it with confidence
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
                  'Email outreach to prospects',
                  'Customer service responses',
                  'Networking follow-ups',
                  'Meeting requests',
                  'Thank you messages',
                  'Apology or clarification emails',
                  'Collaboration proposals',
                  'Professional introductions'
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
                    <h3 className="text-lg font-semibold">Professional Communication</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure every message maintains a professional tone appropriate for the context
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time-Saving</h3>
                    <p className="text-sm text-muted-foreground">
                      Compose messages in seconds instead of agonizing over every word
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Consistent Tone</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintain a consistent communication style across all your messages
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Better Responses</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear, well-structured messages get better response rates
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
                    toolType="message"
                    placeholder="Example: Write a professional follow-up email after a networking event, friendly but professional tone, mention our conversation about AI tools..."
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
