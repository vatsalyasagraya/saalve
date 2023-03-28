import React from 'react';
import './LoggIn.css';
import signpic from '../images/112.avif'
import backimg from '../images/34.jpg'


function loggin() {
    return (
        <section>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='heading'>Sign Up</h2>
                        <form className='register-form' id='register-form'>
                            <div className="formgroup">
                                <label htmlFor="name">
                                    <span className="material-icons">person</span>
                                </label>
                                <input type="text" placeholder='name' name="name" id='name' autoComplete='off' />
                            </div>
                            <div className="formgroup">

                                <label htmlFor="email">
                                    <span className="material-icons">email</span>
                                </label>
                                <input type="text" placeholder='email' name="email" id='email' autoComplete='off' />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="phone">
                                    <span className="material-icons">phone</span>
                                </label>
                                <input type="text" placeholder='phone' name="phone" id='phone' autoComplete='off' />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="password">
                                    <span className="material-icons">key</span>
                                </label>
                                <input type="text" placeholder='password' name="password" id='password' autoComplete='off' />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="cpassword">
                                    <span className="material-icons">lock</span>
                                </label>
                                <input type="text" placeholder='cpassword' name="cpassword" id='cpassword' autoComplete='off' />
                            </div>
                            <button className='form-button'>Register</button>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                            <img src={signpic} alt="Broken" width="300px" />
                        </figure>
                        {/* <Navlink to='/login' className"Sign""></Navlink> */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default loggin;
