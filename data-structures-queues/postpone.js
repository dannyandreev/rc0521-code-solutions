/* exported postpone */

function postpone(queue) {
  if(isEmpty(queue)){
    return false
  } else {
    let tempVal = queue.dequeue()
    queue.enqueue(tempVal)
    return queue
  }
}
