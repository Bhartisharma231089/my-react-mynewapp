import React from 'react'
import Card from '../Shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
    
<div className='about'>

<h1>
    About This Project
</h1>
<p>
    This is the React app to leave Feedback for a Product 
    or a services
</p>
<p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </div>
    </Card>
  )
}

export default AboutPage
