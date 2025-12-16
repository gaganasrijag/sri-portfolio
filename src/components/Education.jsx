import './Education.css'

function Education() {
    const educationData = [
        {
            degree: 'B.Tech - AIML',
            institution: 'Mallareddy Engineering College For Women',
            year: '2024 - 2028',
            score: 'Current CGPA: 9.65',
            icon: '🎓',
            status: 'In Progress'
        },
        {
            degree: 'Intermediate (XII)',
            institution: 'Narayana Junior College',
            year: '2024',
            score: '98%',
            icon: '📚',
            status: 'Completed'
        },
        {
            degree: 'SSC (X)',
            institution: 'Sri Chaitanya English Medium School',
            year: '2022',
            score: '98%',
            icon: '🏫',
            status: 'Completed'
        }
    ]

    return (
        <section className="education" id="education">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Education</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`timeline-item glass-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-icon">
                                <span className="icon-emoji">{edu.icon}</span>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{edu.degree}</h3>
                                    <span className={`status-badge ${edu.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                                        {edu.status}
                                    </span>
                                </div>

                                <div className="institution">{edu.institution}</div>
                                <div className="timeline-meta">
                                    <span className="year">📅 {edu.year}</span>
                                    <span className="score gradient-text">⭐ {edu.score}</span>
                                </div>
                            </div>

                            <div className="timeline-connector"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
