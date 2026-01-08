import { ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import type { PageType } from '../App';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <main className="container mx-auto px-4 py-32 max-w-4xl">
      <Button
        variant="ghost"
        onClick={() => onNavigate('home')}
        className="mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      For general inquiries and support
                    </p>
                    <a 
                      href="mailto:contact@aitoolshub.com"
                      className="text-primary hover:underline"
                    >
                      contact@aitoolshub.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <h3 className="font-semibold text-foreground mb-3">Other Ways to Reach Us</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Support:</span>{' '}
                      <a href="mailto:support@aitoolshub.com" className="text-primary hover:underline">
                        support@aitoolshub.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Privacy:</span>{' '}
                      <a href="mailto:privacy@aitoolshub.com" className="text-primary hover:underline">
                        privacy@aitoolshub.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Legal:</span>{' '}
                      <a href="mailto:legal@aitoolshub.com" className="text-primary hover:underline">
                        legal@aitoolshub.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mark your message as "Urgent" in the subject line.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Before You Contact Us</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You might find answers to common questions in our FAQ section:
              </p>
              <Button
                variant="outline"
                onClick={() => onNavigate('faq')}
                className="w-full"
              >
                Visit FAQ Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
