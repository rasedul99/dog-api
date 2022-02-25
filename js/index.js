const loadDog = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};

const displayDog = (dogList) => {
  console.log(dogList);
  const wrapper = document.getElementById("wrapper");

  for (const dog of dogList) {
    const div = document.createElement("div");
    div.className = "col-lg-4";
    div.innerHTML = ` 
  <h2>${dog.name}</h2>
  <img src="${dog.image.url}" width='400px' height='250px' alt="...">`;

    wrapper.appendChild(div);
  }
};
