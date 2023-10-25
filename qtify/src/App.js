import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/HeroSection/Hero";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./apis/api";
import Section from "./components/common/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  // const [newAlbums, setNewAlbums] = useState([]);
  // const [allSongs, setAllSongs] = useState([]);
  // const [filteredSongs, setFilteredSongs] = useState([]);
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      throw error;
    }
  };
  // const generateNewAlbums = async () => {
  //   try {
  //     const data = await fetchNewAlbums();
  //     setNewAlbums(data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const generateAllSongs = async () => {
  //   try {
  //     const data = await fetchSongs();
  //     setAllSongs(data);
  //     setFilteredSongs(data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const generateFilterData = (value) => {
  //   let key = "";
  //   if (value === 0) {
  //     setFilteredSongs(allSongs);
  //     return;
  //   }
  //   if (value === 1) {
  //     key = "rock";
  //   }
  //   if (value === 2) {
  //     key = "pop";
  //   }
  //   if (value === 3) {
  //     key = "jazz";
  //   }
  //   if (value === 4) {
  //     key = "blues";
  //   }
  //   let updatedData = allSongs.filter((item) => item.genre.key === key);
  //   setFilteredSongs(updatedData);
  //   console.log(filteredSongs);
  // };
  useEffect(() => {
    generateTopAlbums();
    // generateNewAlbums();
    // generateAllSongs();
  }, []);

  // useEffect(() => {
  //   generateFilterData(value);
  // }, [value]);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="wrapper">
        <Section data={topAlbums} type="album" title="Top Albums" />
      </div>
      {/* <div className="wrapper">
        <Section data={newAlbums} type="album" title="New Albums" />
      </div>
      <div className="section">
        <div className="wrapper">
          <Section
            data={filteredSongs}
            type="songs"
            title="Songs"
            value={value}
            handleChange={handleChange}
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
