import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 45,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      //   top: 0,
      left: '60vw',
    },
    closed: {
      //   top: '-100vh',
      right: '-40vw',
    },
  };

  return (
    <>
      <header className=" container flex justify-between py-6 items-center mx-auto w-full relative ">
        <div className="text-lg font-bold z-30">Some Name</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#" className="text-selected-text">
            Home
          </a>
          <a href="#work">My work</a>
          <a href="#clients">Clients</a>
          <a href="#hire">
            <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
          </a>
        </div>
        <motion.div
          initial={false}
          className="md:hidden z-20"
          onClick={() => setMenuOpen((state) => !state)}
          variants={iconVariants}
          animate={menuOpen ? 'opened' : 'closed'}
        >
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </header>

      <motion.div
        className="fixed top-0 bg-body z-10 w-2/5 h-full flex flex-col justify-center items-center space-y-6"
        initial={false}
        variants={menuVariants}
        animate={menuOpen ? 'opened' : 'closed'}
      >
        <a href="#" className="text-selected-text">
          Home
        </a>
        <a href="#work">My work</a>
        <a href="#clients">Clients</a>
        <a href="#hire">
          <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
        </a>
      </motion.div>
    </>
  );
}
