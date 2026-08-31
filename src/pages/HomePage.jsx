import { useState, useRef } from 'react'
import {
  Upload, FileText, FolderOpen, Folder, ChevronDown, ChevronRight,
  Activity, Shield, Clock, Mic, Languages, Stethoscope,
  Eye, Download, Trash2, Calendar, AlertTriangle, CheckCircle,
  Sparkles, ArrowRight, Star
} from 'lucide-react'
import './HomePage.css'

// Demo reports data
const demoReports = {
  prescriptions: [
    { id: 1, name: 'Dr. Sharma - General Prescription', date: '2025-08-15', type: 'prescription', status: 'normal' },
    { id: 2, name: 'Dr. Patel - Cardiology Rx', date: '2025-07-20', type: 'prescription', status: 'normal' },
  ],
  labReports: [
    { id: 3, name: 'Complete Blood Count (CBC)', date: '2025-08-10', type: 'lab', status: 'abnormal' },
    { id: 4, name: 'Lipid Profile', date: '2025-07-25', type: 'lab', status: 'normal' },
    { id: 5, name: 'Thyroid Function Test', date: '2025-06-18', type: 'lab', status: 'abnormal' },
  ],
  dischargeSummaries: [
    { id: 6, name: 'AIIMS - Post Operative Summary', date: '2025-05-10', type: 'discharge', status: 'normal' },
  ],
  imaging: [
    { id: 7, name: 'Chest X-Ray', date: '2025-08-05', type: 'imaging', status: 'normal' },
    { id: 8, name: 'MRI Brain', date: '2025-04-12', type: 'imaging', status: 'normal' },
  ]
}

const reportCategories = [
  { key: 'prescriptions', label: 'Prescriptions', icon: FileText, color: '#22d3ee' },
  { key: 'labReports', label: 'Lab Reports', icon: Activity, color: '#34d399' },
  { key: 'dischargeSummaries', label: 'Discharge Summaries', icon: Folder, color: '#fbbf24' },
  { key: 'imaging', label: 'Imaging & Scans', icon: Eye, color: '#a78bfa' },
]

const stats = [
  { label: 'Reports Digitized', value: '8', icon: FileText },
  { label: 'Consultations Saved', value: '~45 min', icon: Clock },
  { label: 'AI Accuracy', value: '96%', icon: CheckCircle },
]

function HomePage() {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const toggleCategory = (key) => {
    setExpandedCategories(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files.map(f => ({
        id: Date.now() + Math.random(),
        name: f.name,
        size: f.size,
        date: new Date().toISOString().split('T')[0],
        status: 'processing'
      }))])
      // Simulate processing
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f =>
          f.status === 'processing' ? { ...f, status: 'done' } : f
        ))
      }, 2000)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files.map(f => ({
        id: Date.now() + Math.random(),
        name: f.name,
        size: f.size,
        date: new Date().toISOString().split('T')[0],
        status: 'processing'
      }))])
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f =>
          f.status === 'processing' ? { ...f, status: 'done' } : f
        ))
      }, 2000)
    }
  }

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero-section">
        {/* Background Effects */}
        <div className="hero-bg">
          <div className="hero-glow hero-glow--1" />
          <div className="hero-glow hero-glow--2" />
          <div className="hero-grid" />
          {/* Floating Orbs */}
          <div className="hero-orb hero-orb--1">
            <Stethoscope size={24} />
          </div>
          <div className="hero-orb hero-orb--2">
            <Shield size={20} />
          </div>
          <div className="hero-orb hero-orb--3">
            <Languages size={22} />
          </div>
          <div className="hero-orb hero-orb--4">
            <Mic size={20} />
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Sparkles size={14} />
            <span>AI-Powered Clinical History Platform</span>
          </div>

          <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Your Complete Medical History,
            <span className="hero-title-accent"> Digitized & Organized</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Upload prescriptions, lab reports & discharge summaries. Our AI extracts, structures,
            and chronologically organizes everything — so your doctor gets the full picture in seconds.
          </p>

          <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              className="btn btn-primary btn-lg hero-cta"
              onClick={() => fileInputRef.current?.click()}
              id="hero-upload-btn"
            >
              <Upload size={20} />
              Upload Your Reports
              <ArrowRight size={18} className="hero-cta-arrow" />
            </button>
            <button className="btn btn-outline btn-lg" id="hero-learn-btn">
              Learn How It Works
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <stat.icon size={18} className="hero-stat-icon" />
                <div>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual - Floating Card */}
        <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="hero-card glass">
            <div className="hero-card-header">
              <div className="hero-card-dot hero-card-dot--red" />
              <div className="hero-card-dot hero-card-dot--yellow" />
              <div className="hero-card-dot hero-card-dot--green" />
              <span className="hero-card-title">Clinical History Summary</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-line">
                <span className="hero-card-label">Chief Complaint:</span>
                <span>Persistent chest pain × 3 days</span>
              </div>
              <div className="hero-card-line">
                <span className="hero-card-label">HPI:</span>
                <span>Retrosternal, squeezing, radiating to left arm...</span>
              </div>
              <div className="hero-card-line">
                <span className="hero-card-label">Past History:</span>
                <span>T2DM (5y), HTN (3y), Hypothyroidism</span>
              </div>
              <div className="hero-card-line">
                <span className="hero-card-label">Medications:</span>
                <span>Metformin 500mg BD, Amlodipine 5mg OD</span>
              </div>
              <div className="hero-card-line hero-card-flag">
                <AlertTriangle size={14} />
                <span>⚠ Red Flag: Acute chest pain with radiation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== UPLOAD SECTION ===== */}
      <section className="upload-section section" id="upload-section">
        <div className="upload-header">
          <h2 className="section-title">
            <Upload size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '12px' }} />
            Upload Medical Reports
          </h2>
          <p className="section-subtitle">
            Drop your prescriptions, lab reports, discharge summaries, or imaging reports.
            Our AI will digitize, extract, and organize them automatically.
          </p>
        </div>

        <div
          className={`upload-zone ${isDragOver ? 'upload-zone--active' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          id="upload-zone"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={handleFileUpload}
            className="upload-input"
          />
          <div className="upload-zone-icon">
            <Upload size={40} />
          </div>
          <h3 className="upload-zone-title">
            {isDragOver ? 'Drop files here!' : 'Drag & Drop or Click to Upload'}
          </h3>
          <p className="upload-zone-hint">
            Supports PDF, JPG, PNG, DOC • Max 25MB per file
          </p>
          <div className="upload-zone-formats">
            <span className="upload-format-tag">📄 Prescriptions</span>
            <span className="upload-format-tag">🔬 Lab Reports</span>
            <span className="upload-format-tag">🏥 Discharge Summaries</span>
            <span className="upload-format-tag">🩻 Imaging</span>
          </div>
        </div>

        {/* Uploaded Files Preview */}
        {uploadedFiles.length > 0 && (
          <div className="uploaded-files">
            <h4 className="uploaded-files-title">Recently Uploaded</h4>
            <div className="uploaded-files-list">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="uploaded-file-item glass">
                  <FileText size={18} className="uploaded-file-icon" />
                  <div className="uploaded-file-info">
                    <span className="uploaded-file-name">{file.name}</span>
                    <span className="uploaded-file-meta">
                      {(file.size / 1024).toFixed(1)} KB • {file.date}
                    </span>
                  </div>
                  <span className={`uploaded-file-status uploaded-file-status--${file.status}`}>
                    {file.status === 'processing' ? (
                      <>
                        <span className="spinner" /> Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={14} /> Done
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ===== REPORTS SECTION ===== */}
      <section className="reports-section section" id="reports-section">
        <div className="reports-header">
          <h2 className="section-title">
            <FolderOpen size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '12px' }} />
            Your Medical Records
          </h2>
          <p className="section-subtitle">
            All your medical documents organized in one place. Click a folder to view reports.
          </p>
        </div>

        <div className="reports-grid">
          {reportCategories.map((cat) => {
            const reports = demoReports[cat.key] || []
            const isExpanded = expandedCategories[cat.key]

            return (
              <div key={cat.key} className="report-folder-card glass" id={`folder-${cat.key}`}>
                {/* Folder Header */}
                <button
                  className="report-folder-header"
                  onClick={() => toggleCategory(cat.key)}
                >
                  <div className="report-folder-icon" style={{ color: cat.color }}>
                    {isExpanded ? <FolderOpen size={28} /> : <Folder size={28} />}
                  </div>
                  <div className="report-folder-info">
                    <span className="report-folder-name">{cat.label}</span>
                    <span className="report-folder-count">{reports.length} files</span>
                  </div>
                  <div className="report-folder-chevron">
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </button>

                {/* Expanded File List */}
                {isExpanded && (
                  <div className="report-folder-files animate-fade-in">
                    {reports.map((report) => (
                      <div key={report.id} className="report-file-item">
                        <FileText size={16} style={{ color: cat.color, flexShrink: 0 }} />
                        <div className="report-file-info">
                          <span className="report-file-name">{report.name}</span>
                          <span className="report-file-date">
                            <Calendar size={12} /> {report.date}
                          </span>
                        </div>
                        {report.status === 'abnormal' && (
                          <span className="report-file-badge report-file-badge--abnormal">
                            <AlertTriangle size={12} /> Abnormal
                          </span>
                        )}
                        <div className="report-file-actions">
                          <button className="report-action-btn" title="View">
                            <Eye size={15} />
                          </button>
                          <button className="report-action-btn" title="Download">
                            <Download size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-section section" id="how-section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>How MediKiosk Works</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto var(--space-2xl)' }}>
          From arrival to consultation — a seamless, AI-powered journey
        </p>

        <div className="how-steps">
          {[
            { step: '01', title: 'Identify', desc: 'Log in with ABHA ID or Aadhaar. Select your language. Grant consent.', icon: Shield },
            { step: '02', title: 'Converse', desc: 'AI interviews you via voice + touch about symptoms, history & lifestyle.', icon: Mic },
            { step: '03', title: 'Scan', desc: 'Upload prescriptions, lab reports & discharge summaries for AI digitization.', icon: Upload },
            { step: '04', title: 'Summarize', desc: 'AI generates a structured, physician-ready clinical history summary.', icon: FileText },
            { step: '05', title: 'Consult', desc: 'Doctor reviews your complete history in seconds and focuses on care.', icon: Stethoscope },
          ].map((s, i) => (
            <div key={i} className="how-step glass animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="how-step-number">{s.step}</div>
              <div className="how-step-icon-wrap">
                <s.icon size={28} />
              </div>
              <h3 className="how-step-title">{s.title}</h3>
              <p className="how-step-desc">{s.desc}</p>
              {i < 4 && <div className="how-step-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#footGrad)" />
              <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="footGrad" x1="2" y1="2" x2="30" y2="30">
                  <stop stopColor="#00bcd4" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <span>MediKiosk</span>
          </div>
          <p className="footer-copy">
            © 2025 MediKiosk. Built for Smart India Hackathon. Empowering Indian healthcare with AI.
          </p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">ABDM</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
