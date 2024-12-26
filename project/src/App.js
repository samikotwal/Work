import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Anime Finder</h1>
      <p>Search and explore your favorite anime.</p>
      <Link to="/search" style={{ padding: "10px 20px", backgroundColor: "#6c63ff", color: "white", textDecoration: "none", borderRadius: "5px" }}>Go to Search</Link>
    </div>
  );
};

const AnimeSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeList, setAnimeList] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
      const data = await response.json();
      setAnimeList(data.data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Anime Search</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for an anime..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px" }}>Search</button>
      </div>
      <div>
        {animeList.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {animeList.map((anime) => (
              <li key={anime.mal_id} style={{ marginBottom: "20px" }}>
                <h3>{anime.title}</h3>
                <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: "150px" }} />
                <p>{anime.synopsis || "No synopsis available."}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No anime found. Try searching for something else!</p>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<AnimeSearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
