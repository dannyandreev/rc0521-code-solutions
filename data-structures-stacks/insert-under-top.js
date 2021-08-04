/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if(isEmpty(stack)) return undefined

  let pool = new Stack()

  pool.push(stack.pop())
  stack.push(value)
  stack.push(pool.pop())

}
