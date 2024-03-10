"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Preferences } from "@capacitor/preferences";
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

import { authPost, authGet } from "@/lib/fetchData";
import { cn } from "@/lib/utils";

type AuthFormProps = {
	className?: string;
	isLogin: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ className, isLogin }) => {
	const [showPass, setShowPass] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [code, setCode] = useState("");
	const [username, setUsername] = useState("");
	const [role, setRole] = useState("");

	const router = useRouter();

	const showToast = (text: string) => {
		Toast.show({
			text,
			duration: "short",
			position: "top",
		});
	};

	const validateEmail = () => {
		const testEmail =
			/^[\w!#$%&'*+/=?`{|}~^-]+(\.[\w!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
		return testEmail.test(email);
	};

	const validateForm = () => {
		if (!email) {
			showToast("邮箱不能为空！");
			return false;
		}
		if (!password) {
			showToast("密码不能为空！");
			return false;
		}
		if (!validateEmail()) {
			showToast("请输入有效的邮箱");
			return false;
		}
		return true;
	};

	const handleLogin = async () => {
		if (!validateForm()) {
			return;
		}

		const user = {
			email,
			password,
		};

		try {
			const res = await authPost("/auth/login", user);
			const token = res.token;
			Preferences.set({
				key: "token",
				value: token,
			});
			router.push("/");
		} catch (error) {
			showToast("登录失败");
		}
	};

	const handleRegister = async () => {
		if (!validateForm()) {
			return;
		}

		const user = {
			email,
			password,
			code,
			username,
			role,
		};

		try {
			await authPost("/auth/register", user);
			router.push("/login");
		} catch (error) {
			showToast("注册失败");
		}
	};

	const hadleVerify = async () => {
		try {
			await authGet("/auth/email_code", email);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div
			className={cn(
				"absolute w-full flex flex-col items-center gap-10",
				className
			)}
		>
			<div className="grid items-center gap-2 w-[80%]">
				{!isLogin && (
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
				)}
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
				{!isLogin && (
					<>
						<div className="gap-1.5">
							<Label htmlFor="code" className="text-base">
								验证码
							</Label>
							<div className="bg-transparent flex gap-1 justify-center items-center rounded h-[5.3vh]">
								<InputOTP
									maxLength={6}
									pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
									render={({ slots }) => (
										<InputOTPGroup>
											{slots.map((slot, index) => (
												<InputOTPSlot
													key={index}
													{...slot}
													className="w-8 h-[5.3vh] border-gray-600"
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
									className="bg-gray-800 border-0 w-[35%] px-0"
									variant={null}
									size="default"
									onClick={hadleVerify}
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
					</>
				)}
			</div>
			<div className="flex flex-col items-center w-full">
				<Button
					className="w-[50%] h-[6vh] rounded-[5vh]"
					variant="default"
					size="default"
					onClick={isLogin ? handleLogin : handleRegister}
				>
					<p className="text-base">{isLogin ? "登录" : "注册"}</p>
				</Button>
				{isLogin ? (
					<Button variant="link" size="default">
						<p className="text-sm">人家忘记密码了 耶嘿</p>
					</Button>
				) : (
					<div className="flex justify-center items-center">
						<p className="text-sm">注册视为同意</p>
						<Button className="p-0" variant="link" size="default">
							<p className="text-sm text-[#327cc6]">《知境APP隐私条例》</p>
						</Button>
						<p className="text-sm">内所有内容</p>
					</div>
				)}
			</div>
		</div>
	);
};
export default AuthForm;
