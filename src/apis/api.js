import { instance } from './axiosInstance';

export async function getMessages(id) {
  try {
    const response = await instance.get(`6-6/recipients/${id}/messages/`);
    return response.data.results;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function getRecipient(id) {
  try {
    const response = await instance.get(`6-6/recipients/${id}/`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

// 편지 쓴 사람 몇명인지 체크할 때 사용하세요~
export async function getCommenterCount() {
  try {
    const response = await instance.get(`6-6/recipients/`);
    return response.data;
  } catch (e) {
    console.error(`error : ${e}`);
  }
}

export async function postMessage(formData) {
  console.log('formData:', formData);
  try {
    const response = await instance.post(`6-6/recipients/`, formData);
    return response.data;
  } catch (error) {
    console.error(`error : ${error}`);
  }
}
