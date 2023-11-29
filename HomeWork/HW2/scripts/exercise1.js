function test1(n) {
  if (n === 1) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    // cost = 3 times = n
    for (let j = 1; j <= n; i++) {
      // cost = 3 times = 1
      console.log("*");
      break;
    }
  }
} // best 0(1), worst 3(n)*3+1 = 0(n)
