const TOKEN = "2808639842685084";
const API = `https://cors-anywhere.herokuapp.com/superheroapi.com/api/${TOKEN}/`;

const getData = async (id) => {
const apiURL = `${API}${id}`
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
