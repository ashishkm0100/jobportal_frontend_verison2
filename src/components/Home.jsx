import { Button, Container } from '@mui/material'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   
      <div>
     <Container className='hbox'>
      <div className='find'>
        <h1>Find Your Dream Job Now</h1>
      
     <div className='search'>
                    <input className='input'
                        type="text"
                        placeholder="    Find job"
                        onChange={(e) => setQuery(e.target.value)}
              
                    />
                    <button
                         
                         className="sbtn"> <Link to='/jobs'style={{ color: 'white', textDecoration: "none" }}>
                        Search
                         </Link>
                          
                        
                      
                    </button>
                    
                </div>
                </div>

     </Container>
     <div className='job'>
      <h1 className='top'>   Top 5 trending jobs</h1>
      <div className='softt'>
      <h1>1 . Data Scientist</h1>
      <h1>2 . Software Developer</h1>
      <h1>3 . Cybersecurity Specialist</h1>
      <h1>4 . Artificial Intelligence (AI) Engineer</h1>
      <h1>5 . Cloud Engineer</h1>
      </div>
     

      <h1 className='topp'>  Top 5 highest paying jobs</h1>
      <div className='softtt'>
        <h1>1 . Anesthesiologist</h1>
      <h1>2 . Surgeon</h1>
      <h1>3 . Pilot</h1>
      <h1>4 . CEO</h1>
      <h1>5 . Data Scientist</h1>
      </div>

      <h1 className='toppp'>  Top 5 high demand jobs</h1>
      <div className='softttt'>
        <h1>1 . </h1>
      <h1>2 . Data Scientist</h1>
      <h1>3 . Software Developer</h1>
      <h1>4 . Cybersecurity Specialist</h1>
      <h1>5 . Cloud Engineer</h1>
      <h1>1 . (AI) Specialist</h1>
      </div>
      <div> <button
                         
                         className="bbtn"> <Link to='/jobs'style={{ color: 'white', textDecoration: "none" }}>
                        Browse for more job 
                         </Link>
                          
                        
                      
                    </button> </div>
<div className='footer' >
  <h1 className='foottext'>Created by</h1>
  <h1 className='foottextt'>Ashish Anil km</h1>
  <h1 className='foottextt'>Sarath chandran p</h1>
  <h1 className='foottextt'>Fathima Hasna t</h1>
  <h1 className='foottextt'>Nihal</h1>
  <h1 className='foottexttt'>A jobseeker website</h1>
  
</div>
     </div>
    </div>
 
  )
}

export default Home
