import { NavLink } from 'react-router-dom'
import { Home, Info, Zap, User, FileText, Settings, HelpCircle, LogOut } from 'lucide-react'
import './Sidebar.css'

const navItems = [
  { path: '/', icon: Home, label: 'Home', exact: true },
  { path: '/about', icon: Info, label: 'About Us' },
  { path: '/features', icon: Zap, label: 'Features' },
  { path: '/profile', icon: User, label: 'My Profile' },
]

const bottomItems = [
  { icon: FileText, label: 'Documentation' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar glass ${isOpen ? 'sidebar--open' : ''}`} id="main-sidebar">
      {/* Brand Section */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
            <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#sidebarGrad)" />
            <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="sidebarGrad" x1="2" y1="2" x2="30" y2="30">
                <stop stopColor="#00bcd4" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="sidebar-brand-info">
          <span className="sidebar-brand-name">MediKiosk</span>
          <span className="sidebar-brand-tag">AI Clinical Platform</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      {/* Navigation */}
      <nav className="sidebar-nav">
        <span className="sidebar-section-label">Main Menu</span>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
            }
            onClick={onClose}
            id={`sidebar-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-divider" />

      {/* Bottom Links */}
      <div className="sidebar-bottom">
        <span className="sidebar-section-label">Support</span>
        {bottomItems.map((item, i) => (
          <button key={i} className="sidebar-link" id={`sidebar-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* User Card */}
      <div className="sidebar-user-card">
        <div className="sidebar-user-avatar">
          <User size={18} />
        </div>
        <div className="sidebar-user-info">
          <span className="sidebar-user-name">Patient User</span>
          <span className="sidebar-user-id">ABHA: XXXX-XXXX</span>
        </div>
        <button className="sidebar-logout-btn" title="Logout">
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
