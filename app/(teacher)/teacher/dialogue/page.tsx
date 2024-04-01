"use client";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import TeacherNavbar from "@/components/teacher/teacher-navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

export default function Home() {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="teacher" />
			<TeacherNavbar activeID={1} />
		</main>
	);
}
