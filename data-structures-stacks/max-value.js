/* exported maxValue */

function maxValue(stack) {

  if(isEmpty(stack)){
    return -Infinity
  }

  let maxVal = stack.pop();
  let val = maxVal
  while(val !== undefined){
    if(maxVal < val) {
      maxVal = val
    }
  val = stack.pop()
  }
  return maxVal
}
