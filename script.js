// Daftar model (setiap project bisa punya lebih dari 1 file untuk di-swipe)
const projects = [
  {
    title: "Character Model",
    models: ["mymodel.glb", "model2.glb", "model3.glb"]
  },
  {
    title: "Environment Design",
    models: ["env1.glb", "env2.glb"]
  },
  {
    title: "Weapon Model",
    models: ["weapon1.glb", "weapon2.glb", "weapon3.glb"]
  },
  {
    title: "Accessories",
    models: ["hat.glb", "sword.glb", "shield.glb"] // <-- Tambah disini
  }
];

const grid = document.getElementById("projectGrid");

projects.forEach((project, index) => {
  let currentIndex = 0;

  // Buat card
  const card = document.createElement("div");
  card.className = "model-card";

  // Isi HTML card
  card.innerHTML = `
    <model-viewer src="models/${project.models[currentIndex]}"
                  alt="${project.title}"
                  auto-rotate
                  camera-controls
                  shadow-intensity="1">
    </model-viewer>
    <p>${project.title}</p>
    <div class="card-controls">
      <button class="prev-btn">Prev</button>
      <button class="next-btn">Next</button>
    </div>
  `;

  // Tambahkan ke grid
  grid.appendChild(card);

  // Dapatkan element tombol & viewer
  const viewer = card.querySelector("model-viewer");
  const prevBtn = card.querySelector(".prev-btn");
  const nextBtn = card.querySelector(".next-btn");

  // Event tombol Prev
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + project.models.length) % project.models.length;
    viewer.src = `models/${project.models[currentIndex]}`;
  });

  // Event tombol Next
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % project.models.length;
    viewer.src = `models/${project.models[currentIndex]}`;
  });
});

// Smooth scroll untuk anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
