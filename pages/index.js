import AppContext from '../AppContext'
import React from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'

const home = ({}) => {
	const context = React.useContext(AppContext)

	const apiRes = context.response.home
	const information = apiRes ? apiRes.data.attributes : []

	return (
		<div>
			<NavBar />
			<div>
				<h1>{information.title}</h1>
				<h2>{information.subtitle}</h2>
				<p>{information.description}</p>
			</div>
		</div>
	)
}

export default home
