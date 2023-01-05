import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {userInput: '', wordsList: []}

  onchangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newWordItem = {
      id: uuidv4(),
      item: userInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWordItem],
      userInput: '',
    }))
  }

  render() {
    const {userInput, wordsList} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="description">Count the characters like a Boss</h1>
          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-item-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            )}
          </div>
        </div>
        <div className="card-2">
          <h1 className="title">Character Counter</h1>
          <div className="card">
            <form onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <input
                  type="text"
                  onChange={this.onchangeUserInput}
                  className="input"
                  value={userInput}
                  placeholder="Enter the characters here"
                />
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
