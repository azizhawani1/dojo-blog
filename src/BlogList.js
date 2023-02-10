import { Link } from "react-router-dom";

//list of blogs
const BlogList = ({ blogs, title, handeDelete}) => {
    // USE OF PROPS = data from parent component : more reusable
    //const blogs = props.blogs;
    //const title = props.title;

    //destructuring (not take all props object as argument but only a few properties)

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={'/dojo-blog/blogs/' + blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;