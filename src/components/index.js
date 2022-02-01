import React from "react";
import { Route, Switch } from "react-router";
import Hoome from "../contents";
import Images from "../contents/components/images";
import Popular from "../contents/components/popular";
import Profile from "../contents/components/profile";
import Recent from "../contents/components/recent";
import Templates from "../contents/components/templates";

export default function MainContainer() {
	return (
		<>
			<div className="relative h-full w-full overflow-hidden">
				<div className="relative h-full w-full">
					<div className="relative h-full w-full">
						<div className="relative h-full w-full pt-[80px]">
							<Switch>
								<Route path="/" exact>
									<Hoome />
								</Route>
								<Route path="/images">
									<Images />
								</Route>
								<Route path="/popular">
									<Popular />
								</Route>
								<Route path="/templates">
									<Templates />
								</Route>
								<Route path="/profile">
									<Profile />
								</Route>
								<Route path="/recent">
									<Recent />
								</Route>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
