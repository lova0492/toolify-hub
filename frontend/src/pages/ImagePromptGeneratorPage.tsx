import { Lightbulb, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface ImagePromptGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ImagePromptGeneratorPage({ onNavigate }: ImagePromptGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-green-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Lightbulb className="w-4 h-4" />
              Image Prompt Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                Create Perfect AI Image Prompts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform simple ideas into detailed, optimized prompts that generate stunning AI images with tools like Midjourney, DALL-E, and Stable Diffusion
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
              <h2 className="text-3xl font-bold">What is the Image Prompt Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Image Prompt Generator is your creative partner for AI image generation. It takes your basic ideas and transforms them into detailed, optimized prompts that produce stunning results with popular AI image generators. Whether you're creating marketing visuals, digital art, concept designs, or social media graphics, our tool helps you craft prompts with the right keywords, style descriptors, and technical parameters to get exactly what you envision. No more trial and error—get professional-quality prompts on the first try.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Enter Your Idea</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe your image concept, theme, or visual idea
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">AI Enhancement</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI expands your idea into a detailed, optimized prompt
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Generate Images</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the prompt in your favorite AI image generator
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
                  'Marketing and advertising visuals',
                  'Social media graphics',
                  'Digital art creation',
                  'Concept design and prototyping',
                  'Book cover illustrations',
                  'Website hero images',
                  'Product visualization',
                  'Creative brainstorming'
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
                    <h3 className="text-lg font-semibold">Better AI Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized prompts produce higher quality, more accurate AI-generated images
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Creative Inspiration</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover new creative directions and style combinations you hadn't considered
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Prompt Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn effective prompt engineering techniques through AI-generated examples
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Time Efficiency</h3>
                    <p className="text-sm text-muted-foreground">
                      Skip the trial-and-error phase and get great results faster
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
                    toolType="imagePrompt"
                    placeholder="Example: A futuristic city at sunset, cyberpunk aesthetic, neon lights, flying cars, detailed architecture..."
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
