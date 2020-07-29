import React, { useState } from 'react';

const MusicSearch = ({searchText}) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    searchText(text);
  };
  return (
    <div className="max-w-md  mx-auto my-5">
      <form onSubmit={onSubmit} className=" mb-6 flex">
        <label className="font-md text-black mr-6 ml-2" htmlFor="text">
          Enter Song URL :
        </label>
        <input
          className="border rounded-lg py-1 text-black"
          type="text"
          name="query"
          autoComplete="off"
          placeholder="i.e www.jiosaavn.com/song/toosie-slide/IyUndDZkfUc"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="bg-black text-white px-2 py-1 rounded-lg ml-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MusicSearch;
