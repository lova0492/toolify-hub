import { RefreshCw, Sparkles, CheckCircle, Copy, Loader2, Home } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface ParaphrasingToolPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ParaphrasingToolPage({ onNavigate }: ParaphrasingToolPageProps) {
  const [text, setText] = useState('');
  const [paraphrased, setParaphrased] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const synonyms: Record<string, string[]> = {
    'good': ['excellent', 'great', 'fine', 'wonderful'],
    'bad': ['poor', 'terrible', 'awful', 'unpleasant'],
    'big': ['large', 'huge', 'enormous', 'massive'],
    'small': ['tiny', 'little', 'mini', 'compact'],
    'important': ['significant', 'crucial', 'vital', 'essential'],
    'help': ['assist', 'aid', 'support', 'facilitate'],
    'make': ['create', 'produce', 'generate', 'build'],
    'use': ['utilize', 'employ', 'apply', 'implement'],
  };

  const handleParaphrase = async () => {
    if (!text.trim()) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let result = text;
    Object.entries(synonyms).forEach(([word, replacements]) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, () => replacements[Math.floor(Math.random() * replacements.length)]);
    });
    
    setParaphrased(result);
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paraphrased);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-6">
        <Button
          onClick={() => onNavigate('home')}
          variant="outline"
          className="gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <RefreshCw className="w-4 h-4" />
              Paraphrasing Tool
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                Rewrite Content Instantly
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rewrite content with different words while maintaining the original meaning
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is the Paraphrasing Tool?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Paraphrasing Tool helps you rewrite content using different words and sentence structures while preserving the original meaning. Perfect for avoiding plagiarism, improving readability, creating unique content variations, and SEO optimization. The tool uses client-side synonym replacement to generate fresh versions of your text instantly.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Original Text</label>
                    <Textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter the text you want to paraphrase..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    onClick={handleParaphrase}
                    disabled={!text.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-500"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Paraphrasing...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Paraphrase Text
                      </>
                    )}
                  </Button>

                  {paraphrased && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Paraphrased Text</label>
                        <Textarea
                          value={paraphrased}
                          readOnly
                          className="min-h-[150px] resize-none bg-muted/50"
                        />
                      </div>

                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="w-full"
                      >
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Paraphrased Text
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
