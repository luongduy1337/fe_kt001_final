"use client"
import { Button } from "@nextui-org/react"
import { Posts } from "../types/interfaces";
import useAxiosAuth from "../lib/hooks/useAxiosAuth";
import { useState } from "react";
import { Banner } from "@/components/Banner/Banner";
import { IntroductionCompany } from "@/components/Introduction/IntroductionCompany";
import { Statistics } from "@/components/Statistics/Statistics";

export default function HomePage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const axiosAuth = useAxiosAuth();
  const fetchPosts = async () => {
    const res = await axiosAuth.get("/api/posts");
    setPosts(res.data.content)
  }
  return (
    <div>
      <Banner/>
      <IntroductionCompany/>
      <Statistics/>
    </div>
  )
}
