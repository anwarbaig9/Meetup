import {Link} from 'react-router-dom'

import userDetailsContext from '../contex/index'
import './index.css'
import Header from '../Header'

const Home = () => (
  <userDetailsContext.Consumer>
    {value => {
      const {name, topic} = value
      return (
        <div>
          <Header />
          <div className="homeContent">
            {name !== '' ? (
              <>
                <h1 className="name">Hello {name}</h1>
                <p className="topic">Welcome to {topic}</p>
              </>
            ) : (
              <>
                <h1 className="homeText">Welcome to Meetup</h1>
                <p className="homeText1">Please register for the topic</p>
                <Link to="/register">
                  <button type="button" className="homeBtn">
                    Register
                  </button>
                </Link>
              </>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="homeImg"
            />
          </div>
        </div>
      )
    }}
  </userDetailsContext.Consumer>
)

export default Home
