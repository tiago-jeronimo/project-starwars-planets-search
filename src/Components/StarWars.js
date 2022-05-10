import React from 'react';
import styles from './styles.module.css';

function StarWars() {
  return (
    <div>
      <img
        className={ styles.ImageStarWars }
        src="https://www.picng.com/upload/star_wars_logo/png_star_wars_logo_65413.png"
        alt="imagem StarWars"
      />
    </div>
  );
}
export default StarWars;
