import { ArrowLeft, Target, Users, Zap, Heart, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PageType } from '../App';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main className="container mx-auto px-4 py-32 max-w-5xl">
      <Button
        variant="ghost"
        onClick={() => onNavigate('home')}
        className="mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <article className="space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About AI Tools Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering creators worldwide with cutting-edge artificial intelligence technology to transform ideas into reality
          </p>
        </div>

        {/* Mission Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">
              At AI Tools Hub, we believe that everyone deserves access to professional-grade content creation tools, regardless of their technical expertise or budget. Our mission is to democratize content creation by providing powerful, easy-to-use AI tools that help creators, entrepreneurs, marketers, and businesses produce high-quality content in seconds.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mt-4">
              We're committed to breaking down the barriers that have traditionally made professional content creation expensive, time-consuming, and technically challenging. By leveraging the latest advances in artificial intelligence and machine learning, we're making it possible for anyone with a vision to bring their ideas to life with professional polish and creative excellence.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">What We Do</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">
              AI Tools Hub is a comprehensive platform offering a suite of AI-powered content creation tools designed for modern creators. Our platform specializes in generating various types of content including professional avatars, engaging social media posts, compelling email messages, creative image prompts, attention-grabbing captions with trending hashtags, and complete YouTube video scripts.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mt-4">
              Each tool is carefully crafted to understand your unique requirements and deliver results that match your brand voice and creative vision. Whether you're a solo content creator building your personal brand, a small business owner managing your marketing, or a social media manager handling multiple accounts, our tools adapt to your needs and help you produce content that resonates with your audience.
            </p>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Who We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Content Creators & Influencers</h3>
              <p className="text-muted-foreground leading-relaxed">
                YouTubers, bloggers, podcasters, and social media influencers who need to produce consistent, high-quality content to engage their audiences and grow their following across multiple platforms.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Small Business Owners</h3>
              <p className="text-muted-foreground leading-relaxed">
                Entrepreneurs and small business owners who need professional marketing materials but don't have the budget for expensive agencies or full-time creative staff.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Marketing Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Digital marketers, social media managers, and marketing teams looking to scale their content production, test multiple creative variations, and optimize campaign performance.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Creative Professionals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designers, writers, and creative professionals seeking inspiration, overcoming creative blocks, or looking to accelerate their workflow with AI-assisted ideation and content generation.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Why We Exist</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">
              We founded AI Tools Hub because we saw a growing gap between the demand for high-quality content and the resources available to create it. In today's digital landscape, content is king—but creating professional content traditionally requires significant time, money, and specialized skills that many creators simply don't have access to.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mt-4">
              The rise of social media, digital marketing, and online businesses has created an unprecedented need for constant content production. Creators are expected to post daily, maintain multiple platforms, and compete with well-funded brands—all while staying authentic and engaging. This pressure often leads to burnout, inconsistent quality, or giving up entirely.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mt-4">
              We exist to solve this problem. By harnessing the power of artificial intelligence, we've created tools that level the playing field, allowing anyone to produce professional-quality content quickly and affordably. We believe that great ideas shouldn't be limited by technical barriers or budget constraints. Every creator deserves the tools to share their voice, build their brand, and achieve their goals.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible with AI, staying at the forefront of technology to deliver cutting-edge tools.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe powerful tools should be available to everyone, regardless of technical skill level or budget.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Trust</h3>
              <p className="text-muted-foreground">
                We prioritize user privacy, data security, and transparent practices in everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-foreground">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of a growing community of creators who are transforming their content creation process with AI. Start creating today and see the difference for yourself.
          </p>
          <Button 
            onClick={() => onNavigate('home')}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
          >
            Get Started Now
          </Button>
        </section>
      </article>
    </main>
  );
}
