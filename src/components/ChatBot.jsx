import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, MapPin, Bot } from 'lucide-react'
import './ChatBot.css'

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hello! 👋 I\'m MediBot, your AI health assistant. I can help you search for nearby hospitals, answer health queries, or guide you through the platform. How can I help you today?',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
]

const quickActions = [
  { label: '🏥 Find Nearby Hospitals', action: 'find_hospitals' },
  { label: '📋 Upload Reports', action: 'upload' },
  { label: '❓ How it works', action: 'how' },
]

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateBotReply = (userText) => {
    setIsTyping(true)
    const lower = userText.toLowerCase()

    let reply = "I'm here to help! You can ask me to find nearby hospitals, help with uploading reports, or learn how MediKiosk works."

    if (lower.includes('hospital') || lower.includes('nearby') || lower.includes('find')) {
      reply = "🏥 Based on your location, here are nearby hospitals:\n\n1. **AIIMS New Delhi** — 2.3 km\n2. **Safdarjung Hospital** — 4.1 km\n3. **RML Hospital** — 3.8 km\n4. **GTB Hospital** — 7.2 km\n\nWould you like directions to any of these?"
    } else if (lower.includes('upload') || lower.includes('report')) {
      reply = "📋 To upload your medical reports:\n\n1. Go to the **Home** page\n2. Click the **Upload Reports** button\n3. Select files (prescriptions, lab reports, discharge summaries)\n4. Our AI will digitize and organize them automatically!\n\nWould you like me to guide you through the process?"
    } else if (lower.includes('how') || lower.includes('work')) {
      reply = "🤖 **How MediKiosk Works:**\n\n**Step 1** — Identify with ABHA ID\n**Step 2** — AI interviews you about symptoms\n**Step 3** — Upload & scan old reports\n**Step 4** — AI generates a doctor-ready summary\n**Step 5** — Doctor reviews your complete history\n\nIt saves time for both you and your doctor!"
    } else if (lower.includes('hello') || lower.includes('hi')) {
      reply = "Hello! 😊 Great to see you. I can help you find hospitals, upload reports, or explain how MediKiosk works. What would you like?"
    }

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    }, 1200)
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMsg])
    simulateBotReply(input.trim())
    setInput('')
  }

  const handleQuickAction = (action) => {
    const actionTexts = {
      find_hospitals: 'Find nearby hospitals',
      upload: 'How do I upload reports?',
      how: 'How does MediKiosk work?'
    }
    const text = actionTexts[action]
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    simulateBotReply(text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`chatbot-trigger ${isOpen ? 'chatbot-trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        id="chatbot-trigger"
        aria-label="Open chat assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <span className="chatbot-trigger-pulse" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window glass animate-fade-in-up" id="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-avatar">
              <Bot size={20} />
            </div>
            <div className="chatbot-header-info">
              <span className="chatbot-header-name">MediBot</span>
              <span className="chatbot-header-status">
                <span className="chatbot-status-dot" /> Online
              </span>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" id="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.sender}`}>
                <div className="chatbot-msg-bubble">
                  <p className="chatbot-msg-text">{msg.text}</p>
                  <span className="chatbot-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-msg chatbot-msg--bot">
                <div className="chatbot-msg-bubble chatbot-typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="chatbot-quick-actions">
              {quickActions.map((qa, i) => (
                <button
                  key={i}
                  className="chatbot-quick-btn"
                  onClick={() => handleQuickAction(qa.action)}
                >
                  {qa.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="chatbot-input"
              id="chatbot-input"
            />
            <button
              className="chatbot-send-btn"
              onClick={handleSend}
              disabled={!input.trim()}
              id="chatbot-send-btn"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
