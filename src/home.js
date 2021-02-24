import {useState} from "react";
import Bloglist from './Bloglist';

const Home = () => {
  const [blogs, setBlogs] = useState([
      {title: 'My new website', body:'lorem ipusm....',author:'mario', id: 1},
      {title: 'Welcome party', body:'lorem ipusm....',author:'moses', id: 2},
      {title: 'Web dev top tips', body:'lorem ipusm....',author:'obike', id: 3}
  ]);

    return ( 
        <div className ="home">
          <Bloglist blogs={blogs}  title = "All blogs"/>
        </div>
     );
};
 
export default Home;