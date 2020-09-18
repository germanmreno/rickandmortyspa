const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
        <a href="/rickandmortyspa"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png" alt="Logo" width="250px"/></a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
