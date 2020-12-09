import React from 'react';
import {
    Link,
} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }

    render() {
        var path, text, button, submit;
        if (this.props.formType === 'login') {
            path = "/signup"
            text = "New User? Sign up here:"
            button = "sign up"
            submit = "SIGN IN"
            
        }
        else {
            path = "/login"
            text = "Already have an account? Log in here:"
            button = "log in"
            submit = "Create account"
        }

        return(
            <div>
                <div>Please {`${this.props.formType}`}</div>
                <div>{this.props.errors.session.map((error, i) => <div key={`error ${i}`}>{error}</div>)}</div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="login-form">
                        <br/>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                // className="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                // className="login-input"
                            />
                        </label>
                        <br/>
                        <button type="submit" >{submit}</button>
                    </div>
                </form>
                <div>
                    {text}
                    <Link to={`${path}`}>{button}</Link>
                </div>
            </div>
        )
    }
}

export default SessionForm