const string = "paypalishiring".toUpperCase();

let y1 = [], y2 = [], y3 = [];

for (const [i, letter] of Array.from(string).entries()) {
  if (i === 0 || i % 4 === 0) {
    y1.push(letter);
  } else if (i === 1 || i % 2 === 1) {
    y2.push(letter);
  } else {
    y3.push(letter);
  }
}

console.log(`
${y1.join(" ")}
${y2.join("")}
${y3.join(" ")}
`);