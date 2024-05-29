// Memilih elemen dengan kelas 'navbar-nav'
const navbarNav = document.querySelector(".navbar-nav");

// Menambah event listener pada saat tombol hamburger di-klik
document.querySelector("#hamburger-menu").onclick = () => {
  // Toggle class 'active' pada elemen navbarNav
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Memilih tautan "Join my Discord"
  const discordLink = document.querySelector(".navbar-nav a:nth-child(3)");

  // Tautan invite Discord yang diberikan
  const discordInviteLink = "https://discord.gg/86sX27VY";

  // Mendengarkan klik pada tautan Discord
  discordLink.addEventListener("click", function (event) {
    // Menghentikan perilaku bawaan dari tautan
    event.preventDefault();
    // Mengarahkan ke tautan undangan Discord
    window.location.href = discordInviteLink;
    // Membuka jendela baru untuk masing-masing tautan media sosial
    window.open(discordInviteLink);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Memilih tautan "Contact"
  const contactLink = document.querySelector(".navbar-nav a:nth-child(4)");

  // Tautan Spotify yang diberikan
  const spotifyLink =
    "https://open.spotify.com/user/313ip35wobpygtdhxlabw7tyrki4?si=2dfbf9a80d9149fe";

  // Mendengarkan klik pada tautan Contact
  contactLink.addEventListener("click", function (event) {
    // Menghentikan perilaku bawaan dari tautan
    event.preventDefault();
    // Mengarahkan ke tautan Spotify
    window.location.href = spotifyLink;
    // Membuka jendela baru untuk masing-masing tautan media sosial
    window.open(spotifyLink);
  });
});
