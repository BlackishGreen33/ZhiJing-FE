"use client";

import { NextPage } from "next";

import useTokenCheck from "@/hooks/use-token-checked";

import Header from "@/components/main-header";
import Navbar from "@/components/navbar";
import ConsultingSubjects from "@/components/consulting-subjects";

const Page: NextPage = () => {
	useTokenCheck();

	return (
		<main>
			<Header />
			<ConsultingSubjects purpose="teacher" />
			<Navbar activeID={1} role="teacher"/>
		</main>
	);
};

export default Page;
