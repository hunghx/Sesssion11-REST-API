import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const data = { fullname: "hùng" };
  // useEffect(() => {
  //   //  post - thêm mới bản ghi
  //   fetch("http://localhost:8000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((dat) => {
  //       console.log("====================================");
  //       console.log(dat);
  //       console.log("====================================");
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  //  lấy dữ liệu về từ api
  // useEffect(() => {
  //   fetch("http://localhost:8000/users?username=hung&pass=12345678")
  //     .then((res) => res.json())
  //     .then((data1) => console.log(data1))
  //     .catch((err) => console.log(err));
  // }, []);

  // AXIOS
  //          GET
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/users")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  //          POST
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/users", {
  //       username: "hung12345",
  //       password: "12345678",
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  //       DELETE
  // useEffect(() => {
  //   axios
  //     .delete("http://localhost:8000/users/4")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  //      PUT/PATCH
  // useEffect(() => {
  //   axios
  //     .patch("http://localhost:8000/users/1", {
  //       username: "hungzzzzhhhhhxxxx",
  //       email: "h1@gmail.com",
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    let pro = new Promise((res, rej) => {
      // res(data);
      rej("Error");
    });
    pro.then((data) => console.log(data)).catch((err) => console.log(err));
  }, []);
  return <div className="App"></div>;
}

export default App;
