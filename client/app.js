const watchtvContainer = document.getElementById("watchtv-container");
const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // LN_note: address must inc "/watchtv"
  const response = await fetch(
    "https://watchtv-wk4-assignment-server.onrender/watchtv.com",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const reply = await response.json();
}

form.addEventListener("submit", (event) => {
  handleSubmit(event);
  form.reset();
  getTask();
});

form.addEventListener("submit", handleSubmit);

// LN_note: address doesn't inc "/watchtv"
async function getWatchtv() {
  const response = await fetch(
    "https://watchtv-wk4-assignment-server.onrender.com"
  );
  const watchtv = await response.json();

  for (let i = 0; i < watchtv.length; i++) {
    const username = watchtv[i].username;
    const message = watchtv[i].message;
    const p = document.createElement("p");
    p.textContent = `${username} recommends ${message}`;

    watchtvContainer.appendChild(p);
  }
}
//getWatchtv();
