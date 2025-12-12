function sommeIterative(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}
function sommeRecursive(n) {
  if (n == o) return 0;
  return n + sommeRecursive(n - 1);
}
