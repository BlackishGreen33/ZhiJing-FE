import Link from "next/link";

import Header from "@/components/main-header";
import SudentNavbar from "@/components/student/student-navbar";
import { cn } from "@/lib/utils";

const page = () => {
	const questions = [
		{ id: 1, type: "数学", title: "微分方程", isSolve: false },
		{ id: 2, type: "数学", title: "常态分布", isSolve: false },
		{ id: 3, type: "物理", title: "什么是电磁场？", isSolve: true },
	];

	const renderQuestions = (isSolve: boolean) => {
		return (
			<>
				{questions.map(
					(item) =>
						isSolve === item.isSolve && (
							<Link
								href={`/student/solve/chat/?title=${item.title}`}
								className="w-[80%] h-[10vh] bg-neutral-800 rounded-lg flex items-center"
								key={item.id}
							>
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
								<div className="h-[6vh] flex justify-center items-center flex-1">
									{item.title}
								</div>
							</Link>
						)
				)}
			</>
		);
	};

	return (
		<main>
			<Header />
			<div className="relative top-[10vh] w-full flex flex-col items-center gap-5">
				<div className="w-full flex flex-col items-center gap-3">
					<p className="text-gray-400">待解决</p>
					{renderQuestions(false)}
				</div>
				<div className="w-full flex flex-col items-center gap-3">
					<p className="text-gray-400">已解决</p>
					{renderQuestions(true)}
				</div>
			</div>
			<SudentNavbar activeID={2} />
		</main>
	);
};

export default page;
