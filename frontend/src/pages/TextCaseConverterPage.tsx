import { Type, Sparkles, CheckCircle, Copy, Home } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface TextCaseConverterPageProps {
  onNavigate: (page: PageType) => void;
}

export default function TextCaseConverterPage({ onNavigate }: TextCaseConverterPageProps) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const toTitleCase = () => {
    setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
  };
  const toSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()));
  };

  const handleCopy = async (caseType: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(caseType);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const upperCaseText = text.toUpperCase();
  const lowerCaseText = text.toLowerCase();
  const titleCaseText = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  const sentenceCaseText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Type className="w-4 h-4" />
              Text Case Converter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Convert Text Case Instantly
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform text between UPPERCASE, lowercase, Title Case, and Sentence case with one click
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Text Case Converter?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Text Case Converter tool allows you to quickly change the capitalization of your text between different formats. Whether you need to convert text to uppercase for headings, lowercase for consistency, title case for proper formatting, or sentence case for natural reading, this tool handles it all instantly. Perfect for content formatting, coding, and document preparation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Formatting headings and titles',
                  'Fixing caps lock mistakes',
                  'Standardizing text formatting',
                  'Preparing content for publication',
                  'Code formatting and variable names',
                  'Social media post formatting',
                  'Document consistency',
                  'Email and message composition'
                ].map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
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
                      placeholder="Type or paste your text here..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button onClick={toUpperCase} disabled={!text} variant="outline" className="w-full">
                      UPPERCASE
                    </Button>
                    <Button onClick={toLowerCase} disabled={!text} variant="outline" className="w-full">
                      lowercase
                    </Button>
                    <Button onClick={toTitleCase} disabled={!text} variant="outline" className="w-full">
                      Title Case
                    </Button>
                    <Button onClick={toSentenceCase} disabled={!text} variant="outline" className="w-full">
                      Sentence case
                    </Button>
                  </div>

                  {text && (
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold">Preview All Cases</h3>
                      
                      <Card className="bg-muted/50">
                        <CardContent className="pt-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">UPPERCASE</p>
                              <p className="text-sm font-mono">{upperCaseText}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy('upper', upperCaseText)}
                            >
                              {copied === 'upper' ? 'Copied!' : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/50">
                        <CardContent className="pt-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">lowercase</p>
                              <p className="text-sm font-mono">{lowerCaseText}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy('lower', lowerCaseText)}
                            >
                              {copied === 'lower' ? 'Copied!' : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/50">
                        <CardContent className="pt-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Title Case</p>
                              <p className="text-sm font-mono">{titleCaseText}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy('title', titleCaseText)}
                            >
                              {copied === 'title' ? 'Copied!' : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/50">
                        <CardContent className="pt-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Sentence case</p>
                              <p className="text-sm font-mono">{sentenceCaseText}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy('sentence', sentenceCaseText)}
                            >
                              {copied === 'sentence' ? 'Copied!' : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
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
