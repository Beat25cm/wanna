document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('mouseenter', moveNoButton);
    yesButton.addEventListener('click', () => {
        alert("Sabía que dirías que sí teacher! :3");
        alert("psdta, tenes que cumplir");
        alert("loviu 🫶");
        window.close();
    });

    function moveNoButton() {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const moveRange = 400; // Rango de movimiento en píxeles

        // Calcular límites para el botón dentro del rango de movimiento
        const maxX = Math.min(windowWidth - buttonWidth, moveRange);
        const maxY = Math.min(windowHeight - buttonHeight, moveRange);

        // Calcular nuevas coordenadas dentro del rango permitido
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;

        // Borde temporal para depuración
        noButton.style.border = '2px solid yellow';
    }

    // Remover borde después de que el botón ha sido movido
    noButton.addEventListener('mouseleave', () => {
        noButton.style.border = 'none';
    });
});
