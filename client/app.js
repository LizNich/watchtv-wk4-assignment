const watchtvContainer = document.getElementById("watchtv-container");

async function getWatchtv() {
  const response = await fetch("http://localhost:8080");
  const watchtv = await response.json();
  //console.log(watchtv);  it gave errors here - connection via row 4
  for (let i = 0; i < watchtv.length; i++) {
    const username = watchtv[i].username;
    const message = watchtv[i].message;
    const p = document.createElement("p");
    p.textContent = `${username} recommends ${message}`;

    bookContainer.appendChild(p);
  }
}
getWatchtv();
