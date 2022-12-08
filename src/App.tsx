/* eslint-disable */
import React from 'react'
import {WatchRender} from './util/render'

export default function App() {
	return (
		<div className="App">
			<h1>Demo WaitForResources</h1>
			<WatchRender>
				<ComponentWithLoadingState />
			</WatchRender>
		</div>
	)
}

function ComponentWithLoadingState() {
	const [isLoading, setIsLoading] = React.useState(true)
	React.useEffect(() => {
		setTimeout(() => setIsLoading(false), 500)
	}, [])
	return isLoading ? <>'Loading...'</> : <ComponentWithImages />
}

function ComponentWithImages() {
	return (
		<div id="ComponentWithImages">
			<img src="https://images.unsplash.com/photo-1668396855491-8fc25bc7f6f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNTI0OA&ixlib=rb-4.0.3&q=80&w=300" />
			<img src="https://images.unsplash.com/photo-1667845217693-e9ddba94a13a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNjE3Ng&ixlib=rb-4.0.3&q=80&w=300" />
			<img src="https://images.unsplash.com/photo-1670348282580-abc55452fe6d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNjE4OQ&ixlib=rb-4.0.3&q=80&w=300" />
			<img src="https://images.unsplash.com/photo-1668531125847-d71a1369a29a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNjIwOA&ixlib=rb-4.0.3&q=80&w=300" />
			<img src="https://images.unsplash.com/photo-1669425791864-8f0709fba526?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNjIzOA&ixlib=rb-4.0.3&q=80&w=300" />
			<img src="https://images.unsplash.com/photo-1668396673815-a489cd05fe4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDUxNjI0OA&ixlib=rb-4.0.3&q=80&w=300" />
		</div>
	)
}
