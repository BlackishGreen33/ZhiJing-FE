import Link from "next/link";

import { motion } from "framer-motion";

type ConsultingSubjectsProps = {
	purpose: "student" | "teacher";
};

const ConsultingSubjects: React.FC<ConsultingSubjectsProps> = ({ purpose }) => {
	return (
		<>
			<div className="relative top-[10vh] flex justify-center">
				<p className="text-gray-400">选择咨询科目</p>
			</div>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[11vh]">
				<motion.div
					className="bg-blue-500 rounded-lg"
					whileTap={{ scale: [0.9, 1.2, 1] }}
				>
					<Link
						href={`/${purpose}/dialogue/chat`}
						className="w-full h-full flex justify-center items-center"
					>
						<div className="font-bold">数学</div>
					</Link>
				</motion.div>
				<motion.div
					className="bg-red-500 rounded-lg"
					whileTap={{ scale: [0.9, 1.2, 1] }}
				>
					<Link
						href={`/${purpose}/dialogue/chat`}
						className="w-full h-full flex justify-center items-center"
					>
						<div className="font-bold">语文</div>
					</Link>
				</motion.div>
				<motion.div
					className="bg-yellow-500 rounded-lg"
					whileTap={{ scale: [0.9, 1.2, 1] }}
				>
					<Link
						href={`/${purpose}/dialogue/chat`}
						className="w-full h-full flex justify-center items-center"
					>
						<div className="font-bold">历史</div>
					</Link>
				</motion.div>
				<motion.div
					className="bg-orange-500 rounded-lg"
					whileTap={{ scale: [0.9, 1.2, 1] }}
				>
					<Link
						href={`/${purpose}/dialogue/chat`}
						className="w-full h-full flex justify-center items-center"
					>
						<div className="font-bold">物理</div>
					</Link>
				</motion.div>
			</div>
		</>
	);
};

export default ConsultingSubjects;
