import AppContext from '../AppContext'
import React from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'

const postDescription = ({}) => {
	const context = React.useContext(AppContext)
	const apiRes = context.post
	const post = apiRes ? apiRes : []

	return (
		<div>
			<div>
				<NavBar />
			</div>
			<h1>{post.title}</h1>
			<h2>{post.subtitle}</h2>
			<p>{post.content}</p>
			<h3>{post.author}</h3>
		</div>
	)
}
export default postDescription
//
