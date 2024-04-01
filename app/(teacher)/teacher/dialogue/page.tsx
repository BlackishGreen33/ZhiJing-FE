"use client";

import { NextPage } from "next";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import TeacherNavbar from "@/components/teacher/teacher-navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

const Page: NextPage = () => {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="teacher" />
			<TeacherNavbar activeID={1} />
		</main>
	);
};

export default Page;
