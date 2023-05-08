import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-out') {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 1000);
        return () => clearInterval(timeout)

    }, [fadeProp])

    

    return (
        <>
        {/* <h1 className={fadeProp.fade} id='about-header'>{text}</h1> */}
        <p className={fadeProp.fade} id='about-body'>My name is George Jordan, I'm a student at the UT Austin Fullstack Coding Bootcamp.
        I am 22 years old and I'm looking forward to my future in coding! 
        </p>
        </>
    )
}

Fader.defaultProps = {
    text: 'GEORGE JORDAN'
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader
