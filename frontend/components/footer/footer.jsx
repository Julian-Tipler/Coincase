import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'


class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <Link className='footer-home'to='/home'>Home</Link>
                <a href="https://github.com/Julian-Tipler" className="github-links" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon target="_blank" rel="noreferrer" className='fa-lg'icon={faGithub}></FontAwesomeIcon>
                    <p>Julian Tipler</p> 
                </a>
                <a href="https://www.linkedin.com/in/julian-t-87a2a0a4/" className="github-links" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon target="_blank" rel="noreferrer" className='fa-lg'icon={faLinkedin}></FontAwesomeIcon>
                    <p>Julian Tipler</p> 
                </a>
            </footer>
        )
    }
}

export default Footer