"use server"

import { cookies } from "next/headers"


export async function setRandomCookie(){
    cookies().set("random", Math.random().toString())
    return;
}