import { FileImage, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface ImagePdfConverterPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ImagePdfConverterPage({ onNavigate }: ImagePdfConverterPageProps) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
              <FileImage className="w-4 h-4" />
              Image to PDF Converter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Convert Images to PDF
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Convert between image and PDF formats seamlessly with client-side processing
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Image to PDF Converter?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Image to PDF Converter tool allows you to convert images to PDF format and vice versa using client-side processing. Perfect for document management, archiving, sharing, and professional presentations. All conversion happens locally in your browser for maximum privacy and security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Coming Soon</h2>
              <p className="text-lg text-muted-foreground">
                This feature is currently under development. Check back soon for the full Image to PDF conversion tool!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
