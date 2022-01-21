// when scrolling, trigger the scroll-indicator progress bar
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    var winScroll = window.pageYOffset;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar-indicator").style.width = scrolled + "%";

    console.log("SCROLLED: ", scrolled);
}