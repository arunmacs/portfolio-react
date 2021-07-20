import './index.css'

const NavBar = props => {
  const getNavItems = () => {
    const {navBarData, onClickTab, activeTab} = props
    return navBarData.map(item => {
      const selectTab = () => {
        onClickTab(item.name)
      }

      const selectedTab = activeTab === item.name ? 'selected-tab' : ''

      return (
        <li
          className={`nav-link-item ${selectedTab}`}
          key={item.id}
          onClick={selectTab}
        >
          <img src={item.iconUrl} alt={item.name} className="nav-link-icon" />
          <p className="nav-link-text">{item.name}</p>
        </li>
      )
    })
  }

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
        alt="profile"
        className="profile-img"
      />
      <ul className="nav-links-container">{getNavItems()}</ul>
    </nav>
  )
}

export default NavBar
