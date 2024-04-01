"use client";

import { NextPage } from "next";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import SudentNavbar from "@/components/student/student-navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

const HomePage: NextPage = () => {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="student" />
			<SudentNavbar activeID={1} />
		</main>
	);
};

export default HomePage;
