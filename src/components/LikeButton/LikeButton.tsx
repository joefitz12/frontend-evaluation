import './LikeButton.css';

function LikeButton(props: { likes: number }) {
	// Add click handler to icon that sends post request to db
	// Updates state so displays as "liked"
	return (
		<span className="post__likes">
			<span className="post__likes-icon">&#10084;</span>
			{props.likes}
		</span>
	);
}

export default LikeButton;
