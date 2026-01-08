import { ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { PageType } from '../App';

interface FAQPageProps {
  onNavigate: (page: PageType) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
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
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AI Tools Hub, our services, pricing, and more
          </p>
        </div>

        <div className="space-y-8">
          {/* General Questions */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">General Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What is AI Tools Hub?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI Tools Hub is a comprehensive platform that provides AI-powered content creation tools for creators, marketers, and businesses. We offer tools for generating avatars, social media posts, email messages, image prompts, captions with hashtags, and YouTube video scripts. Our mission is to make professional content creation accessible to everyone, regardless of technical expertise or budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Is AI Tools Hub free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! AI Tools Hub offers free access to all our core tools. You can create an account and start generating content immediately without any payment. We believe in democratizing content creation and making powerful AI tools accessible to everyone. We may introduce premium features in the future, but our core functionality will always remain free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Do I need to create an account?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While you can browse our website and learn about our tools without an account, creating a free account allows you to access all our AI tools, save your generated content, and track your creation history. Registration is quick, simple, and only requires a username and email address.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What makes AI Tools Hub different from other AI platforms?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI Tools Hub focuses on simplicity, accessibility, and practical results. Unlike complex platforms that require technical knowledge, our tools are designed for everyday creators. We provide specialized tools for specific content types rather than a one-size-fits-all approach, ensuring better results for each use case. Plus, our platform is completely free and doesn't require credit card information to get started.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Privacy & Security */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Privacy & Security</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-5" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Do you store my files and generated content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We temporarily store your inputs and generated content to provide our services and improve our AI models. However, we do not share your personal content with third parties for marketing purposes. You can delete your content at any time through your account settings. For more details, please review our Privacy Policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Is my data safe and secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. We take data security seriously and implement industry-standard encryption and security measures to protect your information. All data transmission is encrypted using SSL/TLS protocols, and we regularly update our security practices to protect against emerging threats. We comply with international data protection regulations including GDPR and CCPA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Do you use cookies and tracking?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we use cookies and similar technologies to improve your experience, remember your preferences, and analyze how our platform is used. We also use Google AdSense for advertising, which may use cookies to display relevant ads. You can control cookie settings through your browser, though some features may not work properly if cookies are disabled. See our Privacy Policy for complete details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What about Google AdSense and third-party ads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use Google AdSense to display advertisements on our platform. Google AdSense may use cookies and collect information about your browsing activity to show relevant ads. These third-party vendors may also use cookies for ad personalization and measurement. You can opt out of personalized advertising by visiting Google's Ads Settings. We do not control third-party cookies and recommend reviewing Google's privacy policy for more information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Using the Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Using the Tools</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-9" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  How do the AI tools work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our AI tools use advanced machine learning models trained on vast datasets to understand your requirements and generate relevant content. Simply provide a description or prompt in plain language, and the AI analyzes it to create professional output tailored to your needs. Each tool is optimized for its specific content type to ensure the best possible results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Is the generated content unique and original?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Each generation is unique and created specifically for your prompt. The AI doesn't copy existing content but creates original material based on patterns it has learned. However, we always recommend reviewing and customizing the output to match your brand voice and ensure it meets your specific needs. While the content is original, similar prompts may produce similar results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Do I need technical skills to use these tools?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Not at all! Our tools are designed to be user-friendly and accessible to everyone. Simply describe what you want in plain language, and the AI handles the technical complexity. No coding, design, or video editing experience is required. If you can type a sentence, you can use our tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  How long does it take to generate content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most content is generated in just a few seconds! Text-based tools like post generators and caption creators typically complete in 2-5 seconds. More complex requests may take slightly longer, but you'll typically have your results in under a minute. This is significantly faster than traditional content creation methods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What if I'm not satisfied with the results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can regenerate content as many times as you need! Try adjusting your prompt with more specific details, different keywords, or alternative phrasing to get better results. The more descriptive and specific you are, the better the AI can understand and deliver what you're looking for. Each generation is free, so feel free to experiment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Are there any usage limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Currently, we offer generous usage limits for free accounts to ensure fair access for all users. If you need higher limits for professional or commercial use, please contact us to discuss your requirements. We're committed to supporting creators at all levels.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Content Rights & Usage */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Content Rights & Usage</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-15" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Can I use the generated content commercially?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! You have full rights to use the content generated by our tools for commercial purposes. This includes social media posts, marketing materials, client projects, business communications, and more. The content is yours to use as you see fit. However, we recommend reviewing and customizing AI-generated content to ensure it meets your specific needs and brand standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Who owns the copyright to generated content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You retain ownership of the content you create using our tools. However, please note that AI-generated content may have complex copyright considerations depending on your jurisdiction. We grant you a license to use the content, but we recommend consulting with a legal professional if you have specific copyright concerns, especially for high-value commercial projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Can I edit or modify the generated content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! We encourage you to edit, customize, and refine the generated content to perfectly match your needs and brand voice. The AI provides a strong starting point, but your personal touch and expertise will make the content truly yours. Feel free to combine, modify, or use the generated content as inspiration for your own creations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Technical Support */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Support</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-18" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What browsers are supported?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI Tools Hub works best on modern browsers including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. We recommend using the latest version of your preferred browser for the best experience. Mobile browsers are also supported, allowing you to create content on the go.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  I'm experiencing technical issues. What should I do?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  First, try refreshing your browser or clearing your cache. If the problem persists, please contact our support team through the Contact page with details about the issue, including your browser type, device, and what you were trying to do. We typically respond within 24-48 hours and will work to resolve your issue as quickly as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-20" className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  How can I provide feedback or suggest new features?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We love hearing from our users! Please use our Contact page to share your feedback, suggestions, or feature requests. Your input helps us improve and develop new tools that better serve the creator community. We read every message and consider all suggestions for future updates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* Still Have Questions */}
        <div className="text-center space-y-6 py-12 px-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </main>
  );
}
