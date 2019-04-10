function shot() {
  return {
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
  }
}

function moduls(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

function estimate(shots) {
  let IN = 0;
  for (let i = 0; i < shots; i += 1) {
    const point = shot();
    if (moduls(point) < 1) {
      IN += 1;
    }
  }
  return 4 * IN / shots;
}

console.log(estimate(100000));
