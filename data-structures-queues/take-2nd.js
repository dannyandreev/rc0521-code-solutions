/* exported take2nd */

function take2nd(queue) {
  if(isEmpty(queue)){
    return undefined
  } else {
    let firstVal = queue.dequeue(queue)
    if(isEmpty(queue)){
      return firstVal
    }
    let secondVal = queue.dequeue(queue)
    queue.enqueue(firstVal)
    return secondVal
  }
}
