/* exported takeNextSmallest */


function takeNextSmallest(queue) {
  if(isEmpty(queue)){
    return undefined
  }

  let val = queue.dequeue()
  if(isEmpty(queue)){
    return val
  }

  while(val > queue.peek()){
    queue.enqueue(val)
    val = queue.dequeue()
  }

return val
}
