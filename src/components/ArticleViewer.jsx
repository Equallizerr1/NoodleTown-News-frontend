import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

// const bull = (
// 	<Box
// 		component="span"
// 		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
// 		•
// 	</Box>
// );

export const ArticleViewer = ({ props }) => {
	const articleProps = props[0];
	//const commentProps = props[0][0];
	return (
		<Card sx={{ display: "block", maxWidth: "100%", margin: "auto" }}>
			<CardContent>
				<CardMedia
					sx={{ height: 500 }}
					image={articleProps[0].article_img_url}
				/>
				<br />
				<Typography sx={{ paddingX: 10 }} variant="h4">
					{articleProps[0].title}
				</Typography>
				<Typography
					sx={{ margin: "auto", paddingX: 20, textAlign: "left" }}
					variant="body2"></Typography>
				<br />
				<Typography
					sx={{ margin: "auto", paddingX: 20, textAlign: "left" }}
					variant="body1">
					{articleProps[0].body}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton aria-label="add to favourites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};
