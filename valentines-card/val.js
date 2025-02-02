let cover = document.getElementsByClassName('cover')[0];
let body = document.body;
let card= document.getElementsByClassName('card')[0];


function fade(){
    body.style.backgroundImage="url('assets/love.gif')";
    cover.style.visibility= 0;
    card.style.opacity= 1;
    cover.style.mouse="auto";
}

let button = document.getElementsByClassName('no-btn')[0];


        
        let moving = false;
        let x = 200, y = 300; // Initial position in %
        let speedX = 2.5, speedY = 2.5; // Speed of movement

        button.addEventListener("click", () => {
            if (moving) return; // Prevent multiple clicks from restarting movement
            moving = true;
            moveButton();
        });

        function moveButton() {
            let cardWidth = card.clientWidth;
            let cardHeight = card.clientHeight;
            let buttonWidth = button.clientWidth;
            let buttonHeight = button.clientHeight;

            function animate() {
                if (!moving) return;

                x += speedX;
                y += speedY;

                // Bounce off walls
                if (x <= 0 || x + buttonWidth >= cardWidth) speedX *= -1;
                if (y <= 0 || y + buttonHeight >= cardHeight) speedY *= -1;

                button.style.left = `${x}px`;
                button.style.top = `${y}px`;

                requestAnimationFrame(animate); // Continue animation
            }

            animate();
        }
