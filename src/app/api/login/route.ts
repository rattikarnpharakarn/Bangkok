import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try{

  }catch(err){

  }
  const data = await req.json();
    const res = await axios.post(`http://localhost:3000/suggest-system-api/api/v1/auth/login`, {
        username: data.username,
        password: data.password
      })
      // console.log(res, 'p')
      // .then(function (response) {
      //   return response
      // })
      // .catch(function (error) {
      //   console.log(error, 'err');
      // });
    // your logic
  }
  