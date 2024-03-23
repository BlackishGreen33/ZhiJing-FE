"use client";

import Link from "next/link";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import TeacherNavbar from "@/components/teacher/teacher-navbar";

export default function Home() {
	useTokenCheck();

	return (
		<main>
			<Header />
			<div className="relative top-[10vh] flex justify-center">
				<p className="text-gray-400">选择咨询科目</p>
			</div>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[11vh]">
				<Link
					href="/teacher/dialogue/chat"
					className="bg-blue-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">数学</div>
				</Link>
				<Link
					href="/teacher/dialogue/chat"
					className="bg-red-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">语文</div>
				</Link>
				<Link
					href="/teacher/dialogue/chat"
					className="bg-yellow-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">历史</div>
				</Link>
				<Link
					href="/teacher/dialogue/chat"
					className="bg-orange-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">物理</div>
				</Link>
			</div>
			<TeacherNavbar activeID={1} />
		</main>
	);
}
