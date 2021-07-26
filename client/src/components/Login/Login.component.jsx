import React, { useState } from 'react'
import {} from './Login.styles'
import auth from '../../utils/auth.js'

const { authUser, setAuthToken } = auth

const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		error: '',
	})

	const { email, password, error } = values

	const handleChange = (name) => (event) => {
		setValues({
			...values,
			[name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setValues({ ...values, error: '' })
		authUser({ email, password }, { authRoute: 'login' }).then((res) => {
			if (res.error) {
				console.log(res)
				setValues({ ...values, error: res.message })
			} else {
				console.log(res)
				setAuthToken(res, () => {
					setValues({
						...values,
						error: '',
					})
				})
			}
		})
	}

	const showError = () => (
		<div
			style={{
				display: error ? '' : 'none',
				backgroundColor: 'darkred',
				color: 'offwhite',
			}}
		>
			{error}
		</div>
	)

	const LoginForm = () => (
		<form>
			<div>
				<label>Email</label>
				<input type="email" value={email} onChange={handleChange('email')} />
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange={handleChange('password')}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</form>
	)

	return (
		<>
			<h1>Login Page</h1>
			{LoginForm()}
			{showError()}
		</>
	)
}

export default Login
