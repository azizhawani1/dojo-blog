import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Jojo Blog</h1>
            <div className="links">
                {/*<a href="/">Home</a>*/}
                {/* how to put the style as object in jsx*/}
                {/*<a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*/}
                {/*<a href="/create">New Blog</a>*/}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>

    );
}

export default Navbar;