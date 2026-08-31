import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ChatBot from './components/ChatBot'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(prev => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <Router>
      <div className="app-layout">
        <Header onHamburgerClick={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar} />
        )}

        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

        <ChatBot />
      </div>
    </Router>
  )
}

export default App
