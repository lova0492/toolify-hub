import { FileType, Sparkles, CheckCircle, Home } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface WordCounterPageProps {
  onNavigate: (page: PageType) => void;
}

export default function WordCounterPage({ onNavigate }: WordCounterPageProps) {
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphCount = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed
  const speakingTime = Math.ceil(wordCount / 150); // Average speaking speed

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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <FileType className="w-4 h-4" />
              Word Counter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Word Counter & Reading Time
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze your text with word count, character count, reading time estimation, and SEO insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Word Counter?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Word Counter tool provides comprehensive text analysis including word count, character count, sentence count, paragraph count, and reading time estimation. Perfect for writers, students, content creators, and SEO professionals who need to meet specific word count requirements or optimize content length. Get instant feedback on your text metrics as you type.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Meeting essay and article word count requirements',
                  'SEO content optimization and length targets',
                  'Social media post character limits',
                  'Academic writing and research papers',
                  'Blog post planning and structure',
                  'Email and message composition',
                  'Speech and presentation timing',
                  'Content marketing and copywriting'
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
                      placeholder="Start typing or paste your text here..."
                      className="min-h-[300px] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{wordCount}</p>
                        <p className="text-sm text-muted-foreground mt-1">Words</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{charCount}</p>
                        <p className="text-sm text-muted-foreground mt-1">Characters</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{charCountNoSpaces}</p>
                        <p className="text-sm text-muted-foreground mt-1">No Spaces</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{sentenceCount}</p>
                        <p className="text-sm text-muted-foreground mt-1">Sentences</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{paragraphCount}</p>
                        <p className="text-sm text-muted-foreground mt-1">Paragraphs</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{readingTime}</p>
                        <p className="text-sm text-muted-foreground mt-1">Min Read</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{speakingTime}</p>
                        <p className="text-sm text-muted-foreground mt-1">Min Speak</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl font-bold text-primary">{sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0}</p>
                        <p className="text-sm text-muted-foreground mt-1">Avg Words/Sentence</p>
                      </CardContent>
                    </Card>
                  </div>

                  {wordCount > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">SEO Readability Insights</h3>
                      <div className="flex flex-wrap gap-2">
                        {wordCount < 300 && <Badge variant="outline">Consider adding more content (300+ words recommended for SEO)</Badge>}
                        {wordCount >= 300 && wordCount < 1000 && <Badge variant="secondary">Good length for blog posts</Badge>}
                        {wordCount >= 1000 && <Badge variant="secondary">Excellent for long-form SEO content</Badge>}
                        {sentenceCount > 0 && wordCount / sentenceCount > 25 && <Badge variant="outline">Consider shorter sentences for readability</Badge>}
                        {sentenceCount > 0 && wordCount / sentenceCount <= 20 && <Badge variant="secondary">Good sentence length</Badge>}
                      </div>
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
