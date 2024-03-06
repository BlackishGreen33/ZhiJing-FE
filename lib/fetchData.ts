import axios from "axios";

const preurl = "https://zhijing.bigdust.space/api/v1";
// const token = localStorage.getItem("token");

export async function postData(url = "", data = {}, method = "POST") {
	try {
		// if (!token) {
		// 	return;
		// }

		const response = await axios({
			method: method,
			url: preurl + url,
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				// "Authorization": token,
				// withCredentials: true,
			},
			data: data,
		});

		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getJson(url = "") {
	try {
		// if (!token) {
		// 	return;
		// }

		const response = await axios({
			method: "GET",
			url: preurl + url,
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				// "Authorization": token,
				"Access-Control-Allow-Origin": "http://localhost:3000",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});

		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function putData(url = "", data = {}, method = "PUT") {
	try {
		// if (!token) {
		// 	return;
		// }

		const response = await axios({
			method: method,
			url: preurl + url,
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				// "Authorization": token,
				"Access-Control-Allow-Origin": "http://localhost:3000",
				"Access-Control-Allow-Methods": "PUT",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
			data: data,
		});

		return response.data;
	} catch (error) {
		console.error(error);
	}
}
