import './index.css'

const NotFound = () => (
  <div className="notFoundCont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
      alt="not found"
      className="notFoundImg"
    />
    <h1 className="notFoundTxt">Page Not Found</h1>
    <p className="notFoundTxt1">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
