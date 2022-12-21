import React from 'react';
import Navbar from './Components/Reuseable/Navbar';
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Library from './Pages/Library';
import PodcastDetail from './Pages/PodcastDetail';
function App() {
  return (
   <div>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/podcast/:id" element={<PodcastDetail />} />
    </Routes>
   </div>
  );
}

export default App;
