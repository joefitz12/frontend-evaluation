import React, { useEffect, useState } from 'react';
// import logo from "./logo.svg";
import './App.css';

// Types
import { IPost, Interval } from './types';

// import components
import Post from './components/Post/Post';

function App() {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [interval, setInterval] = useState<Interval>([0, 19]);

	useEffect(() => {
		const lowerLimit = interval ? interval[0] : 0;
		const upperLimit = interval ? interval[1] : 19;

		fetch(`/api/posts/${lowerLimit}/${upperLimit}`)
			.then((res) => res.json())
			.then((data) => {
				setPosts([...posts, ...data]);
			})
			.then(() => {
				// Break into separate function or partial for listeners
				let options = {
					root: null,
					// About the size of 2 posts, so the fetch call is run prior to navigating to the end of the page
					rootMargin: '750px',
					threshold: 1.0,
				};

				let observer = new IntersectionObserver((entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							observer.disconnect();
							setInterval((interval) => [
								interval[0] + 20,
								interval[1] + 20,
							]);
						}
					});
				}, options);

				observer.observe(document.getElementById('loader')! as Element);
			});
	}, [interval]);

	return (
		<div className="App">
			<h1>Hello, Dubsado!</h1>
			{posts.length > 0 && (
				<main>
					{posts.map((post, i) => (
						<Post {...post} key={i}></Post>
					))}
				</main>
			)}
			<div id="loader"></div>
		</div>
	);
}

export default App;
