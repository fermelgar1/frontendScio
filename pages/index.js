import AppContext from '../AppContext'
import React from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'

const index = ({}) => {
	const context = React.useContext(AppContext)
	const apiRes = context.response.home
	const information = apiRes ? apiRes.data.attributes : []

	return (
		<div className="container mx-auto">
			<NavBar />
			<div className="container flex flex-wrap flex-col mx-auto space-y-8 h-screen">
				<h1 className="text-8xl font-bold uppercase">{information.title}</h1>
				<h2 className="text-7xl font-semibold uppercase">
					{information.subtitle}
				</h2>
				<p className="text-sm font-light capitalize">
					{information.description}
				</p>
			</div>
		</div>
	)
}

export default index
