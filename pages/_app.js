import 'tailwindcss/tailwind.css'
import React from 'react'
import AppContext from '../AppContext'
import { fetchAPI } from '../lib/api'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
	const [response, setResponse] = React.useState('')
	const [post, setPost] = React.useState('')
	const [title, setTitle] = React.useState('')

	const getProps = async () => {
		const [home, posts] = await Promise.all([
			fetchAPI(`/api/home`),
			fetchAPI('/api/posts'),
		])
		return { home, posts }
	}

	React.useEffect(() => {
		getProps().then((res) => setResponse(res))
	}, [])

	return (
		<AppContext.Provider value={{ response, post, setPost, title, setTitle }}>
			<>
				<Component {...pageProps} />
			</>
		</AppContext.Provider>
	)
}
export default MyApp
