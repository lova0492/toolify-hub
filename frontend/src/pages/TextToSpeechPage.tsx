import { Volume2, Sparkles, CheckCircle, Play, Pause, StopCircle, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { PageType } from '../App';

interface TextToSpeechPageProps {
  onNavigate: (page: PageType) => void;
}

export default function TextToSpeechPage({ onNavigate }: TextToSpeechPageProps) {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [rate, setRate] = useState([1]);
  const [pitch, setPitch] = useState([1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handlePlay = () => {
    if (!text.trim()) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate[0];
    utterance.pitch = pitch[0];

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-green-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Volume2 className="w-4 h-4" />
              Text to Speech
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
                Convert Text to Natural Speech
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform written text into natural-sounding speech with customizable voice, speed, and pitch options
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What is it */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Text to Speech?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Text to Speech tool uses browser-based speech synthesis technology to convert written text into natural-sounding audio. Perfect for accessibility, content consumption, language learning, and presentations. Choose from multiple voices, adjust speed and pitch, and listen to your content hands-free. The tool works entirely in your browser with no server uploads required, ensuring privacy and instant results.
              </p>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Enter Your Text</h3>
                    <p className="text-sm text-muted-foreground">
                      Type or paste the text you want to convert to speech
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">Customize Voice</h3>
                    <p className="text-sm text-muted-foreground">
                      Select voice, adjust speed and pitch to your preference
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Play & Listen</h3>
                    <p className="text-sm text-muted-foreground">
                      Click play to hear your text spoken aloud naturally
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Accessibility support for visually impaired users',
                  'Hands-free content consumption while multitasking',
                  'Language learning and pronunciation practice',
                  'Proofreading by listening to your writing',
                  'Creating audio versions of written content',
                  'Presentation rehearsal and script reading',
                  'Educational content delivery',
                  'Audiobook creation and narration'
                ].map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Natural Voices</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from multiple natural-sounding voices in different languages and accents
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Customizable</h3>
                    <p className="text-sm text-muted-foreground">
                      Adjust speech rate and pitch to match your preferences and needs
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">
                      All processing happens in your browser - no data sent to servers
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Instant Results</h3>
                    <p className="text-sm text-muted-foreground">
                      No waiting - hear your text spoken immediately with zero latency
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tool Interface */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Text to Convert</label>
                    <Textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter the text you want to convert to speech..."
                      className="min-h-[150px] resize-none"
                    />
                    <p className="text-xs text-muted-foreground">{text.length} characters</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Voice</label>
                      <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                        <SelectContent>
                          {voices.map((voice) => (
                            <SelectItem key={voice.name} value={voice.name}>
                              {voice.name} ({voice.lang})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Speed</label>
                        <span className="text-sm text-muted-foreground">{rate[0].toFixed(1)}x</span>
                      </div>
                      <Slider
                        value={rate}
                        onValueChange={setRate}
                        min={0.5}
                        max={2}
                        step={0.1}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Pitch</label>
                        <span className="text-sm text-muted-foreground">{pitch[0].toFixed(1)}</span>
                      </div>
                      <Slider
                        value={pitch}
                        onValueChange={setPitch}
                        min={0.5}
                        max={2}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handlePlay}
                      disabled={!text.trim() || (isPlaying && !isPaused)}
                      className="flex-1 bg-gradient-to-r from-lime-500 to-green-500"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isPaused ? 'Resume' : 'Play'}
                    </Button>
                    <Button
                      onClick={handlePause}
                      disabled={!isPlaying}
                      variant="outline"
                      className="flex-1"
                    >
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                    <Button
                      onClick={handleStop}
                      disabled={!isPlaying && !isPaused}
                      variant="outline"
                      className="flex-1"
                    >
                      <StopCircle className="w-4 h-4 mr-2" />
                      Stop
                    </Button>
                  </div>

                  {voices.length === 0 && (
                    <Alert>
                      <AlertDescription>
                        Loading voices... If voices don't appear, your browser may not support speech synthesis.
                      </AlertDescription>
                    </Alert>
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
