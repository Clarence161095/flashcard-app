export const getPokemonSpriteUrl = ({ id = 151, isBack = false }) => {
  if (isBack) {
    return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated_24FPS/back/${id}.gif`;
  } else {
    return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated_24FPS/${id}.gif`;
  }
};
