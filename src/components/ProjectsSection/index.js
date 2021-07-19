import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

const ProjectsSection = () => {
  console.log(projectsData)

  return (
    <div className="projects-container">
      <h1 className="my-work-text">My Work</h1>
      <ul className="projects-list">
        {projectsData.map(project => (
          <li className="project-container" key={project.id}>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="project-img"
            />
            <p className="project-name">{project.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsSection
