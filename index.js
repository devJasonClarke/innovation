//* Ok so this initializes the timeline and toggle

let tl = gsap.timeline();

let searchToggle = 0;

//* Click events

document.getElementById("search").onclick = searchReveal;

//* Reveals content on load
window.addEventListener("load", reveal());

//* Functions, 1.reval content, 2, 3 and 4. reveal and toggle search bar

function reveal() {
  tl.to("body", {
    overflow: "hidden",
  });

  tl.from(".main-overlay", {
    duration: 1.5,
    x: "-100%",
    ease: "Power3.easeOut",
  });

  tl.from(
    ".logo",
    {
      duration: 1,
      opacity: 0,
      y: -90,
      ease: "Power3.easeOut",
    },
    "-=1.5"
  );

  tl.from(
    ".nav-link",
    {
      duration: 1,
      opacity: 0,
      y: -90,
      stagger: 0.2,
      ease: "Power3.easeOut",
    },
    "-=1.2"
  );

  tl.from(
    ".search",
    {
      duration: 1,
      opacity: 0,
      y: -90,
      ease: "Power3.easeOut",
    },
    "-=.9"
  );

  tl.from(
    ".header-img",
    {
      duration: 1,
      width: 0,
      ease: "Power3.easeInOut",
    },
    "-=.5"
  );

  tl.from(
    ".header-text",
    {
      duration: 1,
      opacity: 0,
      y: 100,
    },
    "-=1"
  );

  tl.from(
    ".social-media-container",
    {
      duration: 0.5,
      opacity: 0,
      y: 100,
    },
    "-=.5"
  );
  tl.to("body", {
    overflow: "auto",
    onComplete: function () {
      tl.kill();
    },
  });
}

function revealSearch() {
  tl.to(".nav-input", {
    duration: 0.5,
    display: "block",
    opacity: 1,
    y: 0,
    ease: "Power3.easeInOut",
  });
}

function hideSearch() {
  tl.to(".nav-input", {
    duration: 0.5,
    display: "block",
    opacity: 0,
    y: 50,
    ease: "Power3.easeInOut",
  });
  tl.to(".nav-input", {
    display: "none",
  });
}

function searchReveal() {
  let search = document.getElementById("search-bar");

  if (searchToggle == 0) {
    revealSearch();
    searchToggle++;
  } else if (searchToggle == 1) {
    searchToggle++;
  } else {
    hideSearch();
    searchToggle -= 2;
  }
}
