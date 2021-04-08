/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // sort cleanPile and dirtyPile in ascending order
  cleanPile.sort((a, b) => a - b);
  dirtyPile.sort((a, b) => a - b);
  // initialize a count and empty stack
  let count = 0;
  let stack = [];
  stack.push(cleanPile[0]);
  // loop through cleanPile to find matching socks and increment count
  for (let i = 1; i < cleanPile.length; i++) {
    if (cleanPile[i] == stack[stack.length - 1]) {
      count++;
      stack.pop();
    } else {
      stack.push(cleanPile[i]);
    }
  }
  // find paired socks in stack and dirtyPile based on number of washes
  // splice dirtyPile when paired sock is found in dirtyPile
  if (noOfWashes > 0 && stack.length !== 0) {
    for (let j = 0; j < stack.length; j++) {
      if (dirtyPile.includes(stack[j])) {
        let index = dirtyPile.findIndex((value) => value === stack[j]);
        count++;
        noOfWashes--;
        dirtyPile.splice(index, 1);
      }
    }
  }

  let holder = [];
  holder.push(dirtyPile[0]);
  // loop through diryPile to find paired socks, increment count and decrease noOfWashes
  for (let k = 1; k < dirtyPile.length; k++) {
    if (noOfWashes >= 2) {
      if (dirtyPile[k] == holder[holder.length - 1]) {
        count++;
        noOfWashes = noOfWashes - 2;
        holder.pop();
      } else {
        holder.push(dirtyPile[k]);
      }
    }
  }

  //console.log("Count = ", count)
  //console.log("Number of washes left = ", noOfWashes)
  return count;
}

