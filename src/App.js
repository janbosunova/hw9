
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(res => res.json())
    .then(posts => {
      setPosts(posts);
    });
  }, [])
  return (
    <div className="App">
      <div className='All'>
      <Posts posts = {posts}/>
      </div>
    </div>
  );
}

export default App;

