import React from "react";
import heroPng from "../../assets/hero.png";
function LandingPage() {
	return (
		<div className="flex flex-col justify-around max-h-screen overflow-hidden md:overflow-auto items-center lg:justify-between md:max-h-fit min-h-screen bg-white ">
			<div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-8 items-start pt-6">
				<h1 className="font-bold text-[3rem] text-dark leading-relaxed md:text-[3.4rem] md:leading-[4.5rem] md:font-extrabold lg:text-[3.6rem] ">
					Just that simple
				</h1>
				<div>
					<p className="text-lg font-light text-dark md:text-xl md:font-normal leading-9 mb-7 md:mb-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
						libero risus semper habitant arcu eget.
					</p>
					<a
						href="/Dashboard"
						className="bg-[#1976d2] text-white px-6 py-3 text-xl rounded-xl blog"
					>
						Get Started
					</a>
				</div>
			</div>
			<div className="w-11/12 hidden md:block  max-h-[600px] lg:max-h-[450px] overflow-hidden mx-auto mt-10">
				<img src={heroPng} alt="hero" className="object-contain" />
			</div>
		</div>
	);
}

export default LandingPage;
