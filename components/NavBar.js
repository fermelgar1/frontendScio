import Link from 'next/link'
import AppContext from '../AppContext'
import React from 'react'

const NavBar = () => {
	const context = React.useContext(AppContext)
	const apiRes = context.title
	const title = apiRes ? apiRes : []
	return (
		<div className="grid grid-cols-4 gap-10 container mx-auto h-12 w-screen border-b-8 py-2 px-5 border-sky-500">
			<Link href="/">
				<a className="text-3xl col-span-3 uppercase">{title}</a>
			</Link>
			<Link href="/posts">
				<a className=" col-start-4 justify-end ">Posts</a>
			</Link>
		</div>
	)
}

export default NavBar
