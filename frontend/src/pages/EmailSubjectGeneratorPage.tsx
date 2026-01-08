import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface EmailSubjectGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function EmailSubjectGeneratorPage({ onNavigate }: EmailSubjectGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Email Subject Line Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create engaging, high-converting email subject lines that boost open rates. Perfect for marketing campaigns, newsletters, and promotional emails.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/email-subject-hero.dim_800x400.png" 
            alt="Email Subject Line Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Boost Your Email Open Rates</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The subject line is the most critical element of any email campaign. It determines whether your email gets opened or ignored. Our Email Subject Line Generator creates compelling, high-converting subject lines that capture attention and drive opens. Whether you're running marketing campaigns, sending newsletters, or promoting products, this tool helps you craft subject lines that stand out in crowded inboxes and motivate recipients to click.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your email topic or campaign goal, and our AI will generate multiple subject line variations optimized for high open rates. Each suggestion uses proven psychological triggers, urgency tactics, and curiosity gaps that encourage recipients to open your emails. Choose from different styles including promotional, informational, curiosity-driven, and urgency-based.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>High-converting subject lines based on proven patterns</li>
              <li>Multiple style variations for different campaign types</li>
              <li>Optimal character length for mobile and desktop</li>
              <li>Psychological triggers and urgency tactics</li>
              <li>A/B testing suggestions for optimization</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Email marketers running campaigns</li>
              <li>E-commerce businesses promoting products</li>
              <li>Newsletter creators engaging subscribers</li>
              <li>Sales teams reaching out to prospects</li>
              <li>Content creators building their email list</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase your email open rates, improve campaign performance, and drive more conversions. Our AI-generated subject lines are based on data-driven insights and proven email marketing strategies. Stop losing potential customers to unopened emails and start creating subject lines that get results.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Email Subject Lines</h2>
            <ToolInterface 
              toolType="emailSubject"
              placeholder="Enter your email topic or campaign goal (e.g., 'summer sale announcement', 'new product launch', 'weekly newsletter')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
