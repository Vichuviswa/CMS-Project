const buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) => { button.style.animationDelay = `${0.5 + index * 0.5}s`; button.style.opacity = 1;
});