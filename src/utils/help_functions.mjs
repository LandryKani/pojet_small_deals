import config from "./config.json";
// import { useEffect } from "react";

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${config.token}`);

export async function fetch_get(url, action) {
  const options = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    action(data);
  } catch (e) {
    console.log(e);
  }
}
export async function fetch_post(url, datas = {}, action) {
  const options = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: datas
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log("erreur",data)
    action(data);
  } catch (e) {
    console.log(e);
  }
}
