import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const data = await req.json();
  // console.log(data, 'uuuuuuuuuu');
    // const { username, password } = req.body;
    // console.log(username, 'username')
    // console.log(password, 'password')

    const res = await axios.post(`http://localhost:3000/suggest-system-api/api/v1/users`, {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        confirmPassword: data.confirmPassword,
      })
    //   console.log(res, 'p')
      // .then(function (response) {
      //   return response
      // })
      // .catch(function (error) {
      //   console.log(error, 'err');
      // });
    // your logic
  }
  