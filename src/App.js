import axios from "./axios";
import { useEffect, useState } from "react";
import "./App.css";
import Vedio from "./components/Vedio";

function App() {
  const [vedios, setVedios] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVedios(response.data);
    }
    fetchPosts();
  }, []);
  return (
    // we sre using bem naming convensition
    <div className="app">
      <div className="app__vedios">
        {vedios.map((vedio) => (
          <Vedio
            key={vedio.url}
            url={vedio.url}
            channel={vedio.channel}
            descreption={vedio.description}
            song={vedio.song}
            likes={vedio.likes}
            comments={vedio.comments}
            shares={vedio.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
