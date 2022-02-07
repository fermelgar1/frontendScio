import Link from 'next/link'
import AppContext from '../AppContext'
import React from 'react'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'

const posts = ({}) => {
	const router = useRouter()

	const context = React.useContext(AppContext)

	const apiRes = context.response.posts
	const data = apiRes ? apiRes.data : []

	const hanldeClick = (posts) => {
		context.setPost(posts)
		router.push('/postDescription')
	}

	const Post = ({ item }) => {
		const posts = item.attributes
		return (
			<div>
				<button onClick={() => hanldeClick(posts)}>
					<div>
						<h1>{posts.title}</h1>
						<h2>{posts.description}</h2>
						<h3>{posts.author}</h3>
					</div>
				</button>
			</div>
		)
	}

	return (
		<>
			<div>
				<div>
					<NavBar />
				</div>
				{data && data.map((items) => <Post key={items.id} item={items} />)}
			</div>
		</>
	)
}
export default posts
