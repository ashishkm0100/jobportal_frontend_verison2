import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='signpage'>
       <h1 className='sign'>Sign Up</h1>
                    <div className='name'>
                       Full Name
                        <input className='place'
                            type="text"
                         
                            name="fullname"
                         
                            placeholder="      Name"
                        />
                    </div>
                    <div className='email'>
                        <label>Email</label>
                        <input className='place'
                            type="email"
                          
                            name="email"
                          
                            placeholder="     enter your email"
                        />
                    </div>
                    <div className='num'>
                        <label>Phone Number</label>
                        <input className='place'
                            type="text"
                            
                            name="    phoneNumber"
                           
                            placeholder="      enter your mobile number"
                        />
                    </div>
                    <div className='pass'>
                        <label>Password</label>
                        <input className='place'
                            type="password"
                          
                            name="password"
                         
                            placeholder="     password"
                        />
                    </div>
                    <div className='radio'>
                        
                            <div className="flex items-center space-x-2">
                                <input className='place'
                                    type="radio"
                                    name="role"
                                    value="student"
                                  
                         
                                />
                                User
                            </div>
                            <div className="radioo">
                                <input className='place'
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    
                     
                                />
                            Admin
                            </div>
                            <button className='signbtm'>Signup</button>
                        
                        
                    </div>
    </div>
  )
}

export default Signup
