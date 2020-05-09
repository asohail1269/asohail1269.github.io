const parallax = document.getElementById
("hero");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.7 + "px";
})

