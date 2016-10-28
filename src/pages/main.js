import React from 'react'
import smoothScroll from 'smoothscroll'
import Chat from '../components/chat'

const conv = require('../data/conversation')


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index:0,
      conv:[],
      start:6
    }
  }

  handleNextPrev(ev) {
    if(ev.code === 'Space' || ev.code === 'ArrowRight' || ev.code === 'Enter') {
      if(!this.checkMoreMessages())
        this.next()
    }
  }

  checkMoreMessages(){
    let lastChat = `chat-${this.state.index-1}`
    return this.refs[lastChat].checkMoreMessages()
  }

  next(){
    if(this.state.index === conv.length) {
      return
    }
    let tmp = this.state.conv
    let index = this.state.index
    tmp.push(conv[index])
    if(!conv[index].aj) {
      setTimeout(()=>{
        this.next()
      },1000)
    }
    index++
    this.setState({conv:tmp, index})
  }

  componentDidUpdate() {
    let last = document.querySelectorAll('li')
    smoothScroll(last[last.length-1])
  }

  componentDidMount(){
    if(this.state.start) {
      this.setState({conv:conv.slice(0,this.state.start), index:this.state.start})

    }
    setTimeout(() => {
      this.next()
    },1000)

    window.addEventListener('keydown',(ev) => {
      this.handleNextPrev(ev)
    });
  }

  render() {
    return (
      <div id='main' className='page'>
        <ul>
        {this.state.conv.map((c,i) => {
          let ref = `chat-${i}`
          return (
            <li key={i}>
              <Chat chat={c} ref={ref} autoadvance={true}></Chat>
            </li>
          )
        })}
        </ul>
        <br/><br/>
      </div>
    )
  }
}

export default Main
