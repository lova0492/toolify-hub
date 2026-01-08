import { CheckSquare, Sparkles, CheckCircle, AlertCircle, Home } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface GrammarCheckerPageProps {
  onNavigate: (page: PageType) => void;
}

export default function GrammarCheckerPage({ onNavigate }: GrammarCheckerPageProps) {
  const [text, setText] = useState('');

  const errors = useMemo(() => {
    const found: Array<{ type: string; message: string; position: number }> = [];
    
    // Basic grammar checks using regex
    const doubleSpaces = text.match(/  +/g);
    if (doubleSpaces) found.push({ type: 'spacing', message: 'Multiple spaces detected', position: text.indexOf('  ') });
    
    const repeatedWords = text.match(/\b(\w+)\s+\1\b/gi);
    if (repeatedWords) found.push({ type: 'repetition', message: 'Repeated words found', position: text.indexOf(repeatedWords[0]) });
    
    // Check for common mistakes
    if (text.match(/\bi\b/g)) found.push({ type: 'capitalization', message: 'Lowercase "i" should be capitalized', position: text.indexOf(' i ') });
    
    return found;
  }, [text]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <CheckSquare className="w-4 h-4" />
              Grammar & Spell Checker
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                Check Grammar & Spelling
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Identify and highlight grammar and spelling errors with helpful suggestions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Grammar & Spell Checker?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Grammar & Spell Checker uses browser-based spell checking and pattern recognition to identify common grammar and spelling errors in your text. Get instant feedback on potential issues including repeated words, spacing problems, capitalization errors, and more. Perfect for proofreading emails, documents, and content before publishing.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enter Your Text</label>
                    <Textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Type or paste your text here to check for errors..."
                      className="min-h-[250px] resize-none"
                      spellCheck={true}
                    />
                    <p className="text-xs text-muted-foreground">{wordCount} words</p>
                  </div>

                  {errors.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                        <h3 className="text-sm font-semibold">{errors.length} Potential Issues Found</h3>
                      </div>
                      <div className="space-y-2">
                        {errors.map((error, idx) => (
                          <Card key={idx} className="bg-yellow-500/10 border-yellow-500/20">
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-3">
                                <Badge variant="outline" className="shrink-0">{error.type}</Badge>
                                <p className="text-sm">{error.message}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {text && errors.length === 0 && (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle className="w-5 h-5" />
                      <p className="text-sm">No obvious errors detected!</p>
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
