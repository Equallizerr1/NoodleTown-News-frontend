import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<>
			<Link to={"/"}>
				<Button key={"home"}>Home</Button>
			</Link>
			<Link to={"/Topics"}>
				<Button key={"topics"}>Topics</Button>
			</Link>
			<Link to={"/endpoints"}>
				<Button key={"endpoints"}>
					Endpoints
				</Button>
			</Link>
		</>
	);
};
