import Head from 'next/head'
import { useState, useEffect } from 'react'
import DinoJumper from '../components/DinoJumper'
import ROICalculator from '../components/ROICalculator'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Why I Want to Join Cursor</title>
        <meta name="description" content="A developer's pitch to join Cursor - showcasing passion for AI-powered development tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-grid text-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/3 rounded-full blur-3xl float-animation"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent-emerald/3 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full glass-strong border-b border-white/5 z-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5">
            <div className="flex items-center justify-between">
              <div className="text-lg md:text-xl font-semibold text-accent-cyan font-mono">cursor.dev</div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`transition-all duration-200 ${
                    activeTab === 'about' 
                      ? 'text-accent-cyan' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveTab('cursor')}
                  className={`transition-all duration-200 ${
                    activeTab === 'cursor' 
                      ? 'text-accent-emerald' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Why Cursor
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`transition-all duration-200 ${
                    activeTab === 'projects' 
                      ? 'text-accent-blue' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setActiveTab('ideas')}
                  className={`transition-all duration-200 ${
                    activeTab === 'ideas' 
                      ? 'text-accent-violet' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Ideas
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={() => {
                      setActiveTab('about')
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left transition-all duration-200 ${
                      activeTab === 'about' 
                        ? 'text-accent-cyan' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('cursor')
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left transition-all duration-200 ${
                      activeTab === 'cursor' 
                        ? 'text-accent-emerald' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Why Cursor
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('projects')
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left transition-all duration-200 ${
                      activeTab === 'projects' 
                        ? 'text-accent-blue' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('ideas')
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left transition-all duration-200 ${
                      activeTab === 'ideas' 
                        ? 'text-accent-violet' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Ideas
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text font-mono leading-tight">
                // why I want to join cursor
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
                "Do what you love, and you'll never work a day in your life"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto px-4">
                <button 
                  onClick={() => setActiveTab('about')}
                  className="w-full sm:w-auto premium-button focus-ring px-6 md:px-8 py-3 text-base font-medium"
                >
                  Get to Know Me
                </button>
                <button 
                  onClick={() => setActiveTab('ideas')}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 text-base font-medium accent-border glass text-accent-cyan hover:text-white hover:bg-accent-cyan/10 transition-all duration-200 focus-ring"
                >
                  See My Ideas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-20 relative z-10">
          {activeTab === 'about' && (
            <div className="space-y-16">
              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-8 text-accent-cyan font-mono">// my story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm Pat Coyle. An Enterprise AE at Chainguard with nearly nine years of experience helping organizations adopt transformative technologies.
                  </p>
                  <p>
                    I've sold complex solutions across IoT, cloud infrastructure and cyber. From Fortune 500 boardrooms to oilfields and construction sites, I've learned how to tailor value to every stakeholder and drive real adoption.
                  </p>
                  <p>
                    There are few times in a career when you can help shape a fundamental shift in how technology is built and adopted. Cursor feels like one of those moments. A chance to help developers unlock their full potential and redefine how software teams build, learn and ship.
                  </p>
                  <p>
                    This site is a quick look at how I think, how I sell and how I'd help Cursor's customers succeed.
                  </p>
                </div>
              </section>

              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-8 text-accent-emerald font-mono">// sales is personal</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-accent-cyan">About Me</h3>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-emerald mt-1">•</span>
                        <span>Born and raised in Omaha, NE 🌽</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-emerald mt-1">•</span>
                        <span>Got married two months ago</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-emerald mt-1">•</span>
                        <span>Visited 24 countries</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-emerald mt-1">•</span>
                        <span>Proud uncle of five</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-emerald mt-1">•</span>
                        <span>Once played Bridge w/ Bill Gates & Warren Buffett (long story)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-accent-violet">Career Highlights</h3>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>First new grad hired at Samsara (Series B)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>2× President's Club, 4× Winner's Circle</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Promoted five times; named team lead each level</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Closed the largest EDP in segment at AWS (FY23), recognized by AWS's CEO</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Named to AWS Achiever's Circle (top 5% of sellers globally)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'cursor' && (
            <div className="space-y-16">
              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-10 text-accent-emerald font-mono">// what cursor gets right</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center text-white font-medium text-sm">1</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-cyan">Context-Aware Intelligence</h3>
                        <p className="text-gray-400">Understanding not just the current line, but the entire codebase context. This is revolutionary.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-emerald rounded-full flex items-center justify-center text-white font-medium text-sm">2</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-emerald">Zero Context Switching</h3>
                        <p className="text-gray-400">Everything stays in the editor. No tab-switching, no workflow disruption. Pure flow state.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-violet rounded-full flex items-center justify-center text-white font-medium text-sm">3</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-violet">Developer-First Design</h3>
                        <p className="text-gray-400">Built by developers who actually code. Every feature feels intentional and useful.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center text-white font-medium text-sm">4</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-blue">Intelligent Code Completion</h3>
                        <p className="text-gray-400">Suggestions that actually understand your intent, structural matching.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-slate rounded-full flex items-center justify-center text-white font-medium text-sm">5</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-slate">Seamless Integration</h3>
                        <p className="text-gray-400">Works with existing tools and workflows. No learning curve, just enhanced productivity.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-emerald rounded-full flex items-center justify-center text-white font-medium text-sm">6</div>
                      <div>
                        <h3 className="text-lg font-medium mb-3 text-accent-emerald">Privacy & Security</h3>
                        <p className="text-gray-400">Local processing options and enterprise-grade security. Trust is everything.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ROI Calculator Section */}
              <ROICalculator />

            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-16">
              {/* Interactive Game */}
              <DinoJumper />

              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-8 text-accent-blue font-mono">// featured projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass rounded-xl p-6 border border-white/5 card-hover">
                    <h3 className="text-lg font-medium mb-3 text-accent-cyan">Enterprise Sales Success</h3>
                    <p className="text-gray-400 mb-4">
                      Proven track record in enterprise sales at Chainguard, helping Fortune 500 companies 
                      adopt cutting-edge security solutions. Deep understanding of enterprise buying processes 
                      and technical product positioning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent-emerald/20 text-accent-emerald rounded-full text-sm">Enterprise Sales</span>
                      <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm">Business Development</span>
                      <span className="px-3 py-1 bg-accent-violet/20 text-accent-violet rounded-full text-sm">Security</span>
                    </div>
                    <a href="https://www.linkedin.com/in/j-patrick-coyle/" className="text-accent-cyan hover:text-white transition-colors">View LinkedIn →</a>
                  </div>

                  <div className="glass rounded-xl p-6 border border-white/5 card-hover">
                    <h3 className="text-lg font-medium mb-3 text-accent-emerald">Developer Tools Expertise</h3>
                    <p className="text-gray-400 mb-4">
                      9 years of experience selling to developers and engineering teams. Deep understanding 
                      of developer workflows, pain points, and how to position tools that actually improve 
                      productivity and code quality.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Developer Tools</span>
                      <span className="px-3 py-1 bg-accent-emerald/20 text-accent-emerald rounded-full text-sm">Product Positioning</span>
                      <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm">Workflow</span>
                    </div>
                    <a href="https://github.com/coylepatrick94-design" className="text-accent-emerald hover:text-white transition-colors">View GitHub →</a>
                  </div>

                  <div className="glass rounded-xl p-6 border border-white/5 card-hover">
                    <h3 className="text-lg font-medium mb-3 text-accent-violet">This Cursor Application</h3>
                    <p className="text-gray-400 mb-4">
                      Built this interactive website to demonstrate my passion for Cursor and showcase 
                      my understanding of modern development tools. Features responsive design, interactive elements, 
                      and demonstrates my commitment to learning and growth.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-accent-emerald/20 text-accent-emerald rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-accent-violet/20 text-accent-violet rounded-full text-sm">Tailwind CSS</span>
                    </div>
                    <a href="https://github.com/coylepatrick94-design" className="text-accent-violet hover:text-white transition-colors">View on GitHub →</a>
                  </div>

                  <div className="glass rounded-xl p-6 border border-white/5 card-hover">
                    <h3 className="text-lg font-medium mb-3 text-accent-blue">AI-Powered Development</h3>
                    <p className="text-gray-400 mb-4">
                      Extremely passionate about the intersection of AI and development. I see Cursor as 
                      the future of how developers work, and I want to help bring that future to every 
                      development team through effective sales and business development.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">AI Tools</span>
                      <span className="px-3 py-1 bg-accent-emerald/20 text-accent-emerald rounded-full text-sm">Innovation</span>
                      <span className="px-3 py-1 bg-accent-violet/20 text-accent-violet rounded-full text-sm">Future</span>
                    </div>
                    <a href="mailto:patcoylegtm@gmail.com" className="text-accent-blue hover:text-white transition-colors">Let's Connect →</a>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'ideas' && (
            <div className="space-y-12">
              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-8 text-accent-emerald font-mono">// my sales strategy for cursor</h2>
                <div className="space-y-8">
                  <div className="glass rounded-xl p-6 border border-accent-cyan/30 accent-border">
                    <h3 className="text-xl font-semibold mb-4 text-accent-cyan">Fast Ramp-Up Strategy</h3>
                    <p className="text-gray-400 mb-4">
                      Drawing on my experience with PLG technology, I'll focus on rapid account prioritization, aggressive pipeline building and quick wins. I'll target high-velocity development teams and demonstrate Cursor's value through hard ROI, product differentiation and business outcomes.
                    </p>
                    <div className="code-block">
                      <code className="text-accent-cyan text-sm">
                        // 30-60-90 Day Plan:<br/>
                        // Week 1: Rapid immersion in Cursor's value prop, competitive landscape, and customer success stories. Shadow top-performing sellers and start engaging with customers.<br/>
                        // Weeks 2-4: Execute high-velocity outreach with a goal of 5+ demos or qualified conversations daily. Start driving pipeline with targeted outbound campaigns and leverage existing customer references aggressively.<br/>
                        // Weeks 5-8: Launch multiple pilot programs with strategic accounts. Secure executive sponsorships and in-person meetings to accelerate deal momentum.<br/>
                        // Weeks 9-12: Convert pilots into proposals, focus on early revenue generation and work towards progressing first deals
                      </code>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 border border-accent-blue/30 accent-border">
                    <h3 className="text-xl font-semibold mb-4 text-accent-blue">Account Prioritization Framework</h3>
                    <p className="text-gray-400 mb-4">
                      Building on proven AWS methodologies, I'll score and prioritize enterprise accounts with 1,000+ employees based on factors that signal urgency and ability to adopt AI tools fast:
                    </p>
                    <div className="code-block">
                      <code className="text-accent-blue text-sm">
                        // Priority Scoring Matrix:<br/>
                        // - Enterprise size (1,000+ employees)<br/>
                        // - Engineering team size (300+ developers)<br/>
                        // - Existing adoption of AI and developer productivity tools<br/>
                        // - Code velocity & deployment frequency metrics<br/>
                        // - R&D or invested interest in developer tools/innovation<br/>
                        //<br/>
                        // Focus: Enterprises with high developer output vested interest in build time improvement and velocity.
                      </code>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 border border-accent-violet/30 accent-border">
                    <h3 className="text-xl font-semibold mb-4 text-accent-violet">Usage-Based Sales Approach</h3>
                    <p className="text-gray-400 mb-4">
                      Leveraging deep experience with outcome-based selling
                    </p>
                    <div className="code-block">
                      <code className="text-accent-violet text-sm">
                        // Value Demonstration Metrics:<br/>
                        // - 40% faster feature development velocity<br/>
                        // - 60% reduction in code review cycle time<br/>
                        // - 25% improvement in code quality and security metrics<br/>
                        // - Clear ROI tied to developer time saved and reduced technical debt
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              <section className="glass rounded-xl p-6 md:p-10 border border-white/5 card-hover">
                <h2 className="text-2xl font-semibold mb-8 text-accent-violet font-mono">// why I'm excited</h2>
                <div className="space-y-6 text-gray-400">
                  <p>
                    I've been lucky to play a small part in some meaningful milestones. Moments like these reinforced what drives me.
                  </p>
                  
                  {/* Screenshots Section */}
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="glass rounded-lg p-4 border border-white/5">
                      <img 
                        src="/SamsaraIPO.png" 
                        alt="Samsara IPO - Bell Ringing Ceremony" 
                        className="w-full h-auto rounded-lg border border-white/10"
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Ringing the bell at Samsara's IPO
                      </p>
                    </div>
                    <div className="glass rounded-lg p-4 border border-white/5">
                      <img 
                        src="/CEOemailAWS.png" 
                        alt="Personal note from AWS CEO Matt Garman" 
                        className="w-full h-auto rounded-lg border border-white/10"
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Personal recognition from AWS CEO Matt Garman
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="glass-strong border-t border-white/5 py-12 md:py-16 relative z-10">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-medium mb-6 text-accent-cyan font-mono">Let's Build Together</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I'm Patrick Coyle, and I'm excited about the opportunity to join Cursor and help shape the future of AI-powered development.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:patcoylegtm@gmail.com" className="text-accent-cyan hover:text-white transition-colors">
                    Email
                  </a>
                  <a href="https://github.com/coylepatrick94-design" className="text-accent-emerald hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/j-patrick-coyle/" className="text-accent-blue hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-violet hover:text-white transition-colors">
                    Resume PDF
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-6 text-accent-violet font-mono">Quick Links</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveTab('about')}
                    className="block text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    About Me
                  </button>
                  <button 
                    onClick={() => setActiveTab('projects')}
                    className="block text-gray-400 hover:text-accent-emerald transition-colors"
                  >
                    My Projects
                  </button>
                  <button 
                    onClick={() => setActiveTab('ideas')}
                    className="block text-gray-400 hover:text-accent-violet transition-colors"
                  >
                    Feature Ideas
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500">
              <p className="font-mono text-sm">Built with Next.js + Tailwind CSS • Made with ❤️ for the Cursor team</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 premium-button rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus-ring z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
    </>
  )
}
