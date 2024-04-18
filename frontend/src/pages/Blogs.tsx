/* eslint-disable @typescript-eslint/no-unused-vars */
import { Appbar } from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading , blogs} = useBlogs();
    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                    <BlogsSkeleton/>
                    <BlogsSkeleton/>
                    <BlogsSkeleton/>
                    <BlogsSkeleton/>
                    <BlogsSkeleton/>
                    <BlogsSkeleton/>
                </div>
            </div>
        </div>
    }
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog  => <BlogCard
                id = {blog.id}
                authorName = {blog.author.name || "Anonymous"}
                title ={blog.title}
                content = {blog.content}
                publishedDate = {"17th April 2024"}/>)}
            </div>
        </div>
    </div>
  )
}

