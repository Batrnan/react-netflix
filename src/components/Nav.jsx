import React from 'react';

export default function Nav() {
  return (
    <nav>
      <img
        src=""
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => window.location.reload}
      />
      <img src="" alt="User logged" className="nav__avatar" />
    </nav>
  );
}
