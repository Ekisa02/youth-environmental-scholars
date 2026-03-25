// src/assets/images/index.js
// Import all your images here
// Make sure these image files exist in the src/assets/images/ folder

// Default placeholder if images don't exist yet
const defaultPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23eef4ea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%238a9e8a' font-size='40'%3E🌱%3C/text%3E%3C/svg%3E";

// Try to import actual images, fallback to placeholder if they don't exist
let Chairperson, Vicechairperson, Secretary, Treasurer, OrganizingSecretary, CommitteeTeam, logo;

try {
  Chairperson = require('./chairperson.jpg');
} catch (e) {
  Chairperson = defaultPlaceholder;
}

try {
  Vicechairperson = require('./vicechairperson.jpg');
} catch (e) {
  Vicechairperson = defaultPlaceholder;
}

try {
  Secretary = require('./secretary.jpg');
} catch (e) {
  Secretary = defaultPlaceholder;
}

try {
  Treasurer = require('./treasurer.jpg');
} catch (e) {
  Treasurer = defaultPlaceholder;
}

try {
  OrganizingSecretary = require('./organizing-secretary.jpg');
} catch (e) {
  OrganizingSecretary = defaultPlaceholder;
}

try {
  CommitteeTeam = require('./committee-team.jpg');
} catch (e) {
  CommitteeTeam = defaultPlaceholder;
}

try {
  logo = require('./logo.jpeg');
} catch (e) {
  logo = defaultPlaceholder;
}

const images = {
  Chairperson,
  Vicechairperson,
  Secretary,
  Treasurer,
  OrganizingSecretary,
  CommitteeTeam,
  logo
};

export default images;