//Looping a triangle

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//FizzBuzz

  for (var number = 1; number <= 100; number++) {
  var output = "";
  if (number % 3 == 0)
    output += "Fizz";
  if (number % 5 == 0)
    output += "Buzz";
  console.log(output || number);
}

//Chess board

var size = 8;

var board = "";

for (var i = 0; i <size; i++) {
  for (var j = 0; j <size; j++) {
    if ((j + i) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
