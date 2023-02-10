import BlogList from './BlogList';
import useFetch from './useFetch';

// new comment again
const Home = () => {
    //custom hook
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;
