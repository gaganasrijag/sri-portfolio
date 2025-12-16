import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [copiedItem, setCopiedItem] = useState('')

    const contactInfo = [
        {
            type: 'Email',
            value: 'gaganasrija.g@gmail.com',
            icon: '📧',
            link: 'mailto:gaganasrija.g@gmail.com',
            color: '#ec4899'
        },
        {
            type: 'Phone',
            value: '6281283003',
            icon: '📱',
            link: 'tel:+916281283003',
            color: '#8b5cf6'
        },
        {
            type: 'Location',
            value: 'Hyderabad, Telangana',
            icon: '📍',
            link: 'https://www.google.com/maps/place/Hyderabad',
            color: '#6366f1'
        }
    ]

    const handleCopy = (value, type) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopiedItem(type)
            setTimeout(() => setCopiedItem(''), 2000)
        })
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Get In Touch</h2>
                    <div className="section-divider"></div>
                    <p className="section-description">
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </p>
                </div>

                <div className="contact-grid">
                    {contactInfo.map((contact, index) => (
                        <div
                            key={index}
                            className="contact-card glass-card fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div
                                className="contact-icon"
                                style={{
                                    background: `linear-gradient(135deg, ${contact.color}, ${contact.color}dd)`
                                }}
                            >
                                <span>{contact.icon}</span>
                            </div>

                            <h3 className="contact-type">{contact.type}</h3>

                            <a
                                href={contact.link}
                                className="contact-value"
                                target={contact.type === 'Location' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                            >
                                {contact.value}
                            </a>

                            <button
                                className="copy-btn"
                                onClick={() => handleCopy(contact.value, contact.type)}
                                aria-label={`Copy ${contact.type}`}
                            >
                                {copiedItem === contact.type ? (
                                    <>
                                        <span className="check-icon">✓</span> Copied!
                                    </>
                                ) : (
                                    <>
                                        <span className="copy-icon">📋</span> Copy
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="contact-cta fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="cta-card glass-card">
                        <h3 className="mb-md">Let's Connect!</h3>
                        <p className="mb-lg">
                            I'm always open to discussing new opportunities, interesting projects,
                            or potential collaborations in the field of software development and AI/ML.
                        </p>
                        <a href="mailto:gaganasrija.g@gmail.com" className="btn btn-primary">
                            Send an Email
                        </a>
                    </div>
                </div>

                <footer className="footer fade-in" style={{ animationDelay: '0.8s' }}>
                    <p>&copy; {new Date().getFullYear()} Gagana Srija. Built with React & ❤️</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
