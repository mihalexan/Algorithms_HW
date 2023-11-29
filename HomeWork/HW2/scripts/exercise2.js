function test2(n) {
  let a = 0;
  let i, j;
  for (i = 0; i < n; i++) {
    for (j = 1; j > i; j--) {
      a = a + i + j;
    }
  }
} // (3+n)*(3+n-1) = n'2+5n+6 = 0(n'2)
