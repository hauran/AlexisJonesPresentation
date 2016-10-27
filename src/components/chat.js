import React from 'react'
import smoothScroll from 'smoothscroll'
import classNames from 'classnames'
import Content from './content'
import '../less/chat.less'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show:false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show:true})
    },500)
  }

  scrollToBottom(){
    let avatar = document.querySelectorAll('.avatar')
    smoothScroll(avatar[avatar.length-1])
  }

  render() {
    let chatPerson = {}
    let chatStyle = {}
    let avatar = {}
    let chatImage = {}
    if(this.props.chat.aj) {
      chatPerson = classNames({'chat':true, 'aj':true, 'show':this.state.show})
      chatImage = {backgroundImage:'url(img/bot.png)'}
      chatStyle = classNames('talk-bubble', 'tri-right', 'btm-left')
      avatar = classNames('avatar', 'aj')
    }
    else {
      chatPerson = classNames({'chat':true, 'me':true, 'show':this.state.show})
      chatImage = {backgroundImage:'url(img/me.png)'}
      chatStyle = classNames('talk-bubble', 'tri-right', 'btm-right')
      avatar = classNames('avatar', 'me')
    }

    return (
      <div className={chatPerson}>
        {
          <div className={chatStyle}>
            <div className='talktext'>
              <Content chat={this.props.chat} scrollToBottom={() => this.scrollToBottom()}></Content>
            </div>
            <div className={avatar}>
              <div style={chatImage}></div>
            </div>
          </div>
        }
      </div>
    )
  }
}




export default Chat
