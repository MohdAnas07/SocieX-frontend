import React, { useState } from 'react'
import './register.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Register = () => {

    const [isVisible, setIsVisible] = useState(false);

    const passwordVisibleHandler = () => {
        setIsVisible(p => !p)
    }

    return (
        <div className='login'>
            <div className="loginWrapper">

                <div className="loginLeft">
                    <div className="loginLeftWrapper">
                        <h4 className="loginLogo">SocieX</h4>
                        <div className="loginBox">
                            <input placeholder='Enter Username' className='loginInput' />
                            <input placeholder='Enter Email' className='loginInput' />
                            <div className="loginPasswordVisibility">
                                <input type={!isVisible ? "password" : "text"} placeholder='Enter Password' className='loginInput passwordInput' />
                                {isVisible ? <VisibilityIcon className='visibilityIcon visibleOn' onClick={passwordVisibleHandler} /> : <VisibilityOffIcon className='visibilityIcon' onClick={passwordVisibleHandler} />}
                            </div>
                            <input type={!isVisible ? "password" : "text"} placeholder='Enter Password again' className='loginInput' />

                            <button className="loginButton">Sign Up In</button>

                            <div className="loginExtraButtons">
                                <button className="loginRegisterButton">Login into account</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="loginRight">

                    <img src='assets/login.svg' alt="" className="loginRightImg" />
                    <span className="loginDesc"> connect with friends and world around you on SocieX.</span>
                </div>


            </div>
        </div>
    )
}

export default Register