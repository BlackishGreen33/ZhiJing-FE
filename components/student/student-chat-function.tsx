"use client";

import SimilarQuestions from "@/components/function-button/similar-questions";

const StudentChatFunction = () => {
	return (
		<div className="w-full h-[5vh] fixed bottom-[15.5vh] flex flex-col">
			<div className="w-full h-[0.1vh] bg-gray-700"></div>
			<SimilarQuestions />
		</div>
	);
};

export default StudentChatFunction;
