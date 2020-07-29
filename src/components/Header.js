import React from 'react';

function Header() {
  return (
    <div>
      <header className="text-gray-500 body-font">
        <div className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className=" tracking-wider ml-1 text-3xl font-black text-black">
              muse
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
