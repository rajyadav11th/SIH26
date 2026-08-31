import { useState } from 'react'
import {
  User, Mail, Phone, MapPin, Calendar, Shield, Edit3, Save,
  Heart, Activity, Pill, FileText, AlertCircle, CheckCircle
} from 'lucide-react'
import './ProfilePage.css'

const initialProfile = {
  name: 'Rajesh Kumar',
  email: 'rajesh.kumar@email.com',
  phone: '+91 98765 43210',
  gender: 'Male',
  dob: '1985-04-15',
  age: 40,
  bloodGroup: 'B+',
  abhaId: '91-2345-6789-0123',
  address: '42, Sector 15, Noida, Uttar Pradesh - 201301',
  emergencyContact: 'Sunita Kumar — +91 99887 76655',
  language: 'Hindi',
}

const medicalInfo = {
  allergies: ['Penicillin', 'Sulfa drugs'],
  conditions: ['Type 2 Diabetes (5 yrs)', 'Hypertension (3 yrs)', 'Hypothyroidism'],
  medications: [
    { name: 'Metformin 500mg', freq: 'Twice daily', status: 'active' },
    { name: 'Amlodipine 5mg', freq: 'Once daily', status: 'active' },
    { name: 'Levothyroxine 50mcg', freq: 'Morning', status: 'active' },
  ],
  recentVisits: [
    { date: '2025-08-15', doctor: 'Dr. Sharma', dept: 'General Medicine', summary: 'Routine checkup, BP elevated' },
    { date: '2025-07-20', doctor: 'Dr. Patel', dept: 'Cardiology', summary: 'Chest pain evaluation, ECG normal' },
    { date: '2025-06-18', doctor: 'Dr. Gupta', dept: 'Endocrinology', summary: 'TSH levels review' },
  ]
}

function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState(initialProfile)

  const handleEdit = () => {
    setEditForm(profile)
    setIsEditing(true)
  }

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className="profile-page">
      {/* Header Card */}
      <section className="profile-header-section">
        <div className="profile-header-bg" />
        <div className="profile-header-card animate-fade-in-up">
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">
              <User size={40} />
            </div>
            <div className="profile-avatar-info">
              <h1 className="profile-name">{profile.name}</h1>
              <div className="profile-meta-row">
                <span className="profile-meta-chip">
                  <Shield size={13} /> ABHA: {profile.abhaId}
                </span>
                <span className="profile-meta-chip">
                  <Activity size={13} /> Blood: {profile.bloodGroup}
                </span>
                <span className="profile-meta-chip">
                  <Calendar size={13} /> Age: {profile.age}
                </span>
              </div>
            </div>
            <button
              className={`btn ${isEditing ? 'btn-outline' : 'btn-primary'} profile-edit-btn`}
              onClick={isEditing ? handleCancel : handleEdit}
              id="profile-edit-btn"
            >
              {isEditing ? 'Cancel' : <><Edit3 size={16} /> Edit Profile</>}
            </button>
          </div>
        </div>
      </section>

      <div className="profile-body section">
        <div className="profile-grid">
          {/* Personal Info Card */}
          <div className="profile-card glass" id="personal-info-card">
            <div className="profile-card-header">
              <User size={20} />
              <h2>Personal Information</h2>
            </div>
            <div className="profile-card-body">
              {isEditing ? (
                <div className="profile-edit-form">
                  {[
                    { label: 'Full Name', key: 'name', icon: User },
                    { label: 'Email', key: 'email', icon: Mail },
                    { label: 'Phone', key: 'phone', icon: Phone },
                    { label: 'Date of Birth', key: 'dob', icon: Calendar, type: 'date' },
                    { label: 'Address', key: 'address', icon: MapPin },
                    { label: 'Emergency Contact', key: 'emergencyContact', icon: Phone },
                  ].map((field) => (
                    <div key={field.key} className="profile-edit-field">
                      <label className="profile-edit-label">
                        <field.icon size={14} /> {field.label}
                      </label>
                      <input
                        type={field.type || 'text'}
                        value={editForm[field.key]}
                        onChange={(e) => setEditForm({ ...editForm, [field.key]: e.target.value })}
                        className="profile-edit-input"
                      />
                    </div>
                  ))}
                  <button className="btn btn-primary" onClick={handleSave} id="profile-save-btn">
                    <Save size={16} /> Save Changes
                  </button>
                </div>
              ) : (
                <div className="profile-info-list">
                  {[
                    { label: 'Full Name', value: profile.name, icon: User },
                    { label: 'Email', value: profile.email, icon: Mail },
                    { label: 'Phone', value: profile.phone, icon: Phone },
                    { label: 'Gender', value: profile.gender, icon: User },
                    { label: 'Date of Birth', value: profile.dob, icon: Calendar },
                    { label: 'Blood Group', value: profile.bloodGroup, icon: Heart },
                    { label: 'ABHA ID', value: profile.abhaId, icon: Shield },
                    { label: 'Address', value: profile.address, icon: MapPin },
                    { label: 'Emergency Contact', value: profile.emergencyContact, icon: Phone },
                    { label: 'Preferred Language', value: profile.language, icon: User },
                  ].map((item, i) => (
                    <div key={i} className="profile-info-row">
                      <span className="profile-info-label">
                        <item.icon size={14} /> {item.label}
                      </span>
                      <span className="profile-info-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Medical Info */}
          <div className="profile-medical-stack">
            {/* Allergies */}
            <div className="profile-card glass" id="allergies-card">
              <div className="profile-card-header">
                <AlertCircle size={20} style={{ color: '#ef4444' }} />
                <h2>Allergies</h2>
              </div>
              <div className="profile-card-body">
                <div className="profile-tags">
                  {medicalInfo.allergies.map((a, i) => (
                    <span key={i} className="profile-tag profile-tag--danger">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="profile-card glass" id="conditions-card">
              <div className="profile-card-header">
                <Activity size={20} style={{ color: '#fbbf24' }} />
                <h2>Medical Conditions</h2>
              </div>
              <div className="profile-card-body">
                <div className="profile-tags">
                  {medicalInfo.conditions.map((c, i) => (
                    <span key={i} className="profile-tag profile-tag--warning">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Medications */}
            <div className="profile-card glass" id="medications-card">
              <div className="profile-card-header">
                <Pill size={20} style={{ color: '#34d399' }} />
                <h2>Current Medications</h2>
              </div>
              <div className="profile-card-body">
                {medicalInfo.medications.map((med, i) => (
                  <div key={i} className="profile-med-item">
                    <div className="profile-med-info">
                      <span className="profile-med-name">{med.name}</span>
                      <span className="profile-med-freq">{med.freq}</span>
                    </div>
                    <span className="profile-med-status">
                      <CheckCircle size={13} /> Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Visits */}
        <div className="profile-card glass profile-visits-card" id="recent-visits-card">
          <div className="profile-card-header">
            <FileText size={20} />
            <h2>Recent Visits</h2>
          </div>
          <div className="profile-card-body">
            <div className="profile-visits-table">
              <div className="profile-visits-header-row">
                <span>Date</span>
                <span>Doctor</span>
                <span>Department</span>
                <span>Summary</span>
              </div>
              {medicalInfo.recentVisits.map((v, i) => (
                <div key={i} className="profile-visits-row">
                  <span className="profile-visit-date">{v.date}</span>
                  <span>{v.doctor}</span>
                  <span className="profile-visit-dept">{v.dept}</span>
                  <span className="profile-visit-summary">{v.summary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
