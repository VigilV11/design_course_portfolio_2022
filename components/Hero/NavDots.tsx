import React, { useEffect } from 'react';

export default function NavDots() {
  function clickHandler(e: any) {
    const allNavDots = document.querySelectorAll('.navDotsClassName');
    // console.log(allNavDots);

    allNavDots.forEach((item) => {
      item.classList.remove('selected-circle');
    });

    e.target.classList.add('selected-circle');
  }

  /// Automatically update filled dots based on scolling

  useEffect(() => {
    function updateList() {
      // if (document === undefined) return;
      const allH1H2NodeList = document.querySelectorAll('h1, h2');
      console.log(allH1H2NodeList);
      const allH1H2 = Array.from(allH1H2NodeList);
      // const titles = allH1H2.sort((a, b) => {
      const titles = Array.from(document.querySelectorAll('h1, h2')).sort(
        (a, b) => {
          return (
            Math.abs(a.getBoundingClientRect().top) -
            Math.abs(b.getBoundingClientRect().top)
          );
        }
      );

      document
        .querySelectorAll('.selected-circle')
        .forEach((c) => c.classList.remove('selected-circle'));

      console.log('titles');
      console.log(titles);
      console.log(allH1H2.indexOf(titles[0]));

      // document
      //   .querySelectorAll('.nav-dot')
      //   [allH1H2.indexOf(titles[0])].classList.add('selected-circle');
      document
        .querySelectorAll('.nav-dot')
        [
          Array.from(document.querySelectorAll('h1, h2')).indexOf(titles[0])
        ].classList.add('selected-circle');
    }

    updateList();
    window.addEventListener('scroll', () => {
      updateList();
    });
  }, []);

  return (
    /* <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block"></nav> */
    /* <nav className=" hidden lg:mr-24 lg:w-4 fixed left-percentage  xl:block"> */

    <nav className="hidden fixed lg:mr-24 lg:w-4 fixed  xl:block">
      {/* <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36"> */}
      <div className="absolute space-y-6 mt-36">
        <a
          href="#"
          className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body navDotsClassName"
          onClick={clickHandler}
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 hover:opacity-100">
            Home
          </span>
        </a>
        <a
          href="#work"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body navDotsClassName"
          onClick={clickHandler}
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 hover:opacity-100">
            Work
          </span>
        </a>
        <a
          href="#clients"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body navDotsClassName"
          onClick={clickHandler}
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 hover:opacity-100">
            Clients
          </span>
        </a>
        <a
          href="#hire"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body navDotsClassName"
          onClick={clickHandler}
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 hover:opacity-100">
            Hire
          </span>
        </a>
      </div>
    </nav>
  );
}
