import 'tailwindcss/tailwind.css'
import React from 'react'
import AppContext from '../AppContext'
import { fetchAPI } from '../lib/api'

function MyApp({ Component, pageProps }) {
	const [response, setResponse] = React.useState('')
	const [post, setPost] = React.useState('')

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
		<AppContext.Provider value={{ response, post, setPost }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	)
}
export default MyApp
