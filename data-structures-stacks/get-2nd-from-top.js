/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if(isEmpty(stack)) return undefined
  let pool = new Stack()

  pool.push(stack.pop())

  val = stack.peek()

  stack.push(pool.pop())

  return val
}
