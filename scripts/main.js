"use stict";

const difficultySelectorElement = document.getElementById("difficulty_selector");
const minefieldCreatorElement = document.getElementById("minefield_creator");
const minefieldElement = document.getElementById("minefield");

minefieldCreatorElement.addEventListener("click", clickMinefieldCreator);



function clickMinefieldCreator() {

    const difficulty = parseInt(difficultySelectorElement.value);

    console.log(difficulty);

}

/**
 * Creates a single minefield cell
 * @param {string} cellContent Content of the created cell
 * @returns {HTMLDivElement} Minefield cell
 */

function cellCreator (cellContent) {

    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.innerHTML = cellContent;

    return cell;

}

/**
 * Creates minefiled
 * @param {number} difficultyArgument Number of cells to put in minefield
 */

function minefieldCreator (difficultyArgument) {

    for (let i = 0; i < difficultyArgument; i++) {

        cellCreator(i);

    }

}