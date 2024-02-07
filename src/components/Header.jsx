import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
	return (
		<>
			<div style={{ display: "flex", alignContent: "start" }}>
				<Logo />
				<h1 style={{ paddingLeft: 30, textAlign: "left" }}> NoodleTown News</h1>
			</div>
			<Navigation />
		</>
	);
};
