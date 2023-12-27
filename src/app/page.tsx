"use client"
import { Button } from "@nextui-org/react"
import { Posts } from "../types/interfaces";
import useAxiosAuth from "../lib/hooks/useAxiosAuth";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const fetchPosts = async () => {
    const axiosAuth = useAxiosAuth();
    const res = await axiosAuth.get("/api/posts");
    setPosts(res.data.content)
  }
  return (
    <div>
      <Button onClick={() => fetchPosts()}>Fetch Post</Button>
      {posts.length > 0 && JSON.stringify(posts)}
    </div>
  )
}
