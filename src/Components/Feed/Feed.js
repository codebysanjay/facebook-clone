import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			<Post
				timestamp="Yup this is timestamp"
				profilePic="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=ico_A-Oe"
				message="This Worked"
				username="Sachin Tendulkar"
				image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			/>
			<Post
				timestamp="Yup this is timestamp"
				profilePic="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=ico_A-Oe"
				message="This Worked"
				username="Sachin Tendulkar"
				image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			/>
			<Post
				timestamp="Yup this is timestamp"
				profilePic="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=ico_A-Oe"
				message="This Worked"
				username="Sachin Tendulkar"
				image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			/>
			<Post
				timestamp="Yup this is timestamp"
				profilePic="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=ico_A-Oe"
				message="This Worked"
				username="Sachin Tendulkar"
				image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
			/>
		</div>
	);
}

export default Feed;
