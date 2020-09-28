var lb = {
  wrap : null, // Holds the reference to the HTML lightbox div
  init : function () {
  // lb.init() : initialze on window load

    // Get HTML wrapper
    lb.wrap = document.getElementById("lightbox");

    // Click to close the lightbox div
    lb.wrap.addEventListener("click", lb.hide);

    // Attach onclick event to all image thumbnails
    var thumbs = document.querySelectorAll("#full img");
    for (var t of thumbs) {
      t.addEventListener("click", lb.show);
    }
  },

  show : function () {
  // lb.show() : show the selected image

    // Attach selected image as background image on the lightbox, show it
    lb.wrap.style.backgroundImage = "url(" + this.getAttribute("src") + ")";
    lb.wrap.classList.add("show");
  },

  hide : function () {
  // lb.hide() : hide the full screen lightbox

    lb.wrap.classList.remove("show");
  }
};

/* [INIT] */
window.addEventListener("load", lb.init);