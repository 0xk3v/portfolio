export const config = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 40,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 8,
        opacity: 0.7,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#2ec4b6",
    },
    links: {
      color: "#ccc",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  // detectRetina: true,
};
