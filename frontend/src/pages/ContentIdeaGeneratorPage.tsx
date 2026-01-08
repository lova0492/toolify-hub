import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface ContentIdeaGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ContentIdeaGeneratorPage({ onNavigate }: ContentIdeaGeneratorPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Content Idea Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Never run out of content ideas again. Generate creative, niche-specific ideas for blog posts, YouTube videos, and Instagram content with our AI-powered idea generator.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Endless Content Inspiration at Your Fingertips</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Content creation can be challenging, especially when you're facing creative blocks or struggling to come up with fresh ideas. Our AI Content Idea Generator solves this problem by providing you with unlimited, niche-specific content ideas tailored to your audience and platform. Whether you're a blogger, YouTuber, or Instagram creator, this tool helps you maintain a consistent content calendar with engaging topics that resonate with your audience.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our AI analyzes your niche, target audience, and content preferences to generate relevant, trending ideas. Simply select your content type (blog, YouTube, or Instagram), choose your niche, and let the AI do the rest. Each idea comes with a brief description to help you understand the concept and how to develop it further.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Generate ideas for blog posts, YouTube videos, and Instagram content</li>
              <li>Niche-specific suggestions tailored to your audience</li>
              <li>Randomized outputs for fresh perspectives</li>
              <li>One-click copy functionality for easy use</li>
              <li>Unlimited idea generation to keep your content calendar full</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Content creators planning their editorial calendar</li>
              <li>Bloggers looking for trending topics in their niche</li>
              <li>YouTubers seeking video ideas that drive engagement</li>
              <li>Instagram creators developing content series</li>
              <li>Marketing teams brainstorming campaign concepts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Save hours of brainstorming time and overcome creative blocks with AI-generated ideas. Our tool helps you discover trending topics, explore new angles, and maintain a consistent posting schedule. With niche-specific suggestions, you'll create content that truly resonates with your target audience and drives engagement across all platforms.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Content Ideas</h2>
            <ToolInterface 
              toolType="contentIdea"
              placeholder="Enter your niche or topic (e.g., 'fitness for beginners', 'tech reviews', 'vegan recipes')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
