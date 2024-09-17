// Write your React code here.
import {Component} from 'react'
import './index.css'
class Feedback extends Component {
  state = {
    isFeedbackselected: false,
  }
  onClickEmoji = () => {
    this.setState({isFeedbackselected: true})
  }
  renderFeebackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>

          <ul>
            {emojis.map(eachemoji => (
              <li key={eachemoji.id}>
                <button className="emoji-button" onClick={this.onClickEmoji}>
                  <img
                    className="emoji-icon"
                    src={eachemoji.imageUrl}
                    alt={eachemoji.name}
                  />
                  <p className="emoji-name">{eachemoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  renderThankYouscreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thanku-container">
        <img className="thanku-img" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thanku-text">Thank you!</h1>
        <p className="thanku-description">We appreciate you</p>
      </div>
    )
  }

  render() {
    const {isFeedbackselected} = this.state
    return (
      <div className="app-contanier">
        <div className="feedback-card">
          {isFeedbackselected
            ? this.renderThankYouscreen()
            : this.renderFeebackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
