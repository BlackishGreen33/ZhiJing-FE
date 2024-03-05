"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Eye, EyeOff } from "lucide-react";

const page = () => {
	const [showPass, setShowPass] = useState(false);

	return (
		<div className="flex flex-col items-center relative">
			<Image
				className="absolute top-[5vh] w-[20vh] h-[20vh]"
				src="/icon.png"
				alt="logo"
				width={200}
				height={200}
			/>
			<p className="absolute top-[30vh] font-bold text-[4vh]">欢迎来到</p>
			<p className="absolute top-[35vh] font-bold text-[5vh] text-[#327cc6]">
				知境
			</p>
			<div className="absolute top-[45vh] grid w-[80%] items-center gap-2">
				<div className="gap-1.5">
					<Label htmlFor="email" className="text-base">
						电子邮箱
					</Label>
					<div className="bg-gray-800 flex gap-1 justify-center items-center rounded h-[5.3vh]">
						<Input
							type="email"
							id="email"
							placeholder="请输入电子邮箱"
							className="bg-transparent w-[85%] h-[5.3vh] outline-none border-none"
						/>
						<Mail className="bg-transparent w-[15%]" />
					</div>
				</div>
				<div className="gap-1.5">
					<Label htmlFor="password" className="text-base">
						密码
					</Label>
					<div className="bg-gray-800 flex gap-1 justify-center items-center rounded h-[5.3vh]">
						<Input
							type={showPass ? "text" : "password"}
							id="password"
							placeholder="请输入密码"
							className="bg-transparent w-[85%] h-[5.3vh] outline-none border-none"
						/>
						<Button
							className="bg-transparent border-0 w-[15%]"
							variant={null}
							size="icon"
							onClick={() => setShowPass(!showPass)}
						>
							{showPass ? <EyeOff /> : <Eye />}
						</Button>
					</div>
				</div>
			</div>
			<Button
				className="absolute top-[67vh] w-[50%] h-[6vh] rounded-[5vh]"
				variant="default"
				size="default"
			>
				<p className="text-base">登录</p>
			</Button>
			<Button className="absolute top-[73vh]" variant="link" size="default">
				<p className="text-sm">人家忘记密码了 耶嘿</p>
			</Button>
			<p className="absolute top-[93vh] text-sm">想尝试一下我们的服务？</p>
			<Button className="absolute top-[95vh]" variant="link" size="default">
				<p className="text-sm text-[#327cc6] decoration-dashed">是的</p>
			</Button>
		</div>
	);
};

export default page;
