const Articles=({title,content})=>{
    return(
        <article className="article">
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}
export default Articles;