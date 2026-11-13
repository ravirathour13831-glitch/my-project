
import React, { useState } from "react";
import axios from "axios";

function Video() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("love");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // API CALL FUNCTION
  const fetchVideos = async (query) => {
    if (!query.trim()) {
      setError("Please enter song name!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setHasSearched(true);
      setVideos([]);

      const response = await axios.get(
        "https://itunes.apple.com/search",
        {
          params: {
            term: query,
            entity: "song",
            country: "IN",
            limit: 20,
          },
          timeout: 15000,
        }
      );

      console.log("API DATA:", response.data);

      const songs = response.data.results || [];

      setVideos(songs);

      if (songs.length === 0) {
        setError("No songs found!");
      }

    } catch (err) {
      console.log("API ERROR:", err);

      setError(
        err.response
          ? `Server Error: ${err.response.status}`
          : `Network/CORS Error: ${err.message}`
      );

    } finally {
      setLoading(false);
    }
  };

  // SEARCH BUTTON
  const handleSearch = (e) => {
    e.preventDefault();
    fetchVideos(search);
  };

  return (
    <div style={styles.container}>

      <style>{`
        .music-card {
          transition: 0.3s ease;
        }

        .music-card:hover {
          transform: translateY(-8px);
          border-color: #00eaff;
          box-shadow: 0 0 25px #6d28d9;
        }

        .music-button:hover {
          transform: scale(1.05);
        }

        .music-input:focus {
          outline: 2px solid #00eaff;
        }
      `}</style>

      {/* HEADER */}

      <header style={styles.header}>

        <h1 style={styles.heading}>
          ♫ MUSIC WORLD
        </h1>

        <p style={styles.subtitle}>
          Feel The Music • Feel The Vibe
        </p>

        {/* SEARCH FORM */}

        <form onSubmit={handleSearch} style={styles.form}>

          <input
            className="music-input"
            type="text"
            placeholder="Search songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.searchButton}
            disabled={loading}
          >
            🔍 SEARCH
          </button>

        </form>

        {/* REFRESH BUTTON */}

        <button
          className="music-button"
          style={styles.button}
          onClick={() => fetchVideos(search)}
          disabled={loading}
        >
          {loading ? "LOADING..." : "⚡ REFRESH SONGS"}
        </button>

      </header>

      {/* LOADING */}

      {loading && (
        <h2 style={styles.message}>
          🎵 Loading Music...
        </h2>
      )}

      {/* ERROR */}

      {error && (
        <h3 style={styles.error}>
          {error}
        </h3>
      )}

      {/* INITIAL MESSAGE */}

      {!hasSearched && (
        <h2 style={styles.message}>
          Search your favourite songs! 🎧
        </h2>
      )}

      {/* MUSIC GRID */}

      <div style={styles.grid}>

        {videos.map((item) => (

          <div
            className="music-card"
            style={styles.card}
            key={item.trackId}
          >

            <img
              src={item.artworkUrl100?.replace(
                "100x100",
                "300x300"
              )}
              alt={item.trackName}
              style={styles.image}
            />

            <h3 style={styles.title}>
              {item.trackName}
            </h3>

            <p style={styles.artist}>
              🎤 {item.artistName}
            </p>

            <p style={styles.genre}>
              🎧 {item.primaryGenreName}
            </p>

            {/* AUDIO PLAYER */}

            {item.previewUrl ? (
              <audio
                controls
                preload="none"
                src={item.previewUrl}
                style={styles.audio}
              />
            ) : (
              <p style={styles.noAudio}>
                Preview not available
              </p>
            )}

            <a
              href={item.trackViewUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              View on Apple Music ↗
            </a>

          </div>

        ))}

      </div>

      {/* FOOTER */}

      <footer style={styles.footer}>
        <h2>♫ MUSIC WORLD</h2>
        <p>Powered by Apple iTunes Search API</p>
      </footer>

    </div>
  );
}


// STYLES

const styles = {

  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "radial-gradient(circle at top, #252052, #080816 65%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    textAlign: "center",
    marginBottom: "45px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#00eaff",
    letterSpacing: "4px",
    textShadow: "0 0 20px #00eaff",
  },

  subtitle: {
    color: "#b8b8d0",
    margin: "12px 0 30px",
  },

  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },

  input: {
    padding: "15px",
    width: "300px",
    borderRadius: "30px",
    border: "2px solid #00eaff",
    background: "#17152d",
    color: "white",
  },

  searchButton: {
    padding: "15px 25px",
    borderRadius: "30px",
    border: "none",
    background: "#00eaff",
    color: "#080816",
    fontWeight: "bold",
    cursor: "pointer",
  },

  button: {
    padding: "16px 38px",
    border: "2px solid #00eaff",
    borderRadius: "50px",
    background: "linear-gradient(90deg, #7928ca, #ff0080)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "25px",
    maxWidth: "1300px",
    margin: "auto",
  },

  card: {
    background: "linear-gradient(145deg, #1d1b38, #111126)",
    border: "1px solid #493b79",
    borderRadius: "18px",
    padding: "16px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  title: {
    color: "#00eaff",
    fontSize: "17px",
    marginTop: "16px",
  },

  artist: {
    color: "#ddd",
  },

  genre: {
    color: "#aaa",
    fontSize: "13px",
  },

  audio: {
    width: "100%",
    marginTop: "12px",
  },

  noAudio: {
    color: "#ffae42",
  },

  link: {
    display: "inline-block",
    marginTop: "15px",
    color: "#00eaff",
    textDecoration: "none",
    fontSize: "13px",
  },

  message: {
    textAlign: "center",
    color: "#00eaff",
  },

  error: {
    textAlign: "center",
    color: "#ff5555",
  },

  footer: {
    textAlign: "center",
    marginTop: "50px",
    color: "#aaa",
  },
};

export default Video;
