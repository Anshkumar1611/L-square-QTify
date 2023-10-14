import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/HeroSection/Hero";
import { fetchTopAlbums } from "./apis/api";
import Card from "./components/common/Card/Card";
import CategoryHeading from "./components/common/CategoryHeading/CategoryHeading";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    generateTopAlbums();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <CategoryHeading children="Top Albums" />
        {topAlbums?.map((album) => (
          <Card data={album} type="album" key={album.id} />
        ))}
      </div>
    </>
  );
}

export default App;
