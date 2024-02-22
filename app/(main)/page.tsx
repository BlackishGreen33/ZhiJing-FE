import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";

import "./test.css";

export default function Home() {
	return (
		<main>
			<ModeToggle />
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px]">
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="item">数学</div>
				</div>
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="item">数学</div>
				</div>
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="item">数学</div>
				</div>
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="item">数学</div>
				</div>
			</div>
			<Navbar />
		</main>
	);
}
