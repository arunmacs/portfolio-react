import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

const AboutSection = () => {
  console.log()

  return (
    <div className="about-container">
      <h1 className="about-text">About</h1>
      <p className="description">
        I started my journey in the world of computers from a young age,now
        I&apos;m 21 years old,pursuing Computer Science majors at Santa Clara
        University,USA. Web development is my center of interest.
      </p>
      <div className="education-skills-container">
        <div className="education-container">
          <h1 className="education">Education</h1>
          <ul>
            {educationData.map(item => (
              <li key={item.id}>
                <div className="qualification-div">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/list-icon-img.png"
                    alt="list-icon"
                    className="list-icon"
                  />
                  <h1 className="qualification">{item.qualification}</h1>
                </div>
                <p className="qualification-source">
                  {item.qualificationSource}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-container">
          <h1 className="skills-text">Skills</h1>
          <ul className="skills-list">
            {skillsData.map(item => (
              <li className="skill-item" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
