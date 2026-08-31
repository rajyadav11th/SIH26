import { Heart, Target, Users, Globe, Award, Zap, Shield, Sparkles } from 'lucide-react'
import './AboutPage.css'

const team = [
  { name: 'Team MediKiosk', role: 'Smart India Hackathon 2025', initial: 'TM' },
]

const values = [
  { icon: Heart, title: 'Patient-First', desc: 'Every design decision starts with the patient — especially the elderly, low-literacy, and first-time hospital visitors who need it most.' },
  { icon: Target, title: 'Clinical Accuracy', desc: 'AI-generated summaries follow standardized clinical formats (SOCRATES, Dashavidha Pariksha) to ensure no diagnostic detail is missed.' },
  { icon: Shield, title: 'Privacy & Trust', desc: 'DPDP Act 2023 compliant. Consent-first design with granular, revocable permissions and audio explanation for all users.' },
  { icon: Globe, title: 'Multilingual Access', desc: 'Voice + touch in Hindi, English, and major regional languages — because healthcare should never be gated by language.' },
  { icon: Zap, title: 'Speed at Scale', desc: 'Designed for 5,000+ patients/day in tertiary government hospitals. Every interaction optimized for maximum throughput.' },
  { icon: Users, title: 'Doctor Empowerment', desc: 'We don\'t replace the doctor — we arm them with a complete, structured history so they can focus on what matters: clinical reasoning and care.' },
]

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content animate-fade-in-up">
          <div className="about-badge">
            <Award size={14} />
            <span>Smart India Hackathon 2025</span>
          </div>
          <h1 className="about-hero-title">
            Reimagining Clinical History
            <span className="about-hero-accent"> for a Billion People</span>
          </h1>
          <p className="about-hero-subtitle">
            MediKiosk is an AI-powered clinical history software platform born from a simple observation:
            Indian doctors have just 2 minutes per patient. We're building the technology to make those
            2 minutes count.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="about-problem section">
        <div className="about-problem-grid">
          <div className="about-problem-text">
            <h2 className="section-title">The Problem</h2>
            <p className="about-problem-desc">
              India's government hospitals see <strong>4,000–10,000 OPD patients daily</strong>.
              Consultation time has collapsed to <strong>2–5 minutes</strong> — among the shortest globally.
              Within this window, a physician must elicit history, examine, review records, diagnose, counsel, and prescribe.
            </p>
            <p className="about-problem-desc">
              The result: systematic under-elicitation of history, missed comorbidities, repeated questioning,
              and preventable diagnostic errors. AYUSH practitioners face an even greater challenge — Dashavidha Pariksha
              requires extensive assessment that's impossible within OPD time constraints.
            </p>
          </div>
          <div className="about-problem-stats">
            <div className="about-stat-card glass">
              <span className="about-stat-number">2 min</span>
              <span className="about-stat-text">Average consultation time in India</span>
            </div>
            <div className="about-stat-card glass">
              <span className="about-stat-number">10,000+</span>
              <span className="about-stat-text">Daily OPD patients at apex institutions</span>
            </div>
            <div className="about-stat-card glass">
              <span className="about-stat-number">70–80%</span>
              <span className="about-stat-text">Diagnoses achievable through history alone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Core Values</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto var(--space-2xl)' }}>
          Principles that guide every line of code we write
        </p>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div key={i} className="about-value-card glass animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="about-value-icon">
                <v.icon size={24} />
              </div>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission section">
        <div className="about-mission-card glass">
          <Sparkles size={32} className="about-mission-icon" />
          <h2 className="about-mission-title">Our Mission</h2>
          <p className="about-mission-desc">
            To ensure that every patient walking into an Indian hospital — regardless of literacy, language,
            or digital comfort — has their complete medical history captured, digitized, and presented to their
            doctor before the consultation begins. No patient should be denied quality care because of a
            documentation bottleneck.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
