import AppContext from '../AppContext'
import React from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { useRouter } from 'next/router'

const postDescription = ({}) => {
	const context = React.useContext(AppContext)
	const apiRes = context.post
	const post = apiRes ? apiRes : []
	const router = useRouter()

	React.useEffect(() => {
		!post.title && router.push('/')
	}, [])

	return (
		<div className="container mx-auto">
			<NavBar />
			<div className="px-2 space-y-4 container flex flex-wrap  mx-auto flex-col min-h-screen">
				<h1 className="text-4xl uppercase">{post.title}</h1>
				<h2 className=" text-3xl uppercase">{post.subtitle}</h2>
				<h3 className="text-xl capitalize font-light">{post.author}</h3>
				<p className="text-left capitalize">{post.content}</p>
			</div>
		</div>
	)
}
export default postDescription
//
