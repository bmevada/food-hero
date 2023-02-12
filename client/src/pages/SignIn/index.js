import React, { useState } from "react";
import Button from "../../components/Button/button1";
import axios from "axios";
import { useNavigate } from 'react-router';
import SignInErrorModal from "./ErrorModal";
import jwt from 'jwt-decode'
import { useDispatch } from "react-redux";
import { tokenGenerate } from "../../redux/actions";

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorShow, setErrorShow] = useState(false);
    const [errorData, setErrorData] = useState("")

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const onSignIn = () => {
        const sendData = {
            email: email,
            password: password
        }

        axios.post('/users/login', sendData)
            .then(res => res.data)
            .then(data => {
                const token = data.token;
                const user = jwt(token);
                localStorage.setItem('token', JSON.stringify(token));
                navigate("/");
                dispatch(tokenGenerate(user))
            })
            .catch(error => {
                onErrorShow()
                setErrorData(error.response.data.msg)
            })
    }

    const onErrorShow = () => {
        setErrorShow(true)
    }

    return (
        <div className="signIn-container">
            <header className="signIn-header">Sign In</header>
            <div className="signIn-content">
                <div className="email-container">
                    <div className="email">
                        <header className="email-header">Email</header>

                        <div className="email-input">
                            <div>
                                <label>Email Address</label>
                            </div>
                            <div className="input">
                                <input type="email" name="Uname" id="Uname" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="password-input">
                            <div>
                                <label>Password</label>
                            </div>
                            <div className="input">
                                <input type="password" name="uPassword" id="uPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="show-forgot-container">
                            <div className="forgot-password">
                                <a>
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="signIn-register-container">
                            <div className="signIn-button-container">
                                <Button value="Sign In" onClick={onSignIn} />
                            </div>
                            <div className="register-comment">
                                Don't have an account?
                            </div>
                            <div className="goto-register">
                                <a href="/signup">Create one here.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SignInErrorModal
                show={errorShow}
                onHide={() => setErrorShow(false)}
                content={errorData}
            />
        </div>
    )
}

export default SignIn


