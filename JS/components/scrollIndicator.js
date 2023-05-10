//* Page Scroll Indicator.
const scrollIndicator = (() => {
  window.onscroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // let scrolled = (winScroll / height) * 100;
    let scrolled =
      window.innerWidth < 1200
        ? Math.min((winScroll / height) * 102, 102)
        : (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };
})();
