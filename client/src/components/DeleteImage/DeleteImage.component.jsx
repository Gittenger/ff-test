import React, { useEffect, useState, useCallback } from 'react'

import { DeleteImageContainer, GridContainer } from './DeleteImage.styles'
import auth from '../../utils/auth.js'

const { checkAuthToken } = auth

const DeleteImage = () => {
	const { token } = checkAuthToken()
	const [images, setImages] = useState([])

	const getImages = useCallback(() => {
		fetch('http://localhost:8080/api/images', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(({ images }) => {
				setImages(
					images.map((img) => ({
						name: img.name,
						src: `http://localhost:8080/img/${img.name}`,
						id: img._id,
					}))
				)
			})
			.catch((err) => console.error(err))
	})

	useEffect(getImages, [])

	const handleDelete = (e) => {
		const { id, name } = e.target
		const data = {
			filename: name,
			id,
		}

		fetch('http://localhost:8080/api/images/delete', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log(res)
				getImages()
			})
			.catch((err) => console.error(err))
	}

	return (
		<DeleteImageContainer>
			<h2>Delete Images:</h2>
			<GridContainer>
				{images.map(({ name, src, id }) => (
					<div key={id}>
						<img src={src} alt="" />
						<button onClick={handleDelete} name={name} id={id}>
							Delete
						</button>
					</div>
				))}
			</GridContainer>
		</DeleteImageContainer>
	)
}
export default DeleteImage
