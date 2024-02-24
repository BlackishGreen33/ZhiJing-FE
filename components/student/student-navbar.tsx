"use client";

import { useState, useEffect } from "react";
import { MessageCircleMore, ClipboardPen } from "lucide-react";
import Link from "next/link";

type BoxProps = {
	id: number;
	content: string;
	activeItemId: number;
	updateActiveItemId: (id: number) => void;
};

const Box: React.FC<BoxProps> = ({
	id,
	content,
	activeItemId,
	updateActiveItemId,
}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [scaleValue, setScaleValue] = useState(1);

	useEffect(() => {
		if (isClicked) {
			setScaleValue(0.9);
			setTimeout(() => {
				setScaleValue(1.2);
				setTimeout(() => {
					setScaleValue(1);
					setIsClicked(false);
				}, 70);
			}, 120);
		}
	}, [isClicked]);

	const handleClick = () => {
		setIsClicked(true);
		updateActiveItemId(id);
	};

	const scaleStyle: React.CSSProperties = {
		transform: `scale(${scaleValue})`,
		color: activeItemId === id ? "#327cc6" : "#9c9c9c",
	};

	return (
		<Link href={id === 1 ? "/" : "/analyze"} className="flex flex-1">
			<div
				onClick={handleClick}
				style={scaleStyle}
				className="flex flex-1 justify-center items-center"
			>
				<div className="flex flex-col justify-center items-center w-40 h-5vh font-semibold">
					{id === 1 ? <MessageCircleMore /> : <ClipboardPen />}
					<div className="text-xs">{content}</div>
				</div>
			</div>
		</Link>
	);
};

const SudentNavbar: React.FC = () => {
	const navItems = [
		{ id: 1, content: "对话" },
		{ id: 2, content: "学情分析" },
	];

	const [activeItemId, setActiveItemId] = useState(1);

	const updateActiveItemId = (id: number) => {
		setActiveItemId(id);
	};

	return (
		<div className="w-full h-[8vh] fixed bottom-0 flex flex-col">
			<div className="w-full h-[0.1vh] bg-gray-700"></div>
			<div className="w-full h-[7.9vh] flex">
				{navItems.map((item) => (
					<Box
						key={item.id}
						id={item.id}
						content={item.content}
						activeItemId={activeItemId}
						updateActiveItemId={updateActiveItemId}
					/>
				))}
			</div>
		</div>
	);
};

export default SudentNavbar;
