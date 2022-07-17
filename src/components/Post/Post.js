import Checkmark from "../../images/Checkmark.svg"
import Comment from "../../images/Comment.svg"
import Retweet from "../../images/Retweet.svg"
import Like from "../../images/Like.svg"
import Share from "../../images/Share.svg"

import { StyledPost } from "./Post.styled"


const Post = ({
	author,
	date,
	content,
	image,
	comments = 482,
	retweet = 146,
	likes = 887,
}) => {
	const { photo, name, nickname } = author;

	return (
		<StyledPost>
			<div className="author-info">
				<img src={photo} alt={name} className="author-img" />
				<span>{name}</span>
				<img src={Checkmark} alt="check-img" className="icon" />
				<span>{nickname}</span>
				<span> {date}</span>
			</div>
			<div className="main-info">
				<p>{content}</p>
				<img src={image} alt="post_img" className="main-img" />
			</div>
			<div className="post-reactions">
				<div className="comments">
					<img src={Comment} alt={comments} className="icon" />
					<span>{comments}</span>
				</div>
				<div className="retweet">
					<img src={Retweet} alt={retweet} className="icon" />
					<span>{retweet}</span>
				</div>
				<div className="likes">
					<img src={Like} alt={likes} className="icon" />
					<span>{likes}</span>
				</div>
				<div className="share">
					<img src={Share} alt="share-img" className="icon-share" />
				</div>
			</div>
		</StyledPost>
	)
};

export default Post;

