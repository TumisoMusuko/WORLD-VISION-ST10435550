// Initialize the map (centered on South Africa as an example)
const map = L.map("impact-map").setView([-28.5, 24.7], 5);

// Base layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Reusable marker style (optional custom icon)
const orangeIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Example locations (edit these to your real projects)
const locations = [
  {
    name: "Johannesburg – Community Development",
    coords: [-26.2041, 28.0473],
    desc:
      "Programs focused on education and child protection.",
  },
  {
    name: "Cape Town – Clean Water Initiative",
    coords: [-33.9249, 18.4241],
    desc:
      "Improving access to safe, clean water for families.",
  },
  {
    name: "Durban – Emergency Relief",
    coords: [-29.8587, 31.0218],
    desc:
      "Rapid response, food security, and healthcare support.",
  },
];

// Add markers
locations.forEach((loc) => {
  L.marker(loc.coords, { icon: orangeIcon })
    .addTo(map)
    .bindPopup(
      `<strong>${loc.name}</strong><br>${loc.desc}<br><br><a href="features.html" class="popup-link">Learn more</a>`
    );
});

// Fit map to markers nicely
const group = L.featureGroup(
  locations.map((l) => L.marker(l.coords))
).addTo(map);
map.fitBounds(group.getBounds().pad(0.2));
