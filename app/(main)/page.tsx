"use client";

import { NextPage } from "next";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import Navbar from "@/components/navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

const HomePage: NextPage = () => {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="student" />
			<Navbar activeID={1} role="student"/>
		</main>
	);
};

export default HomePage;
