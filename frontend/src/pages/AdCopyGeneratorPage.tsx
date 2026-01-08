import { Megaphone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface AdCopyGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function AdCopyGeneratorPage({ onNavigate }: AdCopyGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-lime-500 shadow-lg">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Ad Copy Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create compelling ad copy optimized for Google Ads and Facebook Ads. Drive conversions, increase ROI, and craft messages that resonate with your target audience.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">High-Converting Ad Copy in Seconds</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Creating effective ad copy requires understanding your audience, crafting compelling messages, and optimizing for conversions. Our AI Ad Copy Generator creates platform-specific ad copy for Google Ads and Facebook Ads that drives results. Whether you're running PPC campaigns, social media ads, or retargeting campaigns, this tool helps you write ad copy that captures attention, communicates value, and motivates action.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your product or service details, target audience, and campaign goal, and our AI will generate multiple ad copy variations optimized for your chosen platform. Each variation includes headlines, descriptions, and calls-to-action formatted according to platform specifications. The tool uses proven copywriting frameworks and conversion optimization techniques to create ads that perform.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Platform-specific formatting for Google and Facebook Ads</li>
              <li>Multiple ad variations for A/B testing</li>
              <li>Conversion-optimized headlines and descriptions</li>
              <li>Compelling calls-to-action that drive clicks</li>
              <li>Character count compliance for each platform</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Digital marketers running paid advertising campaigns</li>
              <li>E-commerce businesses promoting products</li>
              <li>Agencies managing multiple client campaigns</li>
              <li>Small businesses with limited marketing budgets</li>
              <li>Anyone looking to improve ad performance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your conversion rates, lower your cost per acquisition, and maximize your advertising ROI. Our AI-generated ad copy is based on proven conversion principles and platform best practices. Stop wasting ad spend on underperforming copy and start creating ads that convert visitors into customers.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Ad Copy</h2>
            <ToolInterface 
              toolType="adCopy"
              placeholder="Describe your product/service and target audience (e.g., 'online course for entrepreneurs', 'eco-friendly skincare products', 'B2B software solution')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
