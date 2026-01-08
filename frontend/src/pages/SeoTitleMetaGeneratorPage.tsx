import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface SeoTitleMetaGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function SeoTitleMetaGeneratorPage({ onNavigate }: SeoTitleMetaGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">SEO Title & Meta Description Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Boost your search rankings with perfectly optimized titles, meta descriptions, and URL slugs. Our AI creates SEO-friendly content that drives clicks and improves visibility.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/seo-title-meta-hero.dim_800x400.png" 
            alt="SEO Title & Meta Description Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Optimize Your Content for Search Engines</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Search engine optimization starts with compelling titles and meta descriptions. Our AI-powered SEO Title & Meta Description Generator creates optimized content that not only ranks well in search results but also entices users to click through to your website. Whether you're a blogger, e-commerce store owner, or digital marketer, this tool helps you craft SEO elements that drive organic traffic and improve your search visibility.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Simply enter your page topic or target keywords, and our AI will generate multiple variations of SEO-optimized titles, meta descriptions, and URL slugs. Each suggestion follows SEO best practices, including optimal character counts, keyword placement, and compelling calls-to-action that improve click-through rates.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>SEO-optimized titles with proper keyword placement</li>
              <li>Meta descriptions within the ideal 150-160 character range</li>
              <li>Clean, SEO-friendly URL slugs</li>
              <li>Character count validation for all elements</li>
              <li>Multiple variations to choose from</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Bloggers optimizing their articles for search engines</li>
              <li>E-commerce stores creating product page metadata</li>
              <li>Digital marketers managing multiple landing pages</li>
              <li>Content creators improving their SEO strategy</li>
              <li>Website owners enhancing their search visibility</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Improve your search rankings, increase click-through rates, and drive more organic traffic to your website. Our tool ensures your content follows SEO best practices while remaining compelling and user-friendly. Save time on optimization and focus on creating great content while our AI handles the technical SEO elements.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate SEO Metadata</h2>
            <ToolInterface 
              toolType="seoTitleMeta"
              placeholder="Enter your page topic or target keywords (e.g., 'best running shoes for beginners', 'how to start a blog')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
