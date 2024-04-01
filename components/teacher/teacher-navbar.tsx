"use client";

import { useState, useEffect } from "react";
import { MessageCircleMore, ClipboardPen, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type BoxProps = {
	id: number;
	content: string;
	activeItemId: number;
	updateActiveItemId: (id: number) => void;
};

type TeacherNavbarProps = {
	activeID: number;
};

const Box: React.FC<BoxProps> = ({
	id,
	content,
	activeItemId,
	updateActiveItemId,
}) => {
	const handleClick = () => {
		updateActiveItemId(id);
	};

	const colorStyle: React.CSSProperties = {
		color: activeItemId === id ? "#327cc6" : "#9c9c9c",
	};

	return (
		<Link
			href={
				id === 1
					? "/teacher/dialogue"
					: id === 2
					? "/teacher/solve"
					: "/teacher/analyze"
			}
			className="flex flex-1"
		>
			<motion.div
				onClick={handleClick}
				style={colorStyle}
				className="flex flex-1 justify-center items-center"
				whileTap={{ scale: [0.9, 1.2, 1] }}
			>
				<div className="flex flex-col justify-center items-center h-5vh font-semibold">
					{id === 1 ? (
						<MessageCircleMore />
					) : id === 2 ? (
						<Lightbulb />
					) : (
						<ClipboardPen />
					)}
					<div className="text-xs">{content}</div>
				</div>
			</motion.div>
		</Link>
	);
};

const TeacherNavbar: React.FC<TeacherNavbarProps> = ({ activeID }) => {
	const navItems = [
		{ id: 1, content: "对话" },
		{ id: 2, content: "答疑區" },
		{ id: 3, content: "学情分析" },
	];

	const [activeItemId, setActiveItemId] = useState(activeID);

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

export default TeacherNavbar;
