/* eslint-disable */
import React from 'react'

/**
 * Watches DOM stabilization and image loading
 * Wraps children in a div with an id="loaded" when ready
 */
export function WatchRender({children}: {children: React.ReactNode}) {
	const [isLoaded, setIsLoaded] = React.useState(false)

	React.useEffect(() => {
		setIsLoaded(false)
		waitForRender().then(() => setIsLoaded(true))
	}, [])

	console.log('WatchRender.isLoaded', isLoaded)

	return <div id={isLoaded ? 'loaded' : undefined}>{children}</div>
}

/**
 * Wait for render to complete
 */
export async function waitForRender({andImages = true}: {andImages?: boolean} = {}) {
	await waitForDomStabilization()
	if (andImages) await waitForImagesToLoad()
}

/**
 * Wait for DOM to stabilize
 *
 * Similar to window.onload, but onload fires even while
 * components are still showing a loading state.
 */
async function waitForDomStabilization() {
	const isDomStabilized = () => Date.now() - domObserverLastMutationTimestamp > 1000
	while (!isDomStabilized()) await sleep(100)
}
let domObserverLastMutationTimestamp = Date.now()
const domObserver = new MutationObserver((mutations, observer) => {
	console.log(mutations, observer)
	domObserverLastMutationTimestamp = Date.now()
})
domObserver.observe(document, {
	subtree: true,
	attributes: true,
})

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Discovers all images in the DOM and waits for them to load
 */
function waitForImagesToLoad() {
	return Promise.all(
		Array.from(document.images)
			.filter((img) => !img.complete)
			.map(
				(img) =>
					new Promise((resolve) => {
						img.onload = img.onerror = resolve
					}),
			),
	)
}
