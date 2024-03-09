"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "@capacitor/toast";

import { User, Mail, Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { authGet } from "@/lib/fetchData";

<InputOTP
	maxLength={6}
	pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
	render={({ slots }) => (
		<InputOTPGroup>
			{slots.map((slot, index) => (
				<InputOTPSlot key={index} {...slot} />
			))}{" "}
		</InputOTPGroup>
	)}
/>;

import { postData } from "@/lib/fetchData";

const page = () => {
	const [showPass, setShowPass] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [code, setCode] = useState("");
	const [username, setUsername] = useState("");
	const [role, setRole] = useState("");

	const router = useRouter();

	const handleRegister = () => {
		const user = {
			email: email,
			password: password,
			code: code,
			username: username,
			role: role,
		};

		if (!email) {
			Toast.show({
				text: "邮箱不能为空！",
				duration: "short",
				position: "top",
			});
			if (!password) {
				Toast.show({
					text: "密码不能为空！",
					duration: "short",
					position: "top",
				});
				return;
			}
			return;
		}

		const testEmail =
			/^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
		const isEmail = testEmail.test(email);

		if (!isEmail) {
			Toast.show({
				text: "请输入正确的邮箱格式",
				duration: "short",
				position: "top",
			});
			return;
		}

		postData("/api/v1/auth/register", user).then((res) => {
			router.push("/login");
		});
	};

	return (
		<div className="flex flex-col items-center relative">
			<p className="absolute top-[15vh] font-bold text-[4vh]">注册新账户</p>
			<div className="absolute top-[25vh] grid w-[80%] items-center gap-2">
				<div className="gap-1.5">
					<Label htmlFor="username" className="text-base">
						用户名称
					</Label>
					<div className="bg-gray-800 flex gap-1 justify-center items-center rounded h-[5.3vh]">
						<Input
							type="username"
							id="username"
							placeholder="请输入用户名称"
							className="bg-transparent w-[85%] h-[5.3vh] outline-none border-none"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
						<User className="bg-transparent w-[15%]" />
					</div>
				</div>
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
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
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
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
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
				<div className="gap-1.5">
					<Label htmlFor="code" className="text-base">
						验证码
					</Label>
					<div className="bg-gray-800 flex gap-1 justify-center items-center rounded h-[5.3vh]">
						<InputOTP
							maxLength={6}
							pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
							render={({ slots }) => (
								<InputOTPGroup>
									{slots.map((slot, index) => (
										<InputOTPSlot
											key={index}
											{...slot}
											className="w-8 h-[5.3vh]"
										/>
									))}{" "}
								</InputOTPGroup>
							)}
							className="w-[65%]"
							value={code}
							onChange={(e) => {
								setCode(e);
							}}
						/>
						<Button
							className="bg-transparent border-0 w-[35%] px-0"
							variant={null}
							size="default"
							onClick={() => {}}
						>
							发送验证信
						</Button>
					</div>
				</div>
				<div className="gap-1.5">
					<Label htmlFor="role" className="text-base">
						用户类型
					</Label>
					<div className="bg-gray-800 flex gap-1 justify-center items-center rounded h-[5.3vh]">
						<Select
							onValueChange={(e) => {
								setRole(e);
							}}
						>
							<SelectTrigger className="bg-transparent w-full h-[5.3vh]">
								<SelectValue placeholder="请选择用户类型" />
							</SelectTrigger>
							<SelectContent className="bg-gray-800">
								<SelectItem value="1">学生</SelectItem>
								<SelectItem value="2">老师</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
			<Button
				className="absolute top-[75vh] w-[50%] h-[6vh] rounded-[5vh]"
				variant="default"
				size="default"
				onClick={handleRegister}
			>
				<p className="text-base">注册</p>
			</Button>
			<div className="absolute top-[82vh] flex justify-center items-center">
				<p className="text-sm">注册视为同意</p>
				<Button className="p-0" variant="link" size="default">
					<p className="text-sm text-[#327cc6]">《知境APP隐私条例》</p>
				</Button>
				<p className="text-sm">内所有内容</p>
			</div>
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
