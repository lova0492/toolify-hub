import { Lock, Sparkles, CheckCircle, Copy, Home } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { PageType } from '../App';

interface TextEncryptDecryptPageProps {
  onNavigate: (page: PageType) => void;
}

export default function TextEncryptDecryptPage({ onNavigate }: TextEncryptDecryptPageProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encodeBase64 = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (e) {
      setOutput('Error encoding text');
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
    } catch (e) {
      setOutput('Error decoding text - invalid Base64');
    }
  };

  const generateHash = async (algorithm: 'SHA-256' | 'SHA-1') => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await crypto.subtle.digest(algorithm, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setOutput(hashHex);
    } catch (e) {
      setOutput('Error generating hash');
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Lock className="w-4 h-4" />
              Text Encrypt/Decrypt
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Encrypt & Decrypt Text
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encode and decode text using Base64 and generate secure hash values
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Text Encrypt/Decrypt?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Text Encrypt/Decrypt tool provides client-side text encoding using Base64 and secure hash generation using SHA-256 and SHA-1 algorithms. Perfect for data protection, secure communication, password hashing, and data encoding. All operations happen locally in your browser for maximum security and privacy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Tabs defaultValue="base64" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="base64">Base64</TabsTrigger>
                      <TabsTrigger value="sha256">SHA-256</TabsTrigger>
                      <TabsTrigger value="sha1">SHA-1</TabsTrigger>
                    </TabsList>

                    <TabsContent value="base64" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Input Text</label>
                        <Textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Enter text to encode or decode..."
                          className="min-h-[120px] resize-none"
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={encodeBase64} disabled={!input} variant="outline" className="flex-1">
                          Encode to Base64
                        </Button>
                        <Button onClick={decodeBase64} disabled={!input} variant="outline" className="flex-1">
                          Decode from Base64
                        </Button>
                      </div>

                      {output && (
                        <div className="space-y-2 animate-in fade-in">
                          <label className="text-sm font-medium">Output</label>
                          <Textarea
                            value={output}
                            readOnly
                            className="min-h-[120px] resize-none bg-muted/50 font-mono text-sm"
                          />
                          <Button onClick={handleCopy} variant="outline" className="w-full">
                            {copied ? <><CheckCircle className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy Output</>}
                          </Button>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="sha256" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Input Text</label>
                        <Textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Enter text to hash..."
                          className="min-h-[120px] resize-none"
                        />
                      </div>

                      <Button onClick={() => generateHash('SHA-256')} disabled={!input} className="w-full bg-gradient-to-r from-indigo-500 to-violet-500">
                        Generate SHA-256 Hash
                      </Button>

                      {output && (
                        <div className="space-y-2 animate-in fade-in">
                          <label className="text-sm font-medium">SHA-256 Hash</label>
                          <Textarea
                            value={output}
                            readOnly
                            className="min-h-[80px] resize-none bg-muted/50 font-mono text-xs"
                          />
                          <Button onClick={handleCopy} variant="outline" className="w-full">
                            {copied ? <><CheckCircle className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy Hash</>}
                          </Button>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="sha1" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Input Text</label>
                        <Textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Enter text to hash..."
                          className="min-h-[120px] resize-none"
                        />
                      </div>

                      <Button onClick={() => generateHash('SHA-1')} disabled={!input} className="w-full bg-gradient-to-r from-indigo-500 to-violet-500">
                        Generate SHA-1 Hash
                      </Button>

                      {output && (
                        <div className="space-y-2 animate-in fade-in">
                          <label className="text-sm font-medium">SHA-1 Hash</label>
                          <Textarea
                            value={output}
                            readOnly
                            className="min-h-[80px] resize-none bg-muted/50 font-mono text-xs"
                          />
                          <Button onClick={handleCopy} variant="outline" className="w-full">
                            {copied ? <><CheckCircle className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy Hash</>}
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
