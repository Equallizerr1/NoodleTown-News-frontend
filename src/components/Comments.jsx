import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useState, useEffect } from "react";
import { getComments } from "../../utils/api";
import { CommentBox } from "./CommentBox";

export const Comments = ({ id }) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		getComments(id).then(({ comments }) => {
			setComments(comments);
		});
	}, []);

	return (
		<>
			<h5>{` ${comments.length} Comments`}</h5>
			<CommentBox
				id={id}
				sx={{
					display: "block",
					margin: "auto",
				}}></CommentBox>
			{!comments.length ? (
				<>
					<hr />
				</>
			) : (
				<>
					<ul>
						{comments.map((comment) => (
							<li key={comment.comment_id}>
								<Card
									sx={{ display: "block", maxWidth: "75%", margin: "auto" }}>
									<CardContent>
										<Typography
											sx={{ margin: "auto", textAlign: "left" }}
											variant="body2">
											{comment.author}
										</Typography>
										<br />
										<Typography
											sx={{ margin: "auto", paddingX: 5, textAlign: "left" }}
											variant="body1">
											{comment.body}
										</Typography>
									</CardContent>
									<CardActions>
										<IconButton
											onClick={() => {
												voteCounter(comment.comment_id, "+");
											}}
											aria-label="upvote arrow">
											<ArrowCircleUpIcon />
										</IconButton>
										<Typography>{`${comment.votes} votes`}</Typography>
										<IconButton
											onClick={() => {
												voteCounter(comment.comment_id, "-");
											}}
											aria-label="downvote arrow">
											<ArrowCircleDownIcon />
										</IconButton>
									</CardActions>
								</Card>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};
