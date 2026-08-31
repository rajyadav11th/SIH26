import { Mic, FileText, Brain, Shield, Languages, Activity, Stethoscope, Smartphone, CheckCircle } from 'lucide-react'
import './FeaturesPage.css'

const modules = [
  {
    id: 'module-a',
    badge: 'Module A',
    title: 'Conversational Multimodal History Engine',
    desc: 'AI conducts a structured clinical history interview through voice and touch. The patient speaks naturally; the engine asks intelligent follow-up questions using frameworks like SOCRATES.',
    icon: Mic,
    color: '#22d3ee',
    features: [
      'Adaptive questioning based on chief complaint',
      'Dual-mode: voice OR touch input for every question',
      'AYUSH mode with Dashavidha Pariksha assessment',
      'Real-time red-flag detection for emergency triage',
      'Bhashini / AI4Bharat powered multilingual ASR'
    ]
  },
  {
    id: 'module-b',
    badge: 'Module B',
    title: 'Medical Document Digitization & Intelligence',
    desc: 'Upload prescriptions, lab reports, and discharge summaries. AI performs high-accuracy OCR (printed + handwritten, multilingual) and extracts structured clinical entities.',
    icon: FileText,
    color: '#34d399',
    features: [
      'Printed & handwritten OCR in multiple languages',
      'Intelligent extraction: diagnoses, medications, lab values',
      'Chronological timeline organization',
      'Abnormal value highlighting & drug interaction flags',
      'Supports PDF, JPG, PNG, scanned documents'
    ]
  },
  {
    id: 'module-c',
    badge: 'Module C',
    title: 'Structured History Summary Generator',
    desc: 'AI synthesizes conversation + documents into a physician-ready clinical summary in standard format — available on the doctor\'s screen instantly.',
    icon: Brain,
    color: '#a78bfa',
    features: [
      'Standard format: CC → HPI → PMH → Drug/Allergy → ROS',
      'Fully editable & verifiable by physician',
      'Bilingual output: local language + English/Hindi',
      'Never an autonomous diagnosis — always a draft',
      'Integrates both voice history and scanned documents'
    ]
  },
  {
    id: 'module-d',
    badge: 'Module D',
    title: 'Consent, Privacy & ABDM Integration',
    desc: 'Robust consent and security layer compliant with DPDP Act 2023 and ABDM consent framework. Linked to ABHA Personal Health Record via FHIR APIs.',
    icon: Shield,
    color: '#fbbf24',
    features: [
      'ABHA ID authentication',
      'Granular, revocable consent with audio explanation',
      'FHIR-based interoperability with ABDM ecosystem',
      'Secure processing with session data clearing',
      'DPDP Act 2023 compliant data handling'
    ]
  }
]

const highlights = [
  { icon: Languages, title: 'Multilingual', desc: '10+ Indian languages supported' },
  { icon: Smartphone, title: 'Accessible', desc: 'Icon-driven, zero-training UI' },
  { icon: Activity, title: 'Real-Time', desc: 'Instant summary generation' },
  { icon: Stethoscope, title: 'AYUSH Ready', desc: 'Full Dashavidha Pariksha support' },
]

function FeaturesPage() {
  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <div className="features-hero-bg" />
        <div className="features-hero-content animate-fade-in-up">
          <h1 className="features-hero-title">
            Powerful Features,
            <span className="features-hero-accent"> Built for Indian Healthcare</span>
          </h1>
          <p className="features-hero-subtitle">
            Four integrated AI modules working together to transform the clinical intake experience
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="features-highlights animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {highlights.map((h, i) => (
            <div key={i} className="features-highlight glass">
              <h.icon size={22} className="features-highlight-icon" />
              <div>
                <span className="features-highlight-title">{h.title}</span>
                <span className="features-highlight-desc">{h.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="features-modules section">
        {modules.map((mod, i) => (
          <div
            key={mod.id}
            className={`feature-module ${i % 2 === 1 ? 'feature-module--reverse' : ''}`}
            id={mod.id}
          >
            <div className="feature-module-content animate-fade-in-up">
              <span className="feature-module-badge" style={{ borderColor: mod.color, color: mod.color }}>
                {mod.badge}
              </span>
              <h2 className="feature-module-title">{mod.title}</h2>
              <p className="feature-module-desc">{mod.desc}</p>
              <ul className="feature-module-list">
                {mod.features.map((f, j) => (
                  <li key={j} className="feature-module-item">
                    <CheckCircle size={16} style={{ color: mod.color, flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="feature-module-visual glass animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-module-icon-wrap" style={{ background: `${mod.color}15`, color: mod.color }}>
                <mod.icon size={48} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default FeaturesPage
