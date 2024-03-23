"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import SubpageHeader from "@/components/subpage-header";
import SudentNavbar from "@/components/student/student-navbar";
import PieChart from "@/components/pie-chart";

const page = () => {
	const searchParams = useSearchParams();
	const title = searchParams.get("title") || "";

	const data = [
		{ value: 434, name: "是非题" },
		{ value: 510, name: "选择题" },
		{ value: 735, name: "计算题" },
	];
	return (
		<main>
			<SubpageHeader backUrl="/analyze" title={title} purpose="none" />
			<PieChart
				title="错题类别"
				subTitle="知境"
				seriesName="错题数"
				className="relative top-[10vh]"
				data={data}
			/>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-1 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[3vh]">
				<Link
					href={`/analyze/subject/history?type=${title}`}
					className="bg-blue-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">历史错题</div>
				</Link>
				<Link
					href="/analyze/subject/enhance"
					className="bg-red-500 rounded-lg flex justify-center items-center"
				>
					<div className="font-bold">强化训练</div>
				</Link>
			</div>
			<SudentNavbar activeID={3} />
		</main>
	);
};

export default page;
