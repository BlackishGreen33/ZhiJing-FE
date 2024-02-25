"use client";

import { useEffect } from "react";
import { Preferences } from "@capacitor/preferences";
import { useRouter } from "next/navigation";

const useTokenCheck = () => {
	const router = useRouter();

	useEffect(() => {
		const tokenChecked = async () => {
			const { value } = await Preferences.get({ key: "token" });
			const isToken = !!value;
			console.log(value);
			if (!isToken) router.push("/login");
		};

		tokenChecked();
	}, []);
};

export default useTokenCheck;
