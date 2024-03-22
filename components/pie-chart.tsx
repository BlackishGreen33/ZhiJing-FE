"use client";

import { MutableRefObject, useEffect, useRef } from "react";

import * as Echarts from "echarts";

import { cn } from "@/lib/utils";

type EChartsOption = echarts.EChartsOption;
type BoxSizingValue = "content-box" | "border-box" | "initial" | "inherit";
type StyleType = {
	boxSizing: BoxSizingValue;
};
type PieChartProps = {
	title: string;
	subTitle: string;
	seriesName: string;
	className?: string;
	data: Array<{ name: string; value: number }>;
};

const style: StyleType = {
	boxSizing: "border-box",
};

const PieChart: React.FC<PieChartProps> = ({
	title,
	subTitle,
	seriesName,
	className,
	data,
}) => {
	const chartpie: MutableRefObject<any> = useRef(null);

	const pieOption: EChartsOption = {
		title: {
			text: title,
			subtext: subTitle,
			left: "center",
		},
		tooltip: {
			trigger: "item",
		},
		series: [
			{
				name: seriesName,
				type: "pie",
				radius: "60%",
				center: ["50%", "50%"],
				selectedMode: "single",
				data: data,
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
		<div
			ref={chartpie}
			style={style}
			className={cn("w-full h-[50vh] p-2", className)}
		></div>
	);
};

export default PieChart;
