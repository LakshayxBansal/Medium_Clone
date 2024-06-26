import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName : string;
    title: string;
    id: number;
    content : string;
    publishedDate : string
}

const BlogCard = ({authorName ,id, title , content , publishedDate} : BlogCardProps) => {
    
  return <Link to={`/blog/${id}`}> 
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex">
                    <Avatar size="small" name={authorName}/>
                </div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pr-1 pl-2">
                    <Circle/>
                </div>
                <div className="pl-1 font-thin flex justify-center flex-col text-slate-400 text-sm">
                    {publishedDate}
                </div>
            </div>


            <div className="text-xl font-semibold pt-2">
                {title}
            </div>

            <div className="text-md font-thin">
                {content.slice(0,100)+ "...."}
            </div>

            <div className=" text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
        </div>
  </Link>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-black"></div>
}

export  function Avatar({name , size= "small"} : {name:string , size?: "small" | "big"}){
    return (

    <div>
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>{name[0]}</span>
        </div>
    </div>

    )
}

export default BlogCard
