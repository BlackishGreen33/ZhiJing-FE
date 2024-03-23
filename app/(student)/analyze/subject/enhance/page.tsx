"use client";

import { useState } from "react";
import Image from "next/image";

import SubpageHeader from "@/components/subpage-header";
import SudentNavbar from "@/components/student/student-navbar";
import { Button } from "@/components/ui/button";
import { QuestionProvider } from "@/components/providers/question-provider";

const page = () => {
	const [buttonName, setButtonName] = useState("开始刷题");

	return (
		<main>
			<SubpageHeader backUrl="/analyze" title="强化巩固" purpose="none" />
			<div className="relative top-[10vh] w-full flex flex-col items-center gap-5">
				<Image
					className="absolute top-[5vh] w-[50vh] h-[50vh]"
					src="/icon.png"
					alt="logo"
					width={200}
					height={200}
				/>
				<QuestionProvider title="强化训练">
					<Button
						className="font-bold relative top-[70vh]"
						onClick={() => setButtonName("再来一题💪")}
					>
						{buttonName}
					</Button>
				</QuestionProvider>
			</div>
			<SudentNavbar activeID={3} />
		</main>
	);
};

export default page;
