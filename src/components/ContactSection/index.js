import './index.css'

const ContactSection = () => (
  <div className="contact-container">
    <h1 className="my-contact-text">My Contact</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/location-img.png"
      alt="location"
      className="map-location"
    />
    <p className="work-contact">
      If you like my projects and interested to do work with me.Please
      contact...
    </p>
    <h1 className="please-contact">Please Contact:</h1>
    <p className="contact">9123456789</p>
    <p className="contact">sophie.millers@gmail.com</p>
  </div>
)

export default ContactSection
