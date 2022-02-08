import { useRouter } from 'next/router'

const Post = ({ item, context }) => {
	const posts = item.attributes
	const router = useRouter()
	const hanldeClick = (posts) => {
		context.setPost(posts)
		router.push('/postDescription')
	}
	return (
		<li>
			<div
				className="m-9 border-b-2 border-sky-500 cursor-pointer"
				onClick={() => hanldeClick(posts)}
			>
				<h4 className="text-3xl uppercase">{posts.title}</h4>
				<h5 className="text-2xl uppercase">{posts.description}</h5>
				<h6 className="text-xl capitalize">{posts.author}</h6>
			</div>
		</li>
	)
}

export default Post
