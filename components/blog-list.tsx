"use client";
import { useEffect, useState } from "react";
import { BlogComponent } from "./blog-component";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [responseTime, setResponseTime] = useState('0ms');

  const getBlogs = async () => {
    const response: any = await fetch(`/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

    if (response.status) {
      setBlogs(response.data.blogs);
      setCount(response.data.total);
      setResponseTime(response.responseTime);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="mb-8">
      <div className="container mx-auto px-4 lg:px-0 lg:w-[60%]">
        <input
          className="input-search w-full mb-[1.5rem]"
          type="text"
          placeholder="Search blog by title"
        />
        <div className="flex items-center justify-between mb-[5rem]">
          <div>
            <span>Total: </span>
            <span>{count}</span>
          </div>
          <div>
            <span>Response Time: </span>
            <span>{responseTime}</span>
          </div>
        </div>
        <div className="blog-list">
          {blogs?.map((item: any, index: number) => {
            return <BlogComponent data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
