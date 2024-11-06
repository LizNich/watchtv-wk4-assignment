const watchtvContainer = document.getElementById("watchtv-container");
const form = document.querySelector("form");
//const API_URL = "http://localhost:8080";
const API_URL = "https://watchtv-wk4-assignment-server.onrender";

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  const response = await fetch(`${API_URL}/watchtv`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formObj),
  });
  const reply = await response.json();
}

form.addEventListener("submit", (event) => {
  handleSubmit(event);
  form.reset();
  getWatchtv();
});

//form.addEventListener("submit", handleSubmit);

async function getWatchtv() {
  watchtvContainer.innerHTML = "";
  const response = await fetch(`${API_URL}/watchtv`);

  const watchtv = await response.json();

  for (let i = 0; i < watchtv.length; i++) {
    const username = watchtv[i].username;
    const message = watchtv[i].message;
    const p = document.createElement("p");
    p.textContent = `${username} recommends ${message}`;

    watchtvContainer.appendChild(p);
  }
}
getWatchtv();
