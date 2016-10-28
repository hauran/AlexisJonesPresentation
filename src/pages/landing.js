import React from 'react'
import { Link } from 'react-router'
import IconQuestion from 'react-icons/lib/io/help-circled'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div id='landing' className='button'>
        <Link to={'chat'}>
          <h3 style={{color:'#333333'}}>Who is</h3>
          <h1 style={{color:'#2c3e50'}}>Alexis Jones</h1>
          <h1><IconQuestion size={80} color='#2c3e50'/></h1>
        </Link>
      </div>
    )
  }
}

export default Landing
