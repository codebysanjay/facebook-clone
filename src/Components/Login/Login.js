/* eslint-disable no-unused-vars */
import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { auth, provider } from "./../../firebase";
import "./Login.css";

function Login() {
	const [state, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
				console.log(result);
			})
			.catch((e) => alert(e));
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt=""
				/>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
