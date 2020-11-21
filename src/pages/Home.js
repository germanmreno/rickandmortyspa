import getData from "../utils/getData";

const Home = async () => {

    document.querySelector("#content > div").style.display = "block";

    const characters = [];

for(let i = 1; i < 13; i++) {
   const getCharacters = await getData(i);

   const character = {
       id: getCharacters.id,
       name: getCharacters.name,
       image: getCharacters.image.url
  }

   characters.push(character);
}

   const view = `<section class="Characters">
   ${characters.map(character => `
   <article class="Characters-item">
   <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
   </article>
   `
   ).join("")}
   </section>`;

   document.querySelector("#content > div").style.display = "none";

   return view;

  }

export default Home;
