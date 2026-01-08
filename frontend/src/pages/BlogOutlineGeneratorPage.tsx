import { BookOpen, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolInterface from '../components/ToolInterface';
import type { PageType } from '../App';

interface BlogOutlineGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function BlogOutlineGeneratorPage({ onNavigate }: BlogOutlineGeneratorPageProps) {
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Blog Outline Generator</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create structured, SEO-optimized blog outlines for long-form content. Organize your ideas, improve content flow, and write better articles faster.
          </p>
        </div>

        {/* Demo Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/assets/generated/blog-outline-hero.dim_800x400.png" 
            alt="Blog Outline Generator Demo"
            className="w-full rounded-2xl shadow-2xl border border-border"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Structure Your Content for Success</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A well-structured blog post is easier to write, more engaging to read, and performs better in search engines. Our Blog Outline Generator creates comprehensive, SEO-optimized outlines that organize your ideas into a logical flow. Whether you're writing how-to guides, listicles, or in-depth articles, this tool helps you plan your content structure before you start writing, saving time and improving the quality of your final article.
            </p>

            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enter your blog topic or main keyword, and our AI will generate a detailed outline with introduction, main sections, subheadings, and conclusion. Each outline is structured for optimal readability and SEO performance, with suggestions for key points to cover in each section. The tool considers search intent, content depth, and user engagement to create outlines that rank well and keep readers engaged.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Hierarchical outline structure with H2 and H3 headings</li>
              <li>SEO-optimized section organization</li>
              <li>Key points and talking points for each section</li>
              <li>Introduction and conclusion suggestions</li>
              <li>Expandable sections for detailed planning</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Bloggers planning long-form content</li>
              <li>Content marketers creating SEO articles</li>
              <li>Freelance writers organizing their ideas</li>
              <li>Businesses building their content library</li>
              <li>Anyone struggling with content structure</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-muted-foreground leading-relaxed">
              Write better blog posts faster with a clear roadmap. Our AI-generated outlines help you organize your thoughts, ensure comprehensive coverage of your topic, and create content that ranks well in search engines. Stop staring at blank pages and start writing with confidence using structured outlines that guide your content creation process.
            </p>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Generate Blog Outline</h2>
            <ToolInterface 
              toolType="blogOutline"
              placeholder="Enter your blog topic or main keyword (e.g., 'how to start a podcast', 'best productivity apps', 'beginner's guide to SEO')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
