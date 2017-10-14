function ClozeCard(text, cloze) {
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.fullText = text;

	if (!text.includes(cloze)) {
		throw "Cloze Text is not present in Full Text"
	}
};
module.exports = ClozeCard;
