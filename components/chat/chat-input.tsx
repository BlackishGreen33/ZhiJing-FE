import { FolderPlus, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ChatInputProps = {
	purpose: "dialogue" | "solve" | "answer";
};

const ChatInput: React.FC<ChatInputProps> = ({ purpose }) => {
	return (
		<div className="w-full h-[8vh] fixed bottom-[8vh] flex flex-col">
			<div className="w-full h-[0.1vh] bg-gray-700"></div>
			<div className="w-full h-[7.9vh] flex items-center">
				<div className="absolute left-[5%]">
					<Button
						className="bg-transparent border-0"
						variant="outline"
						size="icon"
					>
						<FolderPlus />
					</Button>
				</div>
				<div className="w-[63%] absolute left-[18%]">
					{purpose === "dialogue" ? (
						<Input placeholder="与 知境 机器人对话" />
					) : purpose === "answer" ? (
						<Input placeholder="与 学生 对话" />
					) : (
						<Input placeholder="与 老师 对话" />
					)}
				</div>
				<div className="absolute right-[5%]">
					<Button className="border-0" variant="default" size="icon">
						<SendHorizonal />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChatInput;
