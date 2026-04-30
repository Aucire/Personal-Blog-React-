const Articles=({title,details,content})=>{
    return(
        <article className="article">
            <h2>{title}</h2>
            <h3>{details}</h3>
            <p>{content}</p>
        </article>
    )
}
export default Articles;