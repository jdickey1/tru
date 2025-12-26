"use client";

import { useState } from "react";

// Lone Star SVG Component
const LoneStar = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
      className="lone-star"
    />
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy-deep)]/95 backdrop-blur-sm border-b border-[var(--gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <LoneStar size={36} className="animate-star-pulse" />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-white text-xl font-bold tracking-tight">
                Texas Republicans
              </span>
              <span className="text-[var(--gold)] text-xs uppercase tracking-widest font-semibold">
                United
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-white/80 hover:text-white transition-colors font-medium">
              Our Mission
            </a>
            <a href="#issues" className="text-white/80 hover:text-white transition-colors font-medium">
              The Issues
            </a>
            <a href="#join" className="text-white/80 hover:text-white transition-colors font-medium">
              Get Involved
            </a>
            <a href="https://secure.anedot.com/texas-republicans-united-pac/donation" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--gold)]/20">
            <div className="flex flex-col gap-4">
              <a href="#mission" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Our Mission
              </a>
              <a href="#issues" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                The Issues
              </a>
              <a href="#join" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Get Involved
              </a>
              <a href="https://secure.anedot.com/texas-republicans-united-pac/donation" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background with Texas Capitol imagery effect */}
    <div className="absolute inset-0 bg-[var(--navy-deep)]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--texas-red)] rounded-full blur-3xl" />
      </div>
      {/* Star pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
      {/* Decorative star */}
      <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <LoneStar size={80} className="mx-auto" />
      </div>

      {/* Main headline */}
      <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        Electing Republicans.
        <br />
        <span className="text-[var(--gold)]">Growing the Party.</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        Texas Republicans United is committed to building a stronger Republican Party 
        across the Lone Star State—one candidate, one community, one victory at a time.
      </p>

      {/* Gold accent line */}
      <div className="gold-accent w-32 mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        <a href="#join" className="btn-primary text-lg px-8 py-4">
          Join the Movement
        </a>
        <a href="#issues" className="btn-secondary text-lg px-8 py-4">
          Our Platform
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

// Mission Section
const Mission = () => (
  <section id="mission" className="py-24 bg-[var(--cream)]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <LoneStar size={48} className="mx-auto mb-6" />
        <h2 className="section-title">Our Mission</h2>
        <div className="gold-accent w-24 mx-auto mt-4" />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-t-4 border-[var(--texas-red)]">
        <p className="text-lg md:text-xl text-[var(--text-dark)] leading-relaxed mb-6">
          <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--navy-deep)] font-semibold">Welcome to Texas Republicans United</span>—a 
          Political Action Committee dedicated to the values that have made Texas the greatest state in the nation.
        </p>
        
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          We believe in <strong className="text-[var(--navy-deep)]">limited government</strong>, <strong className="text-[var(--navy-deep)]">individual liberty</strong>, 
          and <strong className="text-[var(--navy-deep)]">fiscal responsibility</strong>. We stand for strong families, safe communities, 
          and economic opportunity for all Texans.
        </p>

        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Our mission is simple: <em>elect principled Republican candidates</em> at every level of government 
          and <em>grow the Republican Party</em> in every corner of Texas—from the Panhandle to the Rio Grande Valley.
        </p>

        <div className="mt-8 pt-8 border-t border-[var(--cream-dark)] flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--texas-red)] font-[family-name:var(--font-display)]">254</div>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wide">Texas Counties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--texas-red)] font-[family-name:var(--font-display)]">31M+</div>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wide">Texans to Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--texas-red)] font-[family-name:var(--font-display)]">1</div>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wide">United Mission</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Issues Section
const issues = [
  {
    title: "Election Integrity",
    description: "Protecting the sanctity of every Texan's vote through secure, transparent, and accessible elections. We support voter ID laws and oppose efforts to undermine election security.",
    icon: "🗳️"
  },
  {
    title: "Border Security",
    description: "Defending Texas sovereignty with a secure border. We support law enforcement, oppose sanctuary policies, and demand the federal government fulfill its constitutional duty.",
    icon: "🛡️"
  },
  {
    title: "Economic Freedom",
    description: "Keeping Texas the best state for business with low taxes, minimal regulation, and policies that create jobs and opportunity for hardworking Texans.",
    icon: "📈"
  },
  {
    title: "Education Excellence",
    description: "Empowering parents with school choice and ensuring our children receive a quality education focused on academics, not political agendas.",
    icon: "📚"
  },
  {
    title: "Constitutional Rights",
    description: "Defending the Second Amendment, free speech, and religious liberty. We will never compromise on the constitutional rights of Texans.",
    icon: "⚖️"
  },
  {
    title: "Fiscal Responsibility",
    description: "Fighting for taxpayers by opposing wasteful spending, demanding government accountability, and keeping Texas financially strong for future generations.",
    icon: "💰"
  }
];

const Issues = () => (
  <section id="issues" className="py-24 bg-[var(--navy-deep)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-4">
          Where We Stand
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Texas Republicans United fights for the conservative principles that keep Texas strong, free, and prosperous.
        </p>
        <div className="gold-accent w-24 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue, index) => (
          <div key={index} className="issue-card group">
            <div className="text-4xl mb-4">{issue.icon}</div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--navy-deep)] mb-3 group-hover:text-[var(--texas-red)] transition-colors">
              {issue.title}
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {issue.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Join Section
const Join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    county: "",
    interests: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error silently for now
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="join" className="py-24 bg-[var(--cream)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <LoneStar size={64} className="mx-auto mb-6" />
          <h2 className="section-title text-[var(--texas-red)]">Welcome Aboard!</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Thank you for joining Texas Republicans United. Together, we will keep Texas red!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-[var(--cream)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Join the Fight</h2>
          <p className="section-subtitle">
            Stand with us to elect Republicans and grow our party across Texas. 
            Sign up to receive updates and opportunities to get involved.
          </p>
          <div className="gold-accent w-24 mx-auto mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-[var(--navy-deep)] mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="form-input"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-[var(--navy-deep)] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="form-input"
                placeholder="Smith"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy-deep)] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy-deep)] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                placeholder="(512) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="county" className="block text-sm font-semibold text-[var(--navy-deep)] mb-2">
                Texas County
              </label>
              <input
                type="text"
                id="county"
                className="form-input"
                placeholder="Travis, Harris, Dallas, etc."
                value={formData.county}
                onChange={(e) => setFormData({ ...formData, county: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--cream-dark)]">
            <p className="text-xs text-[var(--text-muted)] mb-6">
              By submitting this form, you agree to receive email communications from Texas Republicans United. 
              You may unsubscribe at any time. We respect your privacy and will never share your information.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full md:w-auto text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing Up..." : "Sign Up Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Donate Section
const Donate = () => (
  <section id="donate" className="py-20 bg-[var(--texas-red)]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <LoneStar size={56} className="mx-auto mb-6 [&_.lone-star]:fill-white [&_.lone-star]:opacity-90" />
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
        Invest in Texas
      </h2>
      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
        Your contribution helps us recruit and elect conservative Republican candidates, 
        register voters, and keep Texas the beacon of freedom in America.
      </p>
      <a
        href="https://secure.anedot.com/texas-republicans-united-pac/donation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-[var(--texas-red)] px-10 py-4 rounded font-bold text-lg uppercase tracking-wide hover:bg-[var(--cream)] transition-colors shadow-lg"
      >
        Contribute Today
      </a>
      <p className="text-white/90 text-sm mt-6">
        Political Advertisement Paid for by Texas Republicans United PAC
      </p>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[var(--navy-deep)] text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LoneStar size={32} />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                Texas Republicans United
              </span>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">
            A Political Action Committee dedicated to electing Republican candidates 
            and growing the Republican Party across the great state of Texas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4 text-[var(--gold)]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#mission" className="text-white/90 hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="#issues" className="text-white/90 hover:text-white transition-colors">The Issues</a></li>
            <li><a href="#join" className="text-white/90 hover:text-white transition-colors">Get Involved</a></li>
            <li><a href="#donate" className="text-white/90 hover:text-white transition-colors">Donate</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4 text-[var(--gold)]">
            Contact Us
          </h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>959 W. Glade Rd., Hurst, TX 76054</li>
            <li>
              <a href="mailto:info@texasrepublicansunited.com" className="hover:text-white transition-colors">
                info@texasrepublicansunited.com
              </a>
            </li>
          </ul>
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
        <p className="mb-2">
          Political Advertisement Paid for by Texas Republicans United PAC
        </p>
        <p>
          © {new Date().getFullYear()} Texas Republicans United. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Issues />
        <Join />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
