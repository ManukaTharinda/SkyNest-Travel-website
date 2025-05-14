import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

const navlinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About", url: "#" },
  { id: 3, label: "Blog", url: "#" },
  { id: 4, label: "Destination", url: "#" },
  { id: 5, label: "Dashboard", url: "#" },
];

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const Mobilenavbar = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black opacity-70 z-[1000]"
        />
      )}

      {/* Nav Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-rose-900 z-[1010] transform ${navOpen} transition-transform duration-500 flex flex-col justify-center space-y-6 px-8`}
      >
        {navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white text-[20px] border-b-[1.5px] border-white pb-1 sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-3 right-4 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default Mobilenavbar;
