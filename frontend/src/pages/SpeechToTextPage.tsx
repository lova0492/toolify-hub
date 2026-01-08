import { Mic, Sparkles, CheckCircle, MicOff, Copy, Home } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { PageType } from '../App';

interface SpeechToTextPageProps {
  onNavigate: (page: PageType) => void;
}

export default function SpeechToTextPage({ onNavigate }: SpeechToTextPageProps) {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setText(prev => prev + finalTranscript);
      };

      recognitionRef.current.onerror = (event: any) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleStart = () => {
    if (!recognitionRef.current) {
      setError('Speech recognition is not supported in your browser');
      return;
    }

    setError(null);
    recognitionRef.current.start();
    setIsListening(true);
  };

  const handleStop = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleClear = () => {
    setText('');
    setError(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Mic className="w-4 h-4" />
              Speech to Text
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Convert Speech to Text
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform spoken words into written text using real-time voice recognition technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Speech to Text?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Speech to Text tool uses the Web Speech API to convert your spoken words into written text in real-time. Perfect for dictation, note-taking, accessibility, and content creation. Simply click start, speak clearly, and watch your words appear on screen instantly. All processing happens locally in your browser for maximum privacy and speed.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Allow Microphone</h3>
                    <p className="text-sm text-muted-foreground">
                      Grant microphone permission when prompted by your browser
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">Start Speaking</h3>
                    <p className="text-sm text-muted-foreground">
                      Click start and speak clearly into your microphone
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">See Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Watch your words appear as text in real-time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Fast dictation and note-taking',
                  'Hands-free text input while multitasking',
                  'Accessibility for typing difficulties',
                  'Content creation and brainstorming',
                  'Meeting transcription and minutes',
                  'Voice journaling and documentation',
                  'Language practice and pronunciation',
                  'Quick message composition'
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
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex justify-center">
                    <Button
                      onClick={isListening ? handleStop : handleStart}
                      size="lg"
                      className={`w-32 h-32 rounded-full ${isListening ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'bg-gradient-to-r from-green-500 to-emerald-500'}`}
                    >
                      {isListening ? (
                        <MicOff className="w-12 h-12" />
                      ) : (
                        <Mic className="w-12 h-12" />
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    {isListening ? 'Listening... Click to stop' : 'Click the microphone to start'}
                  </p>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Transcribed Text</label>
                    <Textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Your speech will appear here..."
                      className="min-h-[200px] resize-none"
                    />
                    <p className="text-xs text-muted-foreground">{text.length} characters</p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleCopy}
                      disabled={!text}
                      variant="outline"
                      className="flex-1"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy Text'}
                    </Button>
                    <Button
                      onClick={handleClear}
                      disabled={!text}
                      variant="outline"
                      className="flex-1"
                    >
                      Clear
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
