import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";

import { MessageCircleMore } from "lucide-react";

import "./test.css";

export default function Home() {
	return (
		<main>
			<Header />
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[10vh]">
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="item">数学</div>
				</div>
				<div className="bg-red-500 rounded-lg flex justify-center items-center">
					<div className="item">语文</div>
				</div>
				<div className="bg-yellow-500 rounded-lg flex justify-center items-center">
					<div className="item">历史</div>
				</div>
				<div className="bg-orange-500 rounded-lg flex justify-center items-center">
					<div className="item">物理</div>
				</div>
			</div>
			<Navbar />
		</main>
	);
}

const Header = () => {
	return (
		<header>
			<img alt="icon" src="@/public/icon.png" />
			<div className="test">
				<ModeToggle />
			</div>
		</header>
	);
};
