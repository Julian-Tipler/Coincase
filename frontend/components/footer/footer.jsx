import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'


class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <Link className='footer-home'to='/home'>Home</Link>
                <a href="https://github.com/Julian-Tipler" className="github-links">
                    <FontAwesomeIcon target="_blank" rel="noreferrer" icon={faGithub}></FontAwesomeIcon>
                    <p>Julian Tipler</p> 
                </a>
            </footer>
        )
    }
}

export default Footer