const Article = ({ title, text, tags, image, alt }) => {
    return <div className="card">
        <h3 className="text-xl text-roxo-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full flex flex-row justify-end gap-2 pr-5 sm:flex">
            {
                tags.map(tag => <span key={tag}  className="bg-roxo-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-roxo-200 hover:scale-110" >{tag}</span>)
            }
        </div>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p key={index} className="text-roxo-200 dark:text-gray-400">{content}</p>)
            }   
        </div>
        { image && <img className="sm:p-4" src={image} />}
        { image && alt && <span className="sr-only">{alt}</span> }
    </div>
}

export default Article