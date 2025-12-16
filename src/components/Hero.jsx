import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <div className="hero-greeting fade-in">
                        <span className="wave">👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className="hero-name slide-in-left">
                        <span className="gradient-text">Gagana Srija</span>
                    </h1>

                    <p className="hero-tagline slide-in-right">
                        B.Tech AIML Student | Passionate Software Developer
                    </p>

                    <p className="hero-description fade-in">
                        A dedicated student interested in software development, seeking to strengthen
                        programming and problem-solving skills while gaining practical exposure.
                    </p>

                    <div className="hero-cta fade-in">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                        <a href="#about" className="btn btn-secondary">
                            Learn More
                        </a>
                    </div>

                    <div className="hero-stats fade-in">
                        <div className="stat-item">
                            <div className="stat-value gradient-text">9.65</div>
                            <div className="stat-label">CGPA</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value gradient-text">3+</div>
                            <div className="stat-label">Languages</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value gradient-text">2+</div>
                            <div className="stat-label">Core Skills</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
