var cardFile = "cards.json";

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var library = require("./" + cardFile);
var fs = require("fs");

function menu() {
	inquirer.prompt([
		{
			type: "list",
			message: "\nPlease choose an option\n",
			choices: ["Create Basic Card", "Create Cloze Card", "Show All Cards", "Exit"],
			name: "options"
		}
  ]).then(function (answer) {
		switch (answer.options) {
			case 'Create Basic Card':
				createBasicCard();
				break;
			case 'Create Cloze Card':
				createClozeCard();
				break;
			case 'Show All Cards':
				showCards();
				break;
			case 'Exit':
				console.log("\nThank you for using the Flashcard Generator!")
				return;
			default:
				console.log("\nInvalid Response\n");
		}
	});
}

menu();

function createCard(type, param1, param2) {
	inquirer.prompt([
		{
			type: "input",
			name: "param1",
			message: param1 + "\n"
		},
		{
			type: "input",
			name: "param2",
			message: param2 + "\n"
		}
	]).then(function (card) {
		var newCard;
		try {
			if (type === "Basic") {
				newCard = new BasicCard(card.param1, card.param2);
			} else {
				newCard = new ClozeCard(card.param1, card.param2);
			}
			library.push(newCard);
			fs.writeFile(cardFile, JSON.stringify(library));
		} catch {}
		menu();
	});
}

function createBasicCard() {
	createCard("Basic", "Question (Front)", "Answer (Back)");
}

function createClozeCard() {
	createCard("Cloze", "Full Text", "Cloze portion");
}

function showCards() {
	console.log("Show All Cards!");
}
