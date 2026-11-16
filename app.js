const WHATSAPP_NUMBER = "252614355694";

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const quoteForm = document.getElementById("quoteForm");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

document.querySelectorAll(".product-card").forEach((card) => {
  const pills = card.querySelectorAll(".pill");
  const priceEl = card.querySelector(".price-now");
  const noteEl = card.querySelector(".price-note");
  const orderBtn = card.querySelector(".btn-order");
  const productName = card.dataset.product;

  let selectedPlan = pills[0]?.dataset.plan || "Standard";
  let selectedPrice = pills[0]?.dataset.price || "$20";

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      selectedPlan = pill.dataset.plan;
      selectedPrice = pill.dataset.price;

      priceEl.textContent = selectedPrice;
      noteEl.textContent = `for ${selectedPlan} · OGAAL SERVIS`;
    });
  });

  orderBtn.addEventListener("click", () => {
    const msg = `Hello OGAAL SERVIS, I want to order: ${productName} (${selectedPlan} - ${selectedPrice}).`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim() || "Customer";
  const service = document.getElementById("serviceSelect").value;
  const details = document.getElementById("projectDetails").value.trim() || "No extra details";

  const msg = `Hello OGAAL SERVIS,\nName: ${name}\nService: ${service}\nDetails: ${details}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
