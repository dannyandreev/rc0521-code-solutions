/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  if(isEmpty(queue)){
    return undefined
  }

  console.log(queue.print())
  let val = queue.dequeue()
  if(isEmpty(queue)){
    return val
  }


  while(queue.peek()<=val){
    console.log(queue.print())
    val = queue.peek()
    queue.enqueue(queue.dequeue())
  }
  console.log(queue.print())
  console.log(' ')
  return val

}
