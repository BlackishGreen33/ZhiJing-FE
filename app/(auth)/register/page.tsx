"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import AuthForm from "@/components/auth/auth-form";

const page = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center relative">
			<p className="absolute top-[15vh] font-bold text-[4vh]">注册新账户</p>
			<AuthForm className="top-[25vh]" isLogin={false} />
			<p className="absolute top-[93vh] text-sm">您已经有账号了？</p>
			<Button
				className="absolute top-[95vh]"
				variant="link"
				size="default"
				onClick={() => {
					router.push("/login");
				}}
			>
				<p className="text-sm text-[#327cc6] decoration-dashed">
					事不宜迟尽快登录！
				</p>
			</Button>
		</div>
	);
};

export default page;
