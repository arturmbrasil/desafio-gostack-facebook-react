import React from 'react';

import facebook from '../assets/facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={facebook}/>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
