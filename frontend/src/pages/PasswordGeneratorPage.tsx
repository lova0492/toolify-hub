import { Lock, Sparkles, CheckCircle, Copy, RefreshCw, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import type { PageType } from '../App';

interface PasswordGeneratorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function PasswordGeneratorPage({ onNavigate }: PasswordGeneratorPageProps) {
  const [length, setLength] = useState([16]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState('');

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) chars = lowercase;

    let result = '';
    for (let i = 0; i < length[0]; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
    calculateStrength(result);
  };

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 12) score++;
    if (pwd.length >= 16) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    if (score <= 2) setStrength('Weak');
    else if (score <= 3) setStrength('Medium');
    else if (score <= 4) setStrength('Strong');
    else setStrength('Very Strong');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <Lock className="w-4 h-4" />
              Password Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Generate Secure Passwords
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create strong, random passwords with customizable length and character options
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Password Generator?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Password Generator creates secure, random passwords with customizable options for length and character types. Generate strong passwords that are difficult to crack while being easy to customize based on your security requirements. All password generation happens locally in your browser for maximum security and privacy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <div className="p-6 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-2xl font-mono break-all">{password}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Badge variant={strength === 'Very Strong' ? 'default' : strength === 'Strong' ? 'secondary' : 'outline'}>
                          {strength}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Password Length</label>
                        <span className="text-sm text-muted-foreground">{length[0]} characters</span>
                      </div>
                      <Slider
                        value={length}
                        onValueChange={setLength}
                        min={8}
                        max={128}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium">Character Types</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="uppercase"
                            checked={includeUppercase}
                            onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
                          />
                          <label htmlFor="uppercase" className="text-sm cursor-pointer">
                            Uppercase Letters (A-Z)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="lowercase"
                            checked={includeLowercase}
                            onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
                          />
                          <label htmlFor="lowercase" className="text-sm cursor-pointer">
                            Lowercase Letters (a-z)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="numbers"
                            checked={includeNumbers}
                            onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
                          />
                          <label htmlFor="numbers" className="text-sm cursor-pointer">
                            Numbers (0-9)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="symbols"
                            checked={includeSymbols}
                            onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
                          />
                          <label htmlFor="symbols" className="text-sm cursor-pointer">
                            Symbols (!@#$%^&*)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={generatePassword}
                        variant="outline"
                        className="flex-1"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Generate New
                      </Button>
                      <Button
                        onClick={handleCopy}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                      >
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Password
                          </>
                        )}
                      </Button>
                    </div>
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
