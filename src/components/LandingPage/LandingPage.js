import React from "react";
import heroBg from "../../assets/hero.jpg";

function LandingPage() {
	return (
		<div
			className="fixed top-0 z-20 flex flex-col justify-around max-h-[90vh] overflow-hidden md:overflow-auto items-center lg:justify-between md:max-h-fit min-h-screen bg-white bg-gradient-to-r from-black to-slate-800"
			style={{
				backgroundImage: `linear-gradient(
					rgba(0, 0, 0, 0.7), 
					rgba(0, 0, 0, 0.4)
				), url(${heroBg})`,
				backgroundPosition: "center",
				objectPosition: "center",
				objectFit: "contain",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="w-full h-screen flex flex-col justify-center items-center px-3 md:px-8  pt-6">
				<h1 className="font-bold text-[3rem] text-white leading-relaxed md:text-[3.4rem] md:leading-[4.5rem] md:font-extrabold lg:text-[3.6rem] animate__animated animate__fadeInDownBig">
					Just that simple
				</h1>
				<div className="flex flex-col justify-center items-center">
					<p className="text-xs font-light w-full md:w-3/4 text-center m-auto text-white md:text-xl md:font-normal leading-9 mb-7 md:mb-10 animate__animated animate__fadeIn">
						Explore our amazing collection of items and discover what we have to
						offer. Our hero section showcases the best features of our
						application, giving you a glimpse of what’s possible. Dive into the
						content, explore the options, and see how we can make your
						experience exceptional. 
					</p>
					<a
						href="/Dashboard"
						className="bg-[#1976d2] text-white px-6 py-3 text-xl rounded-xl blog"
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
