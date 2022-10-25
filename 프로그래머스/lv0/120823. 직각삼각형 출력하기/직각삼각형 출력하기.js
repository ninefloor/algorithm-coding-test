const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  let i = 1;
  while (i <= Number(line)) {
    let star = ''
    for (let j = 1; j <= i; j++){
      star += '*';
    }
    input.push(star);
    i++;
  }
}).on("close", function () {
  input.forEach((el) => {
    console.log(el);
  });
});
