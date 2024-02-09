import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function RedBar() {
	return (
		<Box
			sx={{
				height: 20,
				margin: "auto",
			}}
		/>
	);
}
export const CommentBox = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "75%",
				margin: "auto",
				background: "white",
				borderRadius: 1,
			}}>
			<RedBar />
			<TextField
				sx={{ margin: "auto", width: "85%", background: "white" }}
				label="Add a comment"
				id="margin-none"
			/>
			<RedBar />
		</Box>
	);
};
