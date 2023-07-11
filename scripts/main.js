"use stict";

const difficultySelectorElement = document.getElementById("difficulty_selector");
const minefieldCreatorElement = document.getElementById("minefield_creator");
const minefieldElement = document.getElementById("minefield");

minefieldCreatorElement.addEventListener("click", clickMinefieldCreator);



function clickMinefieldCreator() {

    const difficulty = parseInt(difficultySelectorElement.value);

    const createdMinefield = minefieldCreator(difficulty);

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

    const minefield = [];

    for (let i = 0; i < difficultyArgument; i++) {

        const createdCell = cellCreator(i);

        minefield.push(createdCell);

    }

    return minefield;

}

/**
 * Adds minefield to Html
 * @param {HTMLDivElement} minefieldContainer 
 * @param {[]} cellList 
 */

function minefieldOutput(minefieldContainer, cellList) {



}