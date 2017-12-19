function random(low, high) {
  let result = Math.random() * ((high - low) + low);
  return parseInt(result);
}
