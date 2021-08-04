/* exported takeSmaller */
function takeSmaller(queue) {
  if(isEmpty(queue)){
    return undefined
  }
  let smallest = queue.dequeue()
  if(isEmpty(queue)){
    return smallest
  }
  if(queue.peek()<smallest){
    queue.enqueue(smallest)
    return queue.dequeue()
  } else {
    queue.enqueue(queue.dequeue())
    return smallest
  }
}
