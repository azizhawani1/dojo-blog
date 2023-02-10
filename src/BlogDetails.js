import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const [isPendingDeletion, setIsPendingDeletion] = useState(false);


    const handeClick = (e) => {

        e.preventDefault();

        setIsPendingDeletion(true);

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            setIsPendingDeletion(false);
            navigate('/dojo-blog/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                {!isPendingDeletion && <button onClick={handeClick}>Delete</button>}
                {isPendingDeletion && <button disabled>Deletion in progress ...</button>}
            </article>}
        </div>
    );
}

export default BlogDetails;