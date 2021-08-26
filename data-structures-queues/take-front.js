/* exported takeFront */

function takeFront(queue) {
  if(isEmpty(queue)){
    return undefined
  } else {
    return queue.dequeue()
  }

}
