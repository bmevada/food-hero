import React, { Component } from "react";
import Button from "../../components/Button/button1";
import axios from "axios";
import { useNavigate } from 'react-router';
import SignUpModal from "./SignUpModal";
import ErrorModal from "./ErrorModal";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstNameAlert: "",
			lastNameAlert: "",
			emailAlert: "",
			passwordAlert: "",
			confirmPwAlert: "",
			data: "",
			modalShow: false,
			errorShow: false
		}

		this.fnameRef = React.createRef();
		this.lnameRef = React.createRef();
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.confirmPwRef = React.createRef();
	}

	onSignUp = () => {
		const emailMatch = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailRef.current.value);
		let flag = 0;
		this.setState({
			firstNameAlert: "",
			lastNameAlert: "",
			emailAlert: "",
			passwordAlert: "",
			confirmPwAlert: ""
		})

		if (!this.fnameRef.current.value) {
			this.setState({
				firstNameAlert: "Please Enter Your First Name"
			})
			flag = 1;
		}
		if (!this.lnameRef.current.value) {
			this.setState({
				lastNameAlert: "Please Enter Your Last Name"
			})
			flag = 1;
		}
		if (!this.emailRef.current.value || !emailMatch) {
			this.setState({
				emailAlert: "Please Enter A Valid Email"
			})
			flag = 1;
		}
		if (!this.passwordRef.current.value) {
			this.setState({
				passwordAlert: "Please Enter A Password"
			})
			flag = 1;
		}
		if (!this.confirmPwRef.current.value) {
			this.setState({
				confirmPwAlert: "Please Confirm Password"
			})
			flag = 1;
		}
		if (flag === 0) {
			const sendData = {
				email: this.emailRef.current.value,
				password: this.passwordRef.current.value,
				passwordCheck: this.confirmPwRef.current.value,
				displayName: this.fnameRef.current.value + ' ' + this.lnameRef.current.value
			}

			axios.post('/users/register', sendData)
				.then(res => res.data)
				.then(data => {
					if (data.role) {
						this.onShow();
					}
				})
				.catch(error => {
					this.onErrorShow()
					this.setState({ data: error.response.data.msg })
				})
		}
	}

	onErrorShow = () => {
		this.setState({
			errorShow: true
		})
	}
	onShow = () => {
		this.setState({
			modalShow: true
		})
	}
	onHide = () => {
		this.setState({
			modalShow: false,
			errorShow: false
		})
	}

	render() {
		return (
			<div className="signUp-container">
				<header className="signUp-header">REGISTER</header>
				<div className="signUp-content">
					<div className="email-container">
						<div className="email">
							<div className="first-name">
								<div><label>First Name<span>{this.state.firstNameAlert}</span></label></div>
								<div className="input"><input type="text" name="Ufirstname" id="Ufirstname" ref={this.fnameRef} /></div>
							</div>

							<div className="last-name">
								<div><label>Last Name<span>{this.state.lastNameAlert}</span></label></div>
								<div className="input"><input type="text" name="Ulastname" id="Ulastname" ref={this.lnameRef} /></div>
							</div>

							<div className="email-input">
								<div><label>Email Address<span>{this.state.emailAlert}</span></label></div>
								<div className="input"><input type="email" name="Uname" id="Uname" placeholder="" ref={this.emailRef} /></div>
							</div>

							<div className="password-input">
								<div><label>Password<span>{this.state.passwordAlert}</span></label></div>
								<div className="input"><input type="password" name="password" id="password" placeholder="" ref={this.passwordRef} /></div>
							</div>

							<div className="password-confirm">
								<div><label>Confirm Password<span>{this.state.confirmPwAlert}</span></label></div>
								<div className="input"><input type="password" name="confirmPassword" id="confirmPassword" ref={this.confirmPwRef} /></div>
							</div>

							<Button value="SIGN UP" onClick={() => { this.onSignUp(); }} />
						</div>
					</div>
				</div>
				<SignUpModal
					show={this.state.modalShow}
					onHide={this.onHide}
				/>
				<ErrorModal
					show={this.state.errorShow}
					onHide={this.onHide}
					content={this.state.data}
				/>
			</div>
		)
	}
}

const Comp = (props) => {
	const navigate = useNavigate()
	return <SignUp navigate={navigate} {...props} />
}

export default Comp;