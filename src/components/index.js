import {Component} from 'react'

import userDetailsContext from '../contex'

import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', topic: topicsList[0].id, submittedErr: false}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {name, topic} = this.state
    console.log(name)
    console.log(topic)
    if (name === '') {
      this.setState({submittedErr: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, submittedErr, topic} = this.state

    return (
      <userDetailsContext.Provider value={{name, topic}}>
        <div>
          <Header />
          <div className="registerCont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="registerImg"
            />
            <form onSubmit={this.onSubmitDetails} className="form">
              <h1 className="registerHeading">Let us join</h1>
              <label htmlFor="name" className="text">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="inputBox"
                id="name"
                onChange={this.onChangeName}
                value={name}
              />
              <label htmlFor="topics" className="text">
                TOPICS
              </label>
              <select
                id="topics"
                className="selectEl"
                onChange={this.onChangeTopic}
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="registerBtn">
                Register Now
              </button>
              {submittedErr && <p className="errMsg">Please enter your name</p>}
            </form>
          </div>
        </div>
      </userDetailsContext.Provider>
    )
  }
}

export default Register
