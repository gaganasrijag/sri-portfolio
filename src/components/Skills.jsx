import { useState } from 'react'
import './Skills.css'

function Skills() {
    const [activeCategory, setActiveCategory] = useState('all')

    const skillsData = {
        programming: [
            { name: 'C', level: 85, icon: '💻' },
            { name: 'Python', level: 90, icon: '🐍' },
            { name: 'Java', level: 80, icon: '☕' }
        ],
        core: [
            { name: 'Data Structures & Algorithms', level: 85, icon: '🧮' },
            { name: 'Database Management (DBMS)', level: 80, icon: '🗄️' }
        ],
        soft: [
            { name: 'Problem-solving', level: 90, icon: '🧩' },
            { name: 'Teamwork', level: 95, icon: '🤝' },
            { name: 'Communication', level: 90, icon: '💬' },
            { name: 'Adaptability', level: 92, icon: '🔄' },
            { name: 'Time Management', level: 88, icon: '⏰' }
        ]
    }

    const getAllSkills = () => {
        return [
            ...skillsData.programming,
            ...skillsData.core,
            ...skillsData.soft
        ]
    }

    const getFilteredSkills = () => {
        if (activeCategory === 'all') return getAllSkills()
        return skillsData[activeCategory] || []
    }

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Skills & Expertise</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="skills-filter fade-in">
                    <button
                        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Skills
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'programming' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('programming')}
                    >
                        Programming
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'core' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('core')}
                    >
                        Core Subjects
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'soft' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('soft')}
                    >
                        Soft Skills
                    </button>
                </div>

                <div className="skills-grid">
                    {getFilteredSkills().map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card glass-card fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>

                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.level}%` }}
                                >
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {getFilteredSkills().length === 0 && (
                    <p className="no-skills">No skills found in this category.</p>
                )}
            </div>
        </section>
    )
}

export default Skills
