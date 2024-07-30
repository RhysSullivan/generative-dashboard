"use client"

import { useEffect } from "react";
import { setRandomCookie } from "./action";

export function Fetcher(){
    // every 5 seconds call set cookie
    useEffect(() => {
        const interval = setInterval(() => {
            setRandomCookie()
        }, 5000);
        return () => clearInterval(interval);
    }
    , []);
    return null
}