function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4C542", "#8D33FF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
