import {Component} from 'react'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'
import SocialSection from '../SocialMediaSection'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class Portfolio extends Component {
  state = {activeTab: 'HOME'}

  updateActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  getActiveTabContent = tab => {
    switch (tab) {
      case navBarItems[1].name:
        return <AboutSection />
      case navBarItems[2].name:
        return <ProjectsSection />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  render() {
    const {activeTab} = this.state

    return (
      <>
        <NavBar
          navBarData={navBarItems}
          activeTab={activeTab}
          onClickTab={this.updateActiveTab}
        />
        <div className="app-body">
          {this.getActiveTabContent(activeTab)}
          <SocialSection />
        </div>
      </>
    )
  }
}

export default Portfolio
