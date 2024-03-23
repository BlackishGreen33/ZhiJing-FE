"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import AuthForm from "@/components/auth/auth-form";

const page = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center relative">
			<Image
				className="absolute top-[5vh] w-[20vh] h-[20vh]"
				src="/logo.png"
				alt="logo"
				width={200}
				height={200}
			/>
			<p className="absolute top-[30vh] font-bold text-[4vh]">欢迎来到</p>
			<p className="absolute top-[35vh] font-bold text-[5vh] text-[#327cc6]">
				知境
			</p>
			<AuthForm className="top-[45vh]" isLogin={true} />
			<p className="absolute top-[93vh] text-sm">想尝试一下我们的服务？</p>
			<Button
				className="absolute top-[95vh]"
				variant="link"
				size="default"
				onClick={() => {
					router.push("/register");
				}}
			>
				<p className="text-sm text-[#327cc6] decoration-dashed">好呀！</p>
			</Button>
		</div>
	);
};

export default page;
