import React from 'react';

function Header() {
  return (
    <div>
      <header className="mx-auto  md:max-w-md sm:max-w-sm">
        <div className="">
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
