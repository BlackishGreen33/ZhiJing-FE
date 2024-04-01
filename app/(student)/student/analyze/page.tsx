"use client";

import { NextPage } from "next";
import Link from "next/link";

import Header from "@/components/main-header";
import Navbar from "@/components/navbar";
import PieChart from "@/components/pie-chart";

const Page: NextPage = () => {
	const data = [
		{ value: 735, name: "数学" },
		{ value: 510, name: "语文" },
		{ value: 434, name: "历史" },
		{ value: 335, name: "物理" },
	];

	return (
		<main>
			<Header />
			<PieChart
				title="错题比例"
				subTitle="知境"
				seriesName="错题数"
				className="relative top-[10vh]"
				data={data}
			/>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[3vh]">
				<Link
					href="/student/analyze/subject?title=数学"
					className="bg-blue-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">数学</div>
				</Link>
				<Link
					href="/student/analyze/subject?title=语文"
					className="bg-red-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">语文</div>
				</Link>
				<Link
					href="/student/analyze/subject?title=历史"
					className="bg-yellow-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">历史</div>
				</Link>
				<Link
					href="/student/analyze/subject?title=物理"
					className="bg-orange-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">物理</div>
				</Link>
			</div>
			<Navbar activeID={3} role="student"/>
		</main>
	);
};

export default Page;
