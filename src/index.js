javascript: (function () {
  document.body.contentEditable = true;

  // Allowing us to click on the anchor text without being redirected
  let links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].removeAttribute('href');
  }
})();
