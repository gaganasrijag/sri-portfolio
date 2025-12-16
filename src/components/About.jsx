import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>About Me</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="about-content">
                    <div className="about-card glass-card slide-in-left">
                        <div className="card-icon">
                            <span className="emoji">🎯</span>
                        </div>
                        <h3 className="mb-md">Career Objective</h3>
                        <p>
                            A dedicated B.Tech student interested in software development, seeking to
                            strengthen programming and problem-solving skills while gaining practical exposure.
                        </p>
                    </div>

                    <div className="about-card glass-card slide-in-right">
                        <div className="card-icon">
                            <span className="emoji">💡</span>
                        </div>
                        <h3 className="mb-md">What Drives Me</h3>
                        <p>
                            I'm passionate about leveraging technology to solve real-world problems.
                            With a strong foundation in AIML and core computer science subjects,
                            I'm constantly exploring new technologies and building innovative solutions.
                        </p>
                    </div>

                    <div className="about-card glass-card fade-in">
                        <div className="card-icon">
                            <span className="emoji">🌟</span>
                        </div>
                        <h3 className="mb-md">Beyond Academics</h3>
                        <p>
                            I believe in continuous learning and adaptability. My strong communication skills
                            and teamwork abilities enable me to collaborate effectively on diverse projects
                            while managing time efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
