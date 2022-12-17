import './Avatar.css';

function Avatar(props: { handle: string; avatar: string }) {
	return (
		// Add click handler which filters posts by this user
		<img
			className="post__avatar"
			alt={props.handle + ' Avatar'}
			src={props.avatar}
		></img>
	);
}

export default Avatar;
