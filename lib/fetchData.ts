import { CapacitorHttp } from '@capacitor/core';
// import { Preferences } from '@capacitor/preferences';

const preurl = 'https://zhijing.bigdust.space/api/v1';
// const token = Preferences.get({key: 'token'});

export async function postData(url = '', data = {}) {
  try {
    // if (!token) {
    // 	return;
    // }

    const response = await CapacitorHttp.post({
      url: preurl + url,
      headers: {
        'Content-Type': 'multipart/form-data',
        // "Authorization": token,
      },
      data: data,
    });

    return response.data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

// export async function getJson(url = "") {
// 	try {
// 		// if (!token) {
// 		// 	return;
// 		// }

// 		const response = await axios({
// 			method: "GET",
// 			url: preurl + url,
// 			headers: {
// 				"Content-Type": "application/json;charset=utf-8",
// 				// "Authorization": token,
// 			},
// 		});

// 		return response.data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// export async function putData(url = "", data = {}, method = "PUT") {
// 	try {
// 		// if (!token) {
// 		// 	return;
// 		// }

// 		const response = await axios({
// 			method: method,
// 			url: preurl + url,
// 			headers: {
// 				"Content-Type": "application/json;charset=utf-8",
// 				// "Authorization": token,
// 			},
// 			data: data,
// 		});

// 		return response.data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

export async function authPost(url = '', data = {}) {
  try {
    const response = await CapacitorHttp.post({
      url: preurl + url,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: data,
    });

    return response.data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export async function authGet(url = '', email: string) {
  try {
    const response = await CapacitorHttp.get({
      url: preurl + url,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: {
        email: email,
      },
    });

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
