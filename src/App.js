import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import ZunkZoo from './ZunkZoo';

//new comment
// root component
function App() {
    return (
      <Router>
        <div className="App">
            {/* Self closing tag */} 
            <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/dojo-blog/zunkzoo" element={<ZunkZoo />} />
                        <Route exact path="/dojo-blog/" element={<Home />} />
                        <Route path="/dojo-blog/create" element={<Create />} />
                        <Route path="/dojo-blog/blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;