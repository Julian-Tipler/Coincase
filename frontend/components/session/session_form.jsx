import React from 'react';
import {
    Link,
} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'sign up'){
            if (document.getElementById('terms-and-conditions-checkbox').checked) {
                const user = Object.assign({}, this.state);
                this.props.action(user);
            }
            else {
                alert("To proceed you must accept the terms and conditions.")
            }
        }
        else {
            const user = Object.assign({}, this.state);
            this.props.action(user);
        }
    }

    handleDemo(e) {
        e.preventDefault
        this.setState({
            email: 'user@gmail.com',
            password: 'password',
            firstName: '',
            lastName: ''
        },()=> {
            const user = Object.assign({}, this.state);
            this.props.action(user);
        })
    }


    render() {
        var path, text, button, submit, page;
        if (this.props.formType === 'login') {
            path = "/signup"
            text = "Don't have an acount? "
            button = "Don't have an account?"
            submit = "SIGN IN"
            page = 
            <div className='login-full-page'>
                <div className='login-form-title'>Sign in to Coinbase</div>
                <div className='login-page'>
                    <div className='error-messages'>{this.props.errors.session.map((error, i) => <div key={`error ${i}`}>{error}</div>)}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
                                className='login-inputs'
                            />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password'
                                className='login-inputs'
                            />
                        </div>
                        <div className='login-buttons'>
                            <button type="button"
                                className="login-button"
                                onClick={this.handleDemo}>
                                DEMO
                            </button>
                            <button className='login-button' type="submit" >{submit}</button>
                        </div>
                    </form>
                </div>
                    <div className='switch-form'>
                        <Link to={`${path}`}>{button}</Link>
                    </div>
            </div>
        }


        else {
            path = "/login"
            text = "Already have an account? "
            button = "log in"
            submit = "Create account"
            page = 
            <div className='signup-full-page'>
                <div className='signup-form-title'>Create your account</div>
                <div className='sign-up-page'>
                    <div className='error-messages'>{this.props.errors.session.map((error, i) => <div key={`error ${i}`}>{error}</div>)}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="sign-up-form">
                            <div className='first-last-names'>
                                <input type="text"
                                    value={this.state.firstName}
                                    onChange={this.update('firstName')}
                                    placeholder='First name'
                                    className="signup-inputs signup-credentials"
                                />
                                <input type="text"
                                    value={this.state.lastName}
                                    onChange={this.update('lastName')}
                                    placeholder='Last name'
                                    className="signup-inputs signup-credentials"
                                />
                            </div>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
                                className='signup-inputs '
                            />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Choose Password'
                                className='signup-inputs '
                            />
                            <div id='terms-and-conditions'>
                                <input id='terms-and-conditions-checkbox'type="checkbox" name="checkbox" value="check" /> 
                                <div>I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy.</div>
                            </div>
                            <button className='signup-button' type="submit" >{submit}</button>
                        </div>
                    </form>
                </div>
                    <div className='switch-form'>
                        {text}
                        <Link to={`${path}`}>{button}</Link>
                    </div>
            </div>
        }

        return(
            page
        )
    }
}

export default SessionForm