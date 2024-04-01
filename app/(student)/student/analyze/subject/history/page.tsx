"use client";

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import SubpageHeader from "@/components/elements/subpage-header";
import Navbar from "@/components/elements/navbar";
import { QuestionProvider } from "@/components/providers/question-provider";

const Page: NextPage = () => {
	const questions = [
		{ id: 1, type: "语文", title: "什么是断袖之癖" },
		{ id: 2, type: "数学", title: "概率论" },
		{ id: 3, type: "物理", title: "什么样的酯类物质可以制造兄弟的香气" },
		{ id: 4, type: "语文", title: "森鸥外的故事" },
	];

	const RenderQuestions = () => {
		const searchParams = useSearchParams();
		const type = searchParams.get("type") || "";

		return (
			<>
				{questions.map(
					(item) =>
						type === item.type && (
							<QuestionProvider title="历史错题" key={item.id}>
								<div className="w-[80%] h-[10vh] bg-neutral-800 rounded-lg flex items-center">
									<div
										className={cn(
											"w-[20%] h-[6vh] flex justify-center items-center relative left-3 rounded-xl",
											item.type === "数学"
												? "bg-blue-500"
												: item.type === "语文"
												? "bg-red-500"
												: item.type === "历史"
												? "bg-yellow-500"
												: "bg-orange-500"
										)}
									>
										{item.type}
									</div>
									<div className="w-[50%] h-[6vh] flex justify-center items-center relative left-[17%]">
										{item.title}
									</div>
								</div>
							</QuestionProvider>
						)
				)}
			</>
		);
	};

	return (
		<main>
			<SubpageHeader
				backUrl="/student/analyze"
				title="历史错题"
				purpose="none"
			/>
			<div className="relative top-[10vh] w-full h-[80vh] flex flex-col items-center gap-5 overflow-scroll">
				<div className="w-full flex flex-col items-center gap-3">
					<p className="text-gray-400">错题列表</p>
					{RenderQuestions()}
				</div>
			</div>
			<Navbar activeID={3} role="student"/>
		</main>
	);
};

export default Page;
