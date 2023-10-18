import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/HeroSection/Hero";
import { fetchNewAlbums, fetchTopAlbums } from "./apis/api";
import Section from "./components/common/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      throw error;
    }
  };
  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbums(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbums} type="album" title="Top Albums" />
        <Section data={newAlbums} type="album" title="New Albums" />
      </div>
    </>
  );
}

export default App;
