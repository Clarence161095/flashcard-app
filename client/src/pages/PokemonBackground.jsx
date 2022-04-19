/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { getPokemonSpriteUrl } from 'shared/Utilities';
import '../sass/style.css';

const PokemonImage = (props) => {
  const pokemonId = useRef(_.random(1, 649));
  const isBack = useRef(false);
  const position = useRef({ x: _.random(1, 70), y: _.random(1, 80) });
  const calculatePosition = () => {
    if (position.current.x > 70) {
      position.current.x = 70;
    }
    if (position.current.y > 80) {
      position.current.y = 80;
    }
    if (position.current.x < 1) {
      position.current.x = 1;
    }
    if (position.current.y < 1) {
      position.current.y = 1;
    }
  };
  useEffect(() => {
    const a = _.random(1, 8);
    switch (a) {
      case 1:
        position.current.x += _.random(1, 20) * 0;
        position.current.y += _.random(1, 20) * -1;
        isBack.current = true;
        break;
      case 2:
        position.current.x += _.random(1, 20) * 1;
        position.current.y += _.random(1, 20) * -1;
        isBack.current = true;
        break;
      case 3:
        position.current.x += _.random(1, 20) * 1;
        position.current.y += _.random(1, 20) * 0;
        isBack.current = true;
        break;
      case 4:
        position.current.x += _.random(1, 20) * 1;
        position.current.y += _.random(1, 20) * 1;
        isBack.current = false;
        break;
      case 5:
        position.current.x += _.random(1, 20) * 1;
        position.current.y += _.random(1, 20) * 0;
        isBack.current = false;
        break;
      case 6:
        position.current.x += _.random(1, 20) * -1;
        position.current.y += _.random(1, 20) * 1;
        isBack.current = false;
        break;
      case 7:
        position.current.x += _.random(1, 20) * -1;
        position.current.y += _.random(1, 20) * 0;
        isBack.current = false;
        break;
      case 8:
        position.current.x += _.random(1, 20) * -1;
        position.current.y += _.random(1, 20) * -1;
        isBack.current = false;
        break;
      default:
        break;
    }
    calculatePosition();
  }, [props.position]);
  return (
    <div>
      <img
        className="pokemonBackgroundCmp-pokemonImg"
        src={getPokemonSpriteUrl({ id: pokemonId.current, isBack: isBack.current })}
        alt="Pokemon"
        style={{
          position: 'absolute',
          left: `${position.current.x}%`,
          top: `${position.current.y}%`,
          transition: 'all 2s linear',
          width: 'auto',
        }}
      />
    </div>
  );
};

const PokemonBackground = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setPosition(_.random(1, 10000));
    }, 2000);
  }, []);

  return (
    <div className="pokemonBackgroundCmp">
      {_.times(9, Number).map((key) => {
        return <PokemonImage key={key} position={position} />;
      })}
    </div>
  );
};

export default PokemonBackground;
