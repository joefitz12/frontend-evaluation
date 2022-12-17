import './Post.css';

import { IPost } from '../../types';

import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';

function Post(props: IPost) {
	return (
		<div className="post" key={props.id}>
			<div className="post__header">
				<Avatar handle={props.handle} avatar={props.avatar}></Avatar>
				<span>{props.handle}</span>
			</div>
			{/* Add click handler to image which filters results by post Id */}
			<img
				className="post__image"
				alt={'Image caption:' + props.caption}
				src={props.image}
				width="450"
			></img>
			<div className="post__footer">
				<LikeButton likes={props.likes}></LikeButton>
				<span className="post__caption">{props.caption}</span>
			</div>
		</div>
	);
}

export default Post;
