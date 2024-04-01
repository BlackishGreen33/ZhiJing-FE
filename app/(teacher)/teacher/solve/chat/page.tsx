"use client";

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

import SubpageHeader from "@/components/subpage-header";
import Navbar from "@/components/navbar";
import ChatInput from "@/components/chat/chat-input";
import { UserMessage, ZJMessage } from "@/components/chat/chat-message";
import { Label } from "@/components/ui/label";

const messageContainerStyle: React.CSSProperties = {
	wordBreak: "break-all",
	wordWrap: "break-word",
	whiteSpace: "normal",
};

const Page: NextPage = () => {
	const searchParams = useSearchParams();

	const title = searchParams.get("title") || "";

	const question =
		"因为这样这样，所以那样那样，又因为这样这样，所以那样那样。请问如果这样这样的话，会那样那样吗？";

	const messages = [
		{
			id: 1,
			content:
				"其实是这样的，这样那样的话就会那样那样，所以根据 ggbond 定理，就能推导出这样的结论。",
			role: "老师",
		},
		{
			id: 2,
			content: "那老师，如果这样这样那样那样的话，还能得到类似的结果吗？",
			role: "你",
		},
		{
			id: 3,
			content: "还有在那样那样的情况也能使用 ggbond 定理吗？",
			role: "你",
		},
		{
			id: 4,
			content:
				"是的，在这样这样的情况下，ggbond 定理也能得到类似的结果。汝子可教也！",
			role: "老师",
		},
	];

	return (
		<main>
			<SubpageHeader backUrl="/teacher/solve" title={title} purpose="solve" />
			<div className="w-full h-[72vh] relative top-[10vh] flex flex-col items-center gap-[2vh] overflow-scroll">
				<div className="w-[90%] bg-neutral-900 p-[4%] flex flex-col gap-[2vh] rounded-xl">
					<Label htmlFor="message-2">题目：</Label>
					<div
						className="max-w-full h-auto p-3 rounded-lg bg-neutral-800"
						style={messageContainerStyle}
					>
						{question}
					</div>
				</div>
				<div className="w-full flex flex-col gap-[2vh] px-[5%]">
					{messages.map((item) =>
						item.role === "老师" ? (
							<UserMessage key={item.id} content={item.content} />
						) : (
							<ZJMessage key={item.id} content={item.content} />
						)
					)}
				</div>
			</div>
			<ChatInput purpose="answer" />
			<Navbar activeID={2} role="teacher"/>
		</main>
	);
};

export default Page;
