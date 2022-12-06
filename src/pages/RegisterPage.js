import React, {useState} from "react";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFirstNameChange = (evt) => {
        setFirstName(evt.target.value);
    }
    const handleLastNameChange = (evt) => {
        setLastName(evt.target.value);
    }
    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value);
    }
    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(firstName && lastName && password && username) {
            console.log('register submit - looks good');
            setSubmitted(true);
        } else {
            console.log('register submit - something is missing');
        }
    }
    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Register</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                           className="form-control"
                           name="firstName"
                           value={firstName}
                           onChange={handleFirstNameChange}
                    />
                </div>
                <div className={'form-group'}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                           className="form-control"
                           name="lastName" value={lastName}
                           onChange={handleLastNameChange}
                    />
                </div>
                <div className={'form-group'}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           className="form-control"
                           name="username" value={username}
                           onChange={handleUsernameChange}
                    />
                </div>
                <div className={'form-group'}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           className="form-control"
                           name="password" value={password}
                           onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        disabled={submitted}
                    >Register</button>
                    {submitted ?
                        <img alt="loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        : ''
                    }
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;