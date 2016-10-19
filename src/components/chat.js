import React from 'react'
import smoothScroll from 'smoothscroll'

import classNames from 'classnames'
import '../less/chat.less'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {typing:true}
  }

  componentDidMount() {
    if(this.props.chat.aj) {
      setTimeout(() => {
        this.setState({typing:false})
      },1000)
    }
    else {
      this.setState({typing:false})
    }
  }

  componentDidUpdate(){
    let avatar = document.querySelectorAll('.avatar')
    smoothScroll(avatar[avatar.length-1])
  }

  render() {
    let chatPerson = {}
    let chatStyle = {}
    let avatar = {}
    let img = {}
    if(this.props.chat.aj) {
      chatPerson = classNames('chat', 'aj')
      chatStyle = classNames('talk-bubble', 'tri-right', 'btm-left')
      avatar = classNames('avatar', 'aj')
    }
    else {
      chatPerson = classNames('chat', 'me')
      chatStyle = classNames('talk-bubble', 'tri-right', 'btm-right')
      avatar = classNames('avatar', 'me')
    }

    if(this.props.chat.img) {
      img = {backgroundImage:`url(${this.props.chat.img})`}
    }
    return (
      <div className={chatPerson}>
        {
          this.state.typing ?
            <div className='typing-indicator'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          :
            <div className={chatStyle}>
              <div className='talktext'>
              {
                this.props.chat.text ?
                  <p>{this.props.chat.text}</p>
                :
                  <p dangerouslySetInnerHTML={this.props.chat}></p>
              }

                {
                  this.props.chat.img ?
                    <div style={img} className='img'></div>
                  :
                    null
                }
                {
                  this.props.chat.link ?
                    <a href={this.props.chat.link} target='_blank'>{this.props.chat.link}</a>
                  :
                    null
                }
              </div>
              <div className={avatar}>
                <div></div>
              </div>
            </div>
        }

      </div>
    )
  }
}




export default Chat
