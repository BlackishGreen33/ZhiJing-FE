import { Button } from "@/components/ui/button";

const StudentChatFuction = () => {
	return (
		<div className="w-full h-[5vh] fixed bottom-[15.5vh] flex flex-col">
			<div className="w-full h-[0.1vh] bg-gray-700"></div>
			<div className="w-full h-[4.5vh] flex items-center">
				<Button
					className="absolute border-0 w-[20%] h-[3vh] p-0 left-[3%]"
					variant="default"
					size="sm"
				>
					相似题目
				</Button>
			</div>
		</div>
	);
};

export default StudentChatFuction;
