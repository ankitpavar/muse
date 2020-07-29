import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicCard = ({ song }) => {
  return (
    <div>
      <div className="md:max-w-md sm:max-w-sm rounded-md overflow-hidden shadow-2xl mx-auto my-8">
        <img
          className="w-64 h-64 mx-auto py-4 border-black rounded"
          src={song.song_image}
          alt={song.song_title}
        />
        <div className="px-6 py-4 flex  justify-between items-center">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-800">
              {song.song_title}
            </div>
            <p className="text-gray-600 text-base">{song.artist_name}</p>
          </div>
          <div>
            <a href={song.download_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-download"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#2d3748"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-6 py-4">
          <AudioPlayer src={song.stream_link} />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
