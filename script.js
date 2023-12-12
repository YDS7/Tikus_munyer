const emoji=document.getElementById("emoji");

emoji.addEventListener("mouseover",() => {
    emoji.style.animation="none";
    setTimeout(() => {
        emoji.style.animation="move 2s linear infinite";
    });
});