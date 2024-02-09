import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
	return (
		<>
			<div style={{ display: "flex", flexWrap: "wrap", alignContent: "start" }}>
				<Logo />
				<h1 style={{ paddingLeft: 15, textAlign: "left" }}> NoodleTown News</h1>
			</div>
			<Navigation />
		</>
	);
};
