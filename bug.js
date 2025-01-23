```javascript
const query = { name: 'John Doe' };

// Incorrect use of $inc operator. It should be an integer or a number.
const update = { $inc: { age: '1' } }; //error

//correct use of $inc operator.
// const update = { $inc: { age: 1 } };

const options = { upsert: true, new: true };

db.collection('users').findOneAndUpdate(query, update, options)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```