import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(req){
  console.log(req,'in')
    const { username, password } = req.body;
    console.log(username, 'username')
    console.log(password, 'password')

    await axios.post(`http://localhost:3000/suggest-system-api/api/v1/auth/login`, {
        usrename: username,
        password: password
      })
      .then(function (response) {
        console.log(response, 'response');
      })
      .catch(function (error) {
        console.log(error);
      });
    // your logic
  }
  