import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<div>
			<Link to={"/"}>
				<img src="public\news-icon.svg" alt="NC News logo" width={150} />
			</Link>
		</div>
	);
};
