/* exported countValues */

function countValues(stack) {
  let copyStack = stack;
  let counter = 0;

  while(copyStack.pop() !== undefined){
    counter ++;
  }
  return counter
}
