import { Share, ThumbsUp, ThumbsDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type MessageProps = {
	content: string;
	isLatest?: boolean;
};

const messageContainerStyle: React.CSSProperties = {
	wordBreak: "break-all",
	wordWrap: "break-word",
	whiteSpace: "normal",
};

export const ZJMessage: React.FC<MessageProps> = ({ content, isLatest }) => {
	return (
		<div className="w-full flex flex-col gap-[1vh]">
			<div className="flex gap-[3%]">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="知境" />
					<AvatarFallback>ZJ</AvatarFallback>
				</Avatar>
				<div
					className="bg-gray-800 max-w-full h-auto p-3 rounded-lg"
					style={messageContainerStyle}
				>
					{content}
				</div>
			</div>
			{isLatest && (
				<div className="flex gap-[3%]">
					<Button
						className="border-0 w-[20%] h-[4vh] p-0 bg-[#327cc6] rounded-2xl"
						variant="default"
						size="icon"
					>
						<Share className="h-[2vh]" />
						<p>分享</p>
					</Button>
					<Button
						className="w-[4vh] h-[4vh] p-0 rounded-full"
						variant="outline"
						size="icon"
					>
						<ThumbsUp className="h-[2vh]" />
					</Button>
					<Button
						className="w-[4vh] h-[4vh] p-0 rounded-full"
						variant="outline"
						size="icon"
					>
						<ThumbsDown className="h-[2vh]" />
					</Button>
				</div>
			)}
		</div>
	);
};

export const UserMessage: React.FC<MessageProps> = ({ content }) => {
	return (
		<div className="w-full flex flex-col gap-[1vh]">
			<div className="flex gap-[3%]">
				<div
					className="bg-gray-800 max-w-full h-auto p-3 ml-auto rounded-lg"
					style={messageContainerStyle}
				>
					{content}
				</div>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="知境" />
					<AvatarFallback>你</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};
