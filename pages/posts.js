import Link from 'next/link'
import AppContext from '../AppContext'
import React from 'react'
import NavBar from '../components/NavBar'
import Post from '../components/Post'

const posts = ({}) => {
	const context = React.useContext(AppContext)
	const apiRes = context.response.posts
	const data = apiRes ? apiRes.data : []

	return (
		<div className="container mx-auto">
			<NavBar />
			<div className="container flex flex-wrap flex-col mx-auto space-y-8 space-x-5 h-screen">
				<ul className="space-y-5">
					{data &&
						data.map((items) => (
							<Post key={items.id} item={items} context={context} />
						))}
				</ul>
			</div>
		</div>
	)
}
export default posts
