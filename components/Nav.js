import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";
import { useHorizontalScroll } from "../utils/useSideScroll";

function Nav() {
	const router = useRouter();
	const scrollRef = useHorizontalScroll();
	return (
		<nav className="relative">
			<div
				ref={scrollRef}
				className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden overscroll-contain"
			>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
					>
						{title}
					</h2>
				))}
			</div>
			<div className="visible absolute top-0 left-0 bg-gradient-to-r from-[#06202a] h-10 w-1/12 pointer-events-none 2xl:hidden" />
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12 pointer-events-none" />
		</nav>
	);
}

export default Nav;
