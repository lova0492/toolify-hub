import { UserCircle, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface AvatarGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function AvatarGeneratorPage({ onNavigate }: AvatarGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <UserCircle className="w-4 h-4" />
              Avatar Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Create Stunning AI Avatars
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate professional, unique avatars for your social media profiles, business cards, and digital presence in seconds
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
              <h2 className="text-3xl font-bold">What is the Avatar Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI-powered Avatar Generator transforms your descriptions into unique, professional avatars perfect for any digital platform. Whether you need a corporate headshot, a creative profile picture, or a stylized representation of yourself, our tool creates high-quality avatars that match your vision. Simply describe your ideal avatar style, characteristics, and preferences, and watch as our AI brings it to life in seconds.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Describe Your Avatar</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter details about your desired avatar style, gender, attire, and mood
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes your description and generates a matching avatar
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Download & Use</h3>
                    <p className="text-sm text-muted-foreground">
                      Download your avatar and use it across all your platforms
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
                  'Social media profile pictures',
                  'Professional business cards',
                  'Website author bios',
                  'Team member pages',
                  'Gaming profiles',
                  'Forum avatars',
                  'Email signatures',
                  'Digital portfolios'
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
                    <h3 className="text-lg font-semibold">Professional Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Get high-quality, professional-looking avatars that make a great first impression
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time-Saving</h3>
                    <p className="text-sm text-muted-foreground">
                      Create custom avatars in seconds instead of hours with traditional design tools
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Brand Consistency</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintain a consistent visual identity across all your digital platforms
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Unlimited Variations</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate as many variations as you need until you find the perfect avatar
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Example Gallery */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Example Avatars</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: '/assets/generated/avatar-female-professional.dim_200x200.png', label: 'Professional' },
                  { src: '/assets/generated/avatar-male-casual.dim_200x200.png', label: 'Casual' },
                  { src: '/assets/generated/avatar-artist-creative.dim_200x200.png', label: 'Creative' },
                  { src: '/assets/generated/avatar-tech-modern.dim_200x200.png', label: 'Tech' }
                ].map((example, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="aspect-square rounded-lg overflow-hidden border border-border/50 bg-muted/30">
                      <img src={example.src} alt={example.label} className="w-full h-full object-cover" />
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">{example.label}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool Interface */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <ToolInterface 
                    toolType="avatar"
                    placeholder="Example: Create a professional female avatar with a friendly smile, wearing business casual attire, modern tech style..."
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
