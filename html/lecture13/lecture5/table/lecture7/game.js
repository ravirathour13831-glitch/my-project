const board = document.getElementById("gameBoard");

const levelText = document.getElementById("level");
const swapsText = document.getElementById("swaps");
const message = document.getElementById("message");

const restartBtn = document.getElementById("restartBtn");


const levels = [

    {
        size: 8,

        player: [0, 0],

        shadow: [7, 7],

        goal: [6, 6],

        walls: [
            [1, 1],
            [1, 2],
            [1, 3],

            [3, 3],
            [4, 3],
            [5, 3],

            [5, 5],
            [5, 6]
        ]
    },


    {
        size: 9,

        player: [0, 0],

        shadow: [8, 8],

        goal: [7, 7],

        walls: [

            [1, 1],
            [2, 1],
            [3, 1],

            [3, 2],
            [3, 3],

            [5, 3],
            [6, 3],
            [7, 3],

            [7, 4],
            [7, 5],

            [4, 6],
            [5, 6]
        ]
    },


    {
        size: 10,

        player: [0, 0],

        shadow: [9, 9],

        goal: [8, 8],

        walls: [

            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],

            [3, 4],
            [4, 4],
            [5, 4],

            [5, 2],
            [6, 2],
            [7, 2],

            [7, 5],
            [7, 6],
            [7, 7],

            [3, 7],
            [4, 7]
        ]
    }

];


let currentLevel = 0;

let player;
let shadow;

let swaps = 0;

let gameOver = false;


// ⭐ नया timer variable
let levelTimer = null;



function startLevel() {

    const level = levels[currentLevel];

    player = [...level.player];

    shadow = [...level.shadow];

    swaps = 0;

    gameOver = false;

    levelText.textContent = currentLevel + 1;

    swapsText.textContent = swaps;

    message.textContent = "";

    createBoard();
}



function createBoard() {

    const level = levels[currentLevel];

    const size = level.size;

    board.innerHTML = "";

    board.style.gridTemplateColumns =
        `repeat(${size}, 1fr)`;

    board.style.gridTemplateRows =
        `repeat(${size}, 1fr)`;


    for (let row = 0; row < size; row++) {

        for (let col = 0; col < size; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");


            const isWall = level.walls.some(
                wall =>
                    wall[0] === row &&
                    wall[1] === col
            );


            if (isWall) {

                cell.classList.add("wall");

            } else {

                cell.classList.add("floor");

            }


            // Goal

            if (
                row === level.goal[0] &&
                col === level.goal[1]
            ) {

                const goal = document.createElement("div");

                goal.classList.add("goal");

                cell.appendChild(goal);
            }


            // Shadow

            if (
                row === shadow[0] &&
                col === shadow[1]
            ) {

                const shadowElement =
                    document.createElement("div");

                shadowElement.classList.add("shadow");

                cell.appendChild(shadowElement);
            }


            // Player

            if (
                row === player[0] &&
                col === player[1]
            ) {

                const playerElement =
                    document.createElement("div");

                playerElement.classList.add("player");

                cell.appendChild(playerElement);
            }


            board.appendChild(cell);
        }
    }
}



function isWall(row, col) {

    const level = levels[currentLevel];

    return level.walls.some(
        wall =>
            wall[0] === row &&
            wall[1] === col
    );
}



function movePlayer(rowChange, colChange) {

    if (gameOver) return;


    const level = levels[currentLevel];

    const newRow = player[0] + rowChange;

    const newCol = player[1] + colChange;


    // Board ke bahar

    if (
        newRow < 0 ||
        newRow >= level.size ||
        newCol < 0 ||
        newCol >= level.size
    ) {

        return;
    }


    // Wall

    if (isWall(newRow, newCol)) {

        return;
    }


    player = [newRow, newCol];

    createBoard();

    checkGoal();
}



function swapPositions() {

    if (gameOver) return;


    const temp = [...player];

    player = [...shadow];

    shadow = [...temp];


    swaps++;

    swapsText.textContent = swaps;

    createBoard();

    checkGoal();
}



function checkGoal() {

    const level = levels[currentLevel];


    if (
        player[0] === level.goal[0] &&
        player[1] === level.goal[1]
    ) {

        gameOver = true;

        message.textContent =
            "🎉 Level Complete!";


        // ⭐ पुराने timer को पहले बंद करो
        clearTimeout(levelTimer);


        // ⭐ नया timer
        levelTimer = setTimeout(() => {

            currentLevel++;


            if (currentLevel >= levels.length) {

                message.textContent =
                    "🏆 YOU BEAT SHADOW SWAP!";

                currentLevel = 0;

                return;
            }


            startLevel();

        }, 1200);
    }
}



document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();


    if (
        key === "arrowup" ||
        key === "w"
    ) {

        event.preventDefault();

        movePlayer(-1, 0);
    }


    if (
        key === "arrowdown" ||
        key === "s"
    ) {

        event.preventDefault();

        movePlayer(1, 0);
    }


    if (
        key === "arrowleft" ||
        key === "a"
    ) {

        event.preventDefault();

        movePlayer(0, -1);
    }


    if (
        key === "arrowright" ||
        key === "d"
    ) {

        event.preventDefault();

        movePlayer(0, 1);
    }


    if (event.code === "Space") {

        event.preventDefault();

        swapPositions();
    }

});



// ⭐ RESTART BUTTON

restartBtn.addEventListener("click", function() {

    // पुराना level timer बंद करो
    clearTimeout(levelTimer);

    // Level 1 पर वापस जाओ
    currentLevel = 0;

    // Game को फिर से शुरू करो
    startLevel();

});



// ⭐ Game पहली बार शुरू
startLevel();