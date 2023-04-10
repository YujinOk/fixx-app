const global = {
  currentPage: window.location.pathname,
};
console.log(window.location.pathname);
// Init App
const init = () => {
  switch (global.currentPage) {
    case '/':
      console.log('Home');
      break;
  }
};

document.addEventListener('DOMContentLoaded', init);
