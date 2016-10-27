import React from 'react'
import '../less/chat.less'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typing:true,
      message:[],
      index:0
    }
  }

  componentDidMount() {
    let message = this.state.message
    let index = this.state.index
    message.push(this.props.chat.message[index])
    index++
    this.setState({message,index})
    if(this.props.chat.aj) {
      setTimeout(() => {
        this.setState({typing:false})
      },1700)
    }
    else {
      this.setState({typing:false})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.typing !== this.state.typing) {
      this.props.scrollToBottom()
      return
    }

    this.props.scrollToBottom()
    if(this.props.chat.message.length > this.state.message.length){
      setTimeout(()=>{
        let message = this.state.message
        let index = this.state.index
        message.push(this.props.chat.message[this.state.index])
        ++index
        this.setState({message,index})
        if(this.props.chat.aj) {
          this.setState({typing:true})
          setTimeout(() => {
            this.setState({typing:false})
          },1000)
        }
      },Math.floor(Math.random() * 3000) + 1500  )
    }
  }

  render() {
    return (
      <div>
      {
        this.state.message.map((m, i) => {
          if(!m) {
            return null
          }
          if(!m.link)
            m.link = []
          return (
            this.state.typing && i === this.state.index-1?
              <div className='typing-indicator' key={i}>
               <span></span>
               <span></span>
               <span></span>
              </div>
             :
              <div key={i} className='contentContainer'>
                {
                  m.text ?
                    <p key={i}>{m.text}</p>
                  :
                    <p dangerouslySetInnerHTML={m}></p>
                }
                {
                  m.img ?
                    <div style={{backgroundImage:`url(${m.img})`}} className='img'></div>
                  :
                    null
                }
                {
                  m.link.map((l, i) => {
                    return (
                      <div key={i}>
                      {
                      typeof l === 'object' ?
                        <a href={l.url} target='_blank'>{l.text}</a>
                      :
                        <a href={l} target='_blank'>{l}</a>
                      }
                      </div>
                    )
                  })
                }
              </div>
          )
        })
      }
      </div>
    )
  }
}




export default Content
