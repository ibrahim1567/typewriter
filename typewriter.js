let writer = "Hello there from Lighthouse Labs\n";
let delay = 0;
for (const char of writer) {
  setTimeout(() => {process.stdout.write(char);
  },delay += 100)
}