import { ImageIcon, Sparkles, CheckCircle, Download, Upload, Home } from 'lucide-react';
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { PageType } from '../App';

interface ImageCompressorPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ImageCompressorPage({ onNavigate }: ImageCompressorPageProps) {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState([0.8]);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setOriginalSize(file.size);
    const reader = new FileReader();
    reader.onload = (event) => {
      setOriginalImage(event.target?.result as string);
      compressImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const compressImage = (imageSrc: string) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            setCompressedSize(blob.size);
            const url = URL.createObjectURL(blob);
            setCompressedImage(url);
          }
        },
        'image/jpeg',
        quality[0]
      );
    };
    img.src = imageSrc;
  };

  const handleDownload = () => {
    if (!compressedImage) return;
    const a = document.createElement('a');
    a.href = compressedImage;
    a.download = `compressed-image-${Date.now()}.jpg`;
    a.click();
  };

  const formatSize = (bytes: number) => {
    return (bytes / 1024).toFixed(2) + ' KB';
  };

  const savingsPercent = originalSize > 0 ? ((originalSize - compressedSize) / originalSize * 100).toFixed(1) : 0;

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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <ImageIcon className="w-4 h-4" />
              Image Compressor
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Compress Images Instantly
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reduce image file sizes while maintaining quality for JPG, PNG, and WebP formats
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Image Compressor?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Image Compressor tool reduces image file sizes using client-side compression for JPG, PNG, and WebP formats. Perfect for website optimization, faster loading times, storage savings, and SEO improvement. All compression happens locally in your browser - no uploads to servers required, ensuring complete privacy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Try It Now</h2>
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {!originalImage ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">Click to upload image</p>
                      <p className="text-sm text-muted-foreground">Supports JPG, PNG, WebP</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Compression Quality</label>
                          <span className="text-sm text-muted-foreground">{Math.round(quality[0] * 100)}%</span>
                        </div>
                        <Slider
                          value={quality}
                          onValueChange={(val) => {
                            setQuality(val);
                            if (originalImage) compressImage(originalImage);
                          }}
                          min={0.1}
                          max={1}
                          step={0.1}
                          className="w-full"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Original</p>
                          <img src={originalImage} alt="Original" className="w-full rounded-lg border border-border" />
                          <p className="text-xs text-muted-foreground">Size: {formatSize(originalSize)}</p>
                        </div>
                        {compressedImage && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Compressed</p>
                            <img src={compressedImage} alt="Compressed" className="w-full rounded-lg border border-border" />
                            <p className="text-xs text-muted-foreground">Size: {formatSize(compressedSize)}</p>
                          </div>
                        )}
                      </div>

                      {compressedImage && (
                        <Alert>
                          <CheckCircle className="h-4 w-4" />
                          <AlertDescription>
                            Reduced by {savingsPercent}% - Saved {formatSize(originalSize - compressedSize)}
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="flex gap-2">
                        <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="flex-1">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload New
                        </Button>
                        <Button onClick={handleDownload} disabled={!compressedImage} className="flex-1 bg-gradient-to-r from-purple-500 to-fuchsia-500">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </>
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
