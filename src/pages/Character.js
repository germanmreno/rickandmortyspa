import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);

    const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image.url}" alt="${character.name}"/>
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
      <h2 class="Character-info">SUPERHERO INFO</h2>
      <h3><span>Aliases:</span> ${character.biography.aliases[0]}</h3>
      <h3><span>Race</span>: ${character.appearance.race}</h3>
      <h3><span>Alignment</span>: ${character.biography.alignment}</h3>
      <h3><span>Publisher</span>: ${character.biography.publisher}</h3>
    </article>
    </div>
  `;
    return view;
};

export default Character;
