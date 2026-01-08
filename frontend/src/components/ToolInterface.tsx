import { useState } from 'react';
import { Copy, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  generateAvatar, 
  generatePost, 
  generateMessage,
  generateImagePrompt,
  generateCaption,
  generateScript
} from '../lib/aiGenerators';

type ToolType = 'avatar' | 'post' | 'message' | 'imagePrompt' | 'caption' | 'script';

interface ToolInterfaceProps {
  toolType: ToolType;
  placeholder: string;
}

export default function ToolInterface({ toolType, placeholder }: ToolInterfaceProps) {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [outputTitle, setOutputTitle] = useState<string | null>(null);
  const [outputDescription, setOutputDescription] = useState<string | null>(null);
  const [captionData, setCaptionData] = useState<{ caption: string; hashtags: string[]; tone: string } | null>(null);
  const [scriptData, setScriptData] = useState<{ intro: string; body: string; outro: string; topic: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const charCount = input.length;
  const maxChars = 500;

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('Please enter a prompt to generate content.');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setOutput(null);
    setOutputImage(null);
    setOutputTitle(null);
    setOutputDescription(null);
    setCaptionData(null);
    setScriptData(null);
    setError(null);

    try {
      if (toolType === 'avatar') {
        const result = await generateAvatar(input, (prog) => setProgress(prog));
        setOutputImage(result.image);
        setOutputTitle(result.style);
        setOutputDescription('Your custom AI-generated avatar based on your description.');
        setProgress(100);
      } else if (toolType === 'post') {
        setProgress(20);
        const result = await generatePost(input, (partial) => {
          setOutput(partial);
          const estimatedProgress = 20 + (partial.length / 500) * 80;
          setProgress(Math.min(estimatedProgress, 100));
        });
        setOutput(result);
        setProgress(100);
      } else if (toolType === 'message') {
        setProgress(20);
        const result = await generateMessage(input, (partial) => {
          setOutput(partial);
          const estimatedProgress = 20 + (partial.length / 500) * 80;
          setProgress(Math.min(estimatedProgress, 100));
        });
        setOutput(result);
        setProgress(100);
      } else if (toolType === 'imagePrompt') {
        setProgress(20);
        const result = await generateImagePrompt(input, (partial) => {
          setOutput(partial);
          const estimatedProgress = 20 + (partial.length / 300) * 80;
          setProgress(Math.min(estimatedProgress, 100));
        });
        setOutput(result);
        setProgress(100);
      } else if (toolType === 'caption') {
        setProgress(20);
        const result = await generateCaption(input, (partial) => {
          setCaptionData({ caption: partial, hashtags: [], tone: 'Generating...' });
          const estimatedProgress = 20 + (partial.length / 200) * 80;
          setProgress(Math.min(estimatedProgress, 100));
        });
        setCaptionData(result);
        setProgress(100);
      } else if (toolType === 'script') {
        setProgress(20);
        const result = await generateScript(input, (partialJson) => {
          try {
            const partial = JSON.parse(partialJson);
            setScriptData(partial);
            const totalLength = partial.intro.length + partial.body.length + partial.outro.length;
            const estimatedProgress = 20 + (totalLength / 800) * 80;
            setProgress(Math.min(estimatedProgress, 100));
          } catch (e) {
            // Ignore JSON parse errors during progressive updates
          }
        });
        setScriptData(result);
        setProgress(100);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate content. Please try again.';
      setError(errorMessage);
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    let textToCopy = '';
    
    if (output) {
      textToCopy = output;
    } else if (captionData) {
      textToCopy = `${captionData.caption}\n\n${captionData.hashtags.join(' ')}`;
    } else if (scriptData) {
      textToCopy = `${scriptData.topic}\n\n[INTRO]\n${scriptData.intro}\n\n[BODY]\n${scriptData.body}\n\n[OUTRO]\n${scriptData.outro}`;
    } else if (outputTitle && outputDescription) {
      textToCopy = `${outputTitle}\n\n${outputDescription}`;
    }

    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleDownload = () => {
    if (output) {
      const blob = new Blob([output], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-generated-${toolType}-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (captionData) {
      const content = `${captionData.caption}\n\n${captionData.hashtags.join(' ')}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-generated-caption-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (scriptData) {
      const content = `${scriptData.topic}\n\n[INTRO]\n${scriptData.intro}\n\n[BODY]\n${scriptData.body}\n\n[OUTRO]\n${scriptData.outro}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-generated-script-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (outputImage) {
      window.open(outputImage, '_blank');
    }
  };

  const hasOutput = output || outputImage || captionData || scriptData;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Your Prompt</label>
          <span className={`text-xs ${charCount > maxChars ? 'text-destructive' : 'text-muted-foreground'}`}>
            {charCount} / {maxChars}
          </span>
        </div>
        <Textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value.slice(0, maxChars));
            setError(null);
          }}
          placeholder={placeholder}
          className="min-h-[120px] resize-none"
          disabled={isGenerating}
        />
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Generate Button */}
      <Button
        onClick={handleGenerate}
        disabled={!input.trim() || isGenerating || charCount > maxChars}
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          'Generate with AI'
        )}
      </Button>

      {/* Progress Bar */}
      {isGenerating && (
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-center text-muted-foreground">
            AI is processing your request... {Math.round(progress)}%
          </p>
        </div>
      )}

      {/* Output Section */}
      {hasOutput && !isGenerating && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle className="w-4 h-4" />
            Generated Successfully!
          </div>
          
          {/* Text Output */}
          {output && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <pre className="whitespace-pre-wrap text-sm font-mono">{output}</pre>
            </div>
          )}

          {/* Caption Output */}
          {captionData && (
            <div className="bg-muted/50 rounded-lg p-6 border border-border space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {captionData.tone} tone
                  </Badge>
                </div>
                <p className="text-base leading-relaxed">{captionData.caption}</p>
              </div>
              {captionData.hashtags.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Hashtags:</p>
                  <div className="flex flex-wrap gap-2">
                    {captionData.hashtags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Script Output */}
          {scriptData && (
            <div className="bg-muted/50 rounded-lg p-6 border border-border space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{scriptData.topic}</h3>
              </div>
              
              <div className="space-y-4">
                {scriptData.intro && (
                  <div>
                    <Badge variant="outline" className="mb-2">INTRO</Badge>
                    <p className="text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                      {scriptData.intro}
                    </p>
                  </div>
                )}
                
                {scriptData.body && (
                  <div>
                    <Badge variant="outline" className="mb-2">BODY</Badge>
                    <p className="text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                      {scriptData.body}
                    </p>
                  </div>
                )}
                
                {scriptData.outro && (
                  <div>
                    <Badge variant="outline" className="mb-2">OUTRO</Badge>
                    <p className="text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                      {scriptData.outro}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Image Output (Avatar) */}
          {outputImage && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border space-y-4">
              <img 
                src={outputImage} 
                alt={outputTitle || 'Generated content'}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg animate-in fade-in duration-500"
              />
              {outputTitle && (
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-semibold">{outputTitle}</h3>
                  {outputDescription && (
                    <p className="text-sm text-muted-foreground">{outputDescription}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Clipboard
                </>
              )}
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
