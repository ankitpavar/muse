import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MusicCard from './components/MusicCard';
import MusicSearch from './components/MusicSearch';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState('');
  const [music, setMusic] = useState([]);

  const searchMusic = async (e) => {
    e.preventDefault();

    const url = `https://saavn.sumit.codes/songs/${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMusic(data.result);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="h-screen text-white bg-gray-200 body-font">
        <Header />
        <div className="container px-4 py-5 mx-auto ">
          <div className="max-w-md  mx-auto my-5">
            <form onSubmit={searchMusic} className=" mb-6 flex">
              <label className="font-md text-black mr-6 ml-2" htmlFor="text">
                Enter Song URL :
              </label>
              <input
                className="border rounded-lg py-1 text-black"
                type="text"
                name="query"
                autoComplete="off"
                placeholder="i.e www.jiosaavn.com/song/toosie-slide/IyUndDZkfUc"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="bg-black text-white px-2 py-1 rounded-lg ml-4"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {loading ? (
            <h1 className="text-2xl">Loading...</h1>
          ) : (
            <div>
              {music.map((song, index) => (
                <MusicCard key={index} song={song} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
