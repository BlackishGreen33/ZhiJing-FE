import StudentChatHeader from "@/components/student/student-chat-header";
import SudentNavbar from "@/components/student/student-navbar";
import StudentChatInput from "@/components/student/student-chat-input";

const page = () => {
	return (
		<main>
			<StudentChatHeader />
			<div className="relative top-[10vh] flex justify-center">
				<p className="text-gray-400">哈哈，屁眼</p>
			</div>
			<StudentChatInput />
			<SudentNavbar activeID={1} />
		</main>
	);
};

export default page;
