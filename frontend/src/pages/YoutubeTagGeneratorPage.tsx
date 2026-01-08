import { Youtube, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface YoutubeTagGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function YoutubeTagGeneratorPage({ onNavigate }: YoutubeTagGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">YouTube Tag Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Generate search-optimized tags for your YouTube videos. Improve discoverability, increase views, and help your content rank higher in YouTube search results.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/youtube-tag-hero.dim_800x400.png" 
            alt="YouTube Tag Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Optimize Your Videos for YouTube Search</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              YouTube tags play a crucial role in helping the algorithm understand your video content and recommend it to the right audience. Our YouTube Tag Generator creates search-optimized tags that improve your video's discoverability and help you rank higher in search results. Whether you're a new creator or an established channel, proper tagging is essential for growing your audience and increasing views.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your video topic or main keywords, and our AI will generate a comprehensive list of relevant tags. The tool provides a mix of broad tags for general reach, specific tags for targeted audiences, and long-tail tags for niche searches. Each tag is optimized to help YouTube's algorithm categorize and recommend your content effectively.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Search-optimized tags for better discoverability</li>
              <li>Mix of broad, specific, and long-tail keywords</li>
              <li>Relevance scoring for each tag</li>
              <li>Category-specific tag suggestions</li>
              <li>Easy copy-and-paste functionality</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>YouTube creators optimizing their videos</li>
              <li>Content marketers managing video campaigns</li>
              <li>Businesses building their YouTube presence</li>
              <li>Educators sharing educational content</li>
              <li>Anyone looking to grow their YouTube channel</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your video views, improve search rankings, and help YouTube recommend your content to the right audience. Our AI-generated tags are based on search trends and best practices, ensuring your videos get maximum visibility. Stop guessing which tags to use and start using data-driven tag strategies that actually work.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate YouTube Tags</h2>
            <ToolInterface 
              toolType="youtubeTag"
              placeholder="Enter your video topic or main keywords (e.g., 'how to edit videos', 'cooking tutorial', 'tech review')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
