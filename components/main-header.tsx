import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
	return (
		<header className="fixed w-full h-[10vh]">
			<Image
				className="w-[5vh] h-[5vh] absolute left-[4.9%] top-[2.5vh]"
				src="/icon.png"
				alt="logo"
				width={200}
				height={200}
			/>
			<p className="text-sm text-gray-400 absolute left-[17%] top-[2.5vh]">
				欢迎使用
			</p>
			<p className="text-lg font-bold absolute left-[17.2%] top-[4.5vh]">
				知境
			</p>
			<div className="absolute right-[5%] top-[3vh]">
				<ModeToggle />
			</div>
		</header>
	);
};

export default Header;
