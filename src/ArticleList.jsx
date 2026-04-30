import Articles from "./Article";

//main function
const ArticleLists=({posts})=>{
    return(
        <main className="list">
            {posts.map(post=>(        
                <Articles         
                    title={post.title}
                    content={post.content}
                />
            ))}               
        </main>
    )
}
export default ArticleLists;