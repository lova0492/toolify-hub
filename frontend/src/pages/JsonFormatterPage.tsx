import { Code, Sparkles, CheckCircle, Copy, AlertCircle, Home } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { PageType } from '../App';

interface JsonFormatterPageProps {
  onNavigate: (page: PageType) => void;
}

export default function JsonFormatterPage({ onNavigate }: JsonFormatterPageProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
      setOutput('');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Code className="w-4 h-4" />
              JSON Formatter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Format & Validate JSON
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Format, validate, and beautify JSON data with error detection
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is JSON Formatter?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our JSON Formatter tool validates, formats, and beautifies JSON data with clear error messages. Perfect for API development, data validation, code debugging, and configuration files. Instantly format messy JSON into readable, properly indented code or minify it for production use.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">JSON Input</label>
                    <Textarea
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        setError(null);
                      }}
                      placeholder='{"name": "John", "age": 30}'
                      className="min-h-[200px] resize-none font-mono text-sm"
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-2">
                    <Button onClick={formatJson} disabled={!input} variant="outline" className="flex-1">
                      Format JSON
                    </Button>
                    <Button onClick={minifyJson} disabled={!input} variant="outline" className="flex-1">
                      Minify JSON
                    </Button>
                  </div>

                  {output && (
                    <div className="space-y-2 animate-in fade-in">
                      <div className="flex items-center gap-2 text-green-500">
                        <CheckCircle className="w-4 h-4" />
                        <label className="text-sm font-medium">Valid JSON Output</label>
                      </div>
                      <Textarea
                        value={output}
                        readOnly
                        className="min-h-[200px] resize-none bg-muted/50 font-mono text-sm"
                      />
                      <Button onClick={handleCopy} variant="outline" className="w-full">
                        {copied ? <><CheckCircle className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy JSON</>}
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
