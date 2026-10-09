import Home from "./routes/home/home.jsx"
import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component
import Gallery from "./routes/gallery/Gallery.jsx";
import Words from "./routes/words/Words.jsx";
import Music from "./routes/music/Music.jsx";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/gallery' index element={<Gallery />} />
        <Route path='/words' element={<Words />} />
        <Route path='/music' element={<Music />} />
      </Route>
    </Routes>
  );
};

export default App;
