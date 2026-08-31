import { useState } from 'react'
import { Search, Menu, X, MessageSquare, User, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header({ onHamburgerClick, sidebarOpen }) {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  return (
    <header className="header glass" id="main-header">
      <div className="header-inner">
        {/* Left: Hamburger */}
        <button
          className="header-hamburger btn-icon"
          onClick={onHamburgerClick}
          aria-label="Toggle sidebar"
          id="hamburger-btn"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <div className="header-logo" onClick={() => navigate('/')}>
          <div className="header-logo-icon">
            <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logoGrad)" />
              <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="logoGrad" x1="2" y1="2" x2="30" y2="30">
                  <stop stopColor="#00bcd4" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="header-logo-text">MediKiosk</span>
        </div>

        {/* Center: Search Bar */}
        <div className="header-search" id="header-search">
          <Search size={18} className="header-search-icon" />
          <input
            type="text"
            placeholder="Search reports, hospitals, features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header-search-input"
            id="search-input"
          />
        </div>

        {/* Right Section */}
        <div className="header-actions">
          {/* Discussion Forum Button */}
          <button
            className="header-action-btn discussion-btn"
            id="discussion-forum-btn"
            onClick={() => {}}
            title="Discussion Forum"
          >
            <MessageSquare size={19} />
            <span className="header-action-label">Forum</span>
          </button>

          {/* Notifications */}
          <button className="header-action-btn" title="Notifications" id="notifications-btn">
            <Bell size={19} />
            <span className="notification-dot" />
          </button>

          {/* User Profile */}
          <button
            className="header-profile-btn"
            onClick={() => navigate('/profile')}
            id="user-profile-btn"
            title="Profile"
          >
            <div className="header-avatar">
              <User size={18} />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
