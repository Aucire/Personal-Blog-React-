import { useState } from "react";
import Heading from "./Header";
import About from "./About";
import ArticleLists from "./ArticleList";

// Main function that reneders all other .jsx files
const App=()=>{

    //variables for title, name
    const [title , setTitle]=useState("A BLOG ON FRONT-END WEB-DEVELOPMENT")
    const [username, setUsername]=useState("James Osire")
    
    //variable for the posts
    const posts=[
        {
            id:1,
            title:"THE HYPER TEXT MARK-UP LANGUAGE",
            content:"HTML is the foundational markup language that semantically structures and hierarchically organizes digital content and interactive web experiences.",
        },
        {
            id:2,
            title:"THE CASCADING STYLE SHEETS",
            content:"CSS is a declarative styling language that meticulously orchestrates the visual presentation, spatial layout,and adaptive rendering across diverse devices and screen contexts.",
        },
        {
            id:3,
            title:"THE VANILLA JAVASCRIPT",
            content:"JavaScript is a high-level, event-driven programming language that dynamicallyorchestrates logic, interactivity, and asynchronous operations within web environments, enabling real-time manipulation of the DOM",
        }]

    return(
        <div>
            <Heading
                title={title}
            />
            <About
                name={username}
            />
            <ArticleLists 
                posts={posts}
            />
        </div>
    )
}
export default App;