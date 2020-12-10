/* eslint-disable no-unused-vars */
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, provider } from "./../../firebase";
import "./Login.css";

function Login() {
	const [named,setName]=useState('');
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
                console.log(result);
                setName(result);
			})
            .catch((e) => alert(e));
            console.log(named.additionalUserInfo.profile.name);
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
