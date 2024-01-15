import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link href='/'>ESIRGE</Link>
          </div>
          <div className='menu'>MENU</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
