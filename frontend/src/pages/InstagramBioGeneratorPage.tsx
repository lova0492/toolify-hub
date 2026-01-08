import { AtSign, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface InstagramBioGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function InstagramBioGeneratorPage({ onNavigate }: InstagramBioGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
              <AtSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Instagram Bio Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create unique, engaging Instagram bios that capture your personality and attract followers. Perfect for personal profiles, business accounts, and influencer branding.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/instagram-bio-hero.dim_800x400.png" 
            alt="Instagram Bio Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Make Your First Impression Count</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your Instagram bio is often the first thing people see when they visit your profile. It's your chance to make a memorable first impression, communicate your value, and convince visitors to hit that follow button. Our AI Instagram Bio Generator creates unique, personality-driven bios that capture attention and convert profile visitors into followers. Whether you're building a personal brand, promoting a business, or establishing yourself as an influencer, this tool helps you craft the perfect bio.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Simply describe yourself, your business, or your niche in a few words, and our AI will generate multiple bio variations that capture your essence. Each bio is crafted to be concise, engaging, and optimized for Instagram's 150-character limit. Choose from different styles including professional, casual, creative, or humorous.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Personality-driven bios that reflect your unique voice</li>
              <li>Optimized for Instagram's 150-character limit</li>
              <li>Multiple style options: professional, casual, creative, humorous</li>
              <li>Emoji suggestions for visual appeal</li>
              <li>Call-to-action integration for better engagement</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Personal profiles looking to stand out</li>
              <li>Business accounts building brand identity</li>
              <li>Influencers establishing their niche</li>
              <li>Content creators attracting their target audience</li>
              <li>Entrepreneurs promoting their services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your follower conversion rate with a bio that clearly communicates who you are and what you offer. Our AI-generated bios are designed to be memorable, searchable, and action-oriented. Stop struggling with writer's block and create a professional bio in seconds that helps you grow your Instagram presence.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Your Instagram Bio</h2>
            <ToolInterface 
              toolType="instagramBio"
              placeholder="Describe yourself or your business (e.g., 'fitness coach helping busy moms', 'travel photographer', 'vegan food blogger')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
