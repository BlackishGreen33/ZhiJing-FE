"use client";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import SudentNavbar from "@/components/student/student-navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

export default function Home() {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="student" />
			<SudentNavbar activeID={1} />
		</main>
	);
}
