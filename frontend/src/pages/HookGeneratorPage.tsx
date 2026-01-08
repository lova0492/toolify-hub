import { Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface HookGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function HookGeneratorPage({ onNavigate }: HookGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Hook Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create scroll-stopping hooks for Instagram Reels, YouTube Shorts, TikTok videos, and social media ads. Capture attention in the first 3 seconds and boost your engagement rates.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/hook-generator-hero.dim_800x400.png" 
            alt="Hook Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Master the Art of Attention-Grabbing Hooks</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the world of short-form video content, the first three seconds determine whether viewers keep watching or scroll past. Our AI Hook Generator creates compelling, platform-specific hooks that stop the scroll and drive engagement. Whether you're creating Reels, Shorts, TikToks, or video ads, this tool helps you craft opening lines that capture attention and keep viewers engaged.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your video topic or content theme, select your platform (Instagram Reels, YouTube Shorts, TikTok, or Ads), and our AI will generate multiple hook variations optimized for that specific platform. Each hook is designed to create curiosity, promise value, or trigger an emotional response that keeps viewers watching.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Platform-specific hooks for Reels, Shorts, TikTok, and ads</li>
              <li>Multiple hook styles: question-based, statement, curiosity gap, and more</li>
              <li>Optimized for maximum engagement and retention</li>
              <li>Tested patterns that drive viral potential</li>
              <li>Easy copy-and-use functionality</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Content creators producing short-form video content</li>
              <li>Social media managers running video campaigns</li>
              <li>Influencers looking to increase engagement rates</li>
              <li>Advertisers creating high-converting video ads</li>
              <li>Brands building their social media presence</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your video retention rates, boost engagement, and improve your chances of going viral. Our AI-generated hooks are based on proven patterns that capture attention and keep viewers watching. Stop losing viewers in the first three seconds and start creating content that performs.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Scroll-Stopping Hooks</h2>
            <ToolInterface 
              toolType="hook"
              placeholder="Enter your video topic or theme (e.g., 'productivity tips', 'cooking hacks', 'fitness motivation')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
