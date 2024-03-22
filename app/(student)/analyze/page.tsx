"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import Link from "next/link";

import * as Echarts from "echarts";

import Header from "@/components/main-header";
import SudentNavbar from "@/components/student/student-navbar";

type EChartsOption = echarts.EChartsOption;
type BoxSizingValue = "content-box" | "border-box" | "initial" | "inherit";
type StyleType = {
	boxSizing: BoxSizingValue;
};

const style: StyleType = {
	boxSizing: "border-box",
};

const pieOption: EChartsOption = {
	title: {
		text: "错题比例",
		subtext: "知境",
		left: "center",
	},
	tooltip: {
		trigger: "item",
	},
	series: [
		{
			name: "创业统计表",
			type: "pie",
			radius: "50%",
			data: [
				{ value: 1048, name: "数学" },
				{ value: 735, name: "语文" },
				{ value: 580, name: "李使" },
				{ value: 580, name: "物理" },
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},
	],
};

const page = () => {
	const chartpie: MutableRefObject<any> = useRef(null);

	const chartInit = () => {
		const mychartpie = Echarts.init(chartpie.current);
		mychartpie.setOption(pieOption, true);

		window.onresize = () => {
			mychartpie.resize();
		};
	};

	useEffect(() => {
		chartInit();

		return () => {
			window.onresize = null;
		};
	}, []);

	return (
		<main>
			<Header />
			<div
				ref={chartpie}
				style={style}
				className="w-full h-[50vh] p-2 relative top-[10vh]"
			></div>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[3vh]">
				<Link
					href="/analyze/subject"
					className="bg-blue-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">数学</div>
				</Link>
				<Link
					href="/analyze/subject"
					className="bg-red-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">语文</div>
				</Link>
				<Link
					href="/analyze/subject"
					className="bg-yellow-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">历史</div>
				</Link>
				<Link
					href="/analyze/subject"
					className="bg-orange-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">物理</div>
				</Link>
			</div>
			<SudentNavbar activeID={3} />
		</main>
	);
};


export default page;
