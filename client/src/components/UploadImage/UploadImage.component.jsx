import React, { useState } from 'react'

import {} from './UploadImage.styles'
import auth from '../../utils/auth.js'

const { checkAuthToken } = auth

const UploadImage = () => {
	const { token } = checkAuthToken()
	const [selectedFile, setSelectedFile] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('image', selectedFile)

		fetch(`http://localhost:8080/api/images/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				window.location.reload()
			})
			.catch((err) => console.error(err))
	}

	const handleChange = (e) => {
		setSelectedFile(e.target.files[0])
	}

	const ImageForm = () => (
		<form>
			<input type="file" onChange={handleChange} />
			<button onClick={handleSubmit}>Submit</button>
		</form>
	)

	return (
		<div>
			<p>Upload Image</p>
			{ImageForm()}
		</div>
	)
}

export default UploadImage
