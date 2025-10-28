// Initialize the map
const map = L.map('map').setView([-25.746, 28.188], 6); // Centered on Pretoria, South Africa

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// ===========================
// PROJECT LOCATION MARKERS
// ===========================

// Example project data
const locations = [
  {
    name: "Johannesburg Children's Center",
    coords: [-26.2041, 28.0473],
    desc: "Provides food, education, and shelter to over 300 vulnerable children.",
    link: "about.html",
  },
  {
    name: "Cape Town Community Water Project",
    coords: [-33.9249, 18.4241],
    desc: "Ensures clean water access for 12,000 residents across rural areas.",
    link: "features.html",
  },
  {
    name: "Durban Youth Development Hub",
    coords: [-29.8587, 31.0218],
    desc: "Offers vocational training and mentorship programs for unemployed youth.",
    link: "goals.html",
  },
  {
    name: "Limpopo Agriculture Program",
    coords: [-23.9, 29.45],
    desc: "Supports sustainable farming and nutrition for local communities.",
    link: "design.html",
  },
  {
    name: "Eastern Cape Relief Center",
    coords: [-32.2968, 26.4194],
    desc: "Delivers emergency food and healthcare support during crises.",
    link: "technical.html",
  }
];

// Add markers for each project
locations.forEach((loc) => {
  const marker = L.marker(loc.coords).addTo(map);

  // Create a styled popup for each location
  const popupContent = `
    <h3>${loc.name}</h3>
    <p>${loc.desc}</p>
    <a href="${loc.link}" class="popup-link">Learn More</a>
  `;
  marker.bindPopup(popupContent);
});

// ===========================
// LEGEND SETUP
// ===========================

const legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  const div = L.DomUtil.create("div", "map-legend");
  div.innerHTML = `
    <span class="dot"></span> <span>World Vision Project Location</span>
  `;
  return div;
};

legend.addTo(map);

// ===========================
// MAP RESPONSIVENESS
// ===========================

// Adjust map size dynamically if container resizes
window.addEventListener('resize', () => {
  map.invalidateSize();
});
