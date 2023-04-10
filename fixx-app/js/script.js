const global = {
  currentPage: window.location.pathname,
};

// Init App
const init = () => {
  switch (global.currentPage) {
    case '/':
      console.log('Home');
      break;
  }
};

document.addEventListener('DOMContentLoaded', init);
