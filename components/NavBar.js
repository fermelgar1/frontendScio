import Link from 'next/link'
const NavBar = () => {
	return (
		<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<ul class="flex  flex-row space-x-8 mt-0 text-sm font-medium">
					<li>
						<Link href={'/'}>
							<a
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded bg-transparent  p-0 dark:text-white"
								aria-current="page"
							>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href={'/posts'}>
							<a class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">
								Posts
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
