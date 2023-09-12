### Stacks and Queues

- this data structures handle temporary data well
- they are more about elegant code than about performance

#### Stacks

- This is basically an array with this constrains:

  - data are written at the and of the array
  - data are read from the last element of the array
  - data can be deleted from the end of the stack

- common analogy: dishes
- "top" is refering to the end of the stack
- "bottom" is refering to the beggining of the stack

- "pushing onto the stack" -> add a new element to the stack
- "popping from the stack" -> delete an element from the stack
- LIFO -> Last In, First Out

- Example of implementation: simple linter, that checks correctness of brackets

#### Queues

- Similar to Stacks, but with FIFO idea -> First In, First Out
- An analogy to a line of people waiting for the theatre
- Horizontal analogy: beggining of the queue is **front** and end of the queus is **back**

- Three constraints

  - Data can be inserted to the back of the queue (similar to stack)
  - Data can be deleted from the front of the queue
  - Data can be read from the front of the queue

- Inserting element to the queue is called **enqueue**
- Removing element from the queue is called **dequeuing**
