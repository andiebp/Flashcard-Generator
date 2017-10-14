function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
    this.fulltext = text;

    if (!text.contains(cloze)) {
        console.log("This does not work");
    }
};
module.exports = ClozeCard;