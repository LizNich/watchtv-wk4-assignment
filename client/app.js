const watchtvContainer = document.getElementById("watchtv-container");
const form = document.querySelector("form");

//
//
async function handleSubmit(event) {
  event.preventDefault();
  //
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  //"http://localhost:8080/watchtv"
  const response = await fetch("http://localhost:8080/watchtv", {
    method: "POST",
    body: JSON.stringify(formObj),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(watchtv);
}

form.addEventListener("submit", handleSubmit);

//
//
async function getWatchtv() {
  const response = await fetch(
    "https://watchtv-wk4-assignment-client.onrender.com/"
  );
  const watchtv = await response.json();
  //console.log(watchtv);  it gave errors here - connection via row above with link on it

  //
  for (let i = 0; i < watchtv.length; i++) {
    const username = watchtv[i].username;
    const message = watchtv[i].message;
    const p = document.createElement("p");
    p.textContent = `${username} recommends ${message}`;

    bookContainer.appendChild(p);
  }
}
getWatchtv();
