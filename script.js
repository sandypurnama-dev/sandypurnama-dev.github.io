document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Character Model",
      models: ["model1.glb", "model2.glb", "model3.glb"]
    },
    {
      title: "Environment Design",
      models: ["env1.glb", "env2.glb"]
    },
    {
      title: "Weapon Model",
      models: ["weapon1.glb", "weapon2.glb", "weapon3.glb"]
    }
  ];

  const grid = document.getElementById("projectGrid");

  if (grid) {
    projects.forEach((project) => {
      let currentIndex = 0;
      const card = document.createElement("div");
      card.className = "model-card";

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

      grid.appendChild(card);

      const viewer = card.querySelector("model-viewer");
      const prevBtn = card.querySelector(".prev-btn");
      const nextBtn = card.querySelector(".next-btn");

      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + project.models.length) % project.models.length;
        viewer.src = `models/${project.models[currentIndex]}`;
      });

      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % project.models.length;
        viewer.src = `models/${project.models[currentIndex]}`;
      });
    });
  }

  // Smooth scroll untuk link nav
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});
