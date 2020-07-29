import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MusicCard from './components/MusicCard';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [query, setQuery] = useState('');
  const [music, setMusic] = useState([]);

  const searchMusic = async (e) => {
    e.preventDefault();

    const url = `https://saavn.sumit.codes/songs/${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMusic(data.result);
      setQuery('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="h-screen text-white bg-gray-400 body-font">
        <Header />
        <div className="container px-4 py-5 mx-auto ">
          <div className="max-w-md  mx-auto my-5">
            <form
              onSubmit={searchMusic}
              className=" mb-12 w-full h-8  flex flex-col items-start"
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Enter Song URL :
              </label>
              <div className="flex justify-center items-center">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="query"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="mx-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Search
                </button>
                <div
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setQuery('')}
                >
                  Clear
                </div>
              </div>
            </form>
          </div>

          <div>
            {music.map((song, index) => (
              <MusicCard key={index} song={song} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
