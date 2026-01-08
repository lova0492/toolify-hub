import { TrendingUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface HashtagResearchToolPageProps {
  onNavigate: (page: PageType) => void;
}

export default function HashtagResearchToolPage({ onNavigate }: HashtagResearchToolPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Hashtag Research Tool</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover popular hashtags by category, keyword, and engagement level. Increase your social media reach and improve content discoverability with strategic hashtag selection.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/hashtag-research-hero.dim_800x400.png" 
            alt="Hashtag Research Tool Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Strategic Hashtag Selection for Maximum Reach</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hashtags are essential for social media discoverability, but choosing the right ones can be challenging. Our Hashtag Research Tool uses logic-based generation to provide you with popular, relevant hashtags organized by category and engagement level. Whether you're posting on Instagram, Twitter, TikTok, or LinkedIn, this tool helps you select hashtags that expand your reach and connect you with your target audience.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your content topic or niche, select a category (such as fitness, business, travel, or food), and choose your desired engagement level (high, medium, or low competition). Our tool will generate a curated list of hashtags that match your criteria, helping you balance between popular hashtags for reach and niche hashtags for targeted engagement.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Category-based hashtag organization</li>
              <li>Engagement level filtering (high, medium, low competition)</li>
              <li>Keyword-specific hashtag suggestions</li>
              <li>Mix of popular and niche hashtags for optimal reach</li>
              <li>Platform-agnostic recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Social media marketers optimizing post reach</li>
              <li>Content creators building their audience</li>
              <li>Influencers expanding their visibility</li>
              <li>Businesses increasing brand awareness</li>
              <li>Anyone looking to improve social media engagement</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your content's discoverability, reach new audiences, and improve engagement rates with strategic hashtag selection. Our tool helps you avoid over-saturated hashtags while identifying opportunities in niche communities. Save time on hashtag research and focus on creating great content while our tool handles the optimization.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Research Hashtags</h2>
            <ToolInterface 
              toolType="hashtagResearch"
              placeholder="Enter your content topic or niche (e.g., 'fitness motivation', 'small business tips', 'travel photography')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
