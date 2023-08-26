document.addEventListener("DOMContentLoaded", function() {
    const dice = document.getElementById("dice");
    const cube = document.getElementById("cube");
    const rollButton = document.getElementById("rollButton");
    let isRolling = false;

    rollButton.addEventListener("click", function() {
        if (!isRolling) {
            rollDice();
        }
    });

    function rollDice() {
        isRolling = true;
        const randomFace = Math.floor(Math.random() * 6) + 1;
        cube.style.animation = "rollAnimation 3s ease-in-out";
        cube.style.transform = `rotateX(${randomFace * 360}deg)`;

        setTimeout(function() {
            cube.style.animation = "";
            isRolling = false;
        }, 3000);
    }
});
