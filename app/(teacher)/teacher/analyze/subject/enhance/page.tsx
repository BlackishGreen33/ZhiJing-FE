"use client";

import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";

import SubpageHeader from "@/components/elements/subpage-header";
import Navbar from "@/components/elements/navbar";
import { Button } from "@/components/ui/button";
import { QuestionProvider } from "@/components/providers/question-provider";

const Page: NextPage = () => {
	const [buttonName, setButtonName] = useState("开始刷题");

	return (
		<main>
			<SubpageHeader
				backUrl="/student/analyze"
				title="强化巩固"
				purpose="none"
			/>
			<div className="relative top-[10vh] w-full flex flex-col items-center gap-5">
				<Image
					className="absolute top-[5vh] w-[50vh] h-[50vh]"
					src="/enhance.png"
					alt="enhance"
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
			<Navbar activeID={3} role="teacher"/>
		</main>
	);
};

export default Page;
