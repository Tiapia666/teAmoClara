document.addEventListener("DOMContentLoaded", function () {
    const item = document.getElementById("movable-item");
    const container = document.getElementById("container");

    item.style.position = "absolute";

    item.addEventListener("mouseover", function () {
        const maxX = Math.max(0, container.clientWidth - item.clientWidth - 20);
        const maxY = Math.max(0, container.clientHeight - item.clientHeight - 20);

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        item.style.left = `${randomX}px`;
        item.style.top = `${randomY}px`;
    });
});