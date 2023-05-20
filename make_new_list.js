const fs = require("fs"),
      prompt = require("prompt-sync")(),

      library = fs.readFileSync("all_games.txt").toString().split("\n"),
      excluded = fs.readFileSync("excluded_games.txt").toString().split("\n"),
      included = []

console.log("blank for yes, n (or anything else) for no.")
for (let game of library) {
    game = game.split(";")[0]
    if (excluded.includes(game)) continue

    const answer = prompt(`include ${game}? `)
    if (answer.length === 0) {
	included.push(game)
    } else {
	excluded.push(game)
	console.log(`Excluding ${game}.`)
    }
}

fs.writeFileSync("included_games.txt", included.join("\n"))
fs.writeFileSync("excluded_games.txt", excluded.join("\n"))
console.log("Wrote included_games.txt and excluded_games.txt.")
