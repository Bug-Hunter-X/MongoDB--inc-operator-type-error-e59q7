```javascript
const query = { name: 'John Doe' };

// Correct use of $inc operator.
const update = { $inc: { age: 1 } };

const options = { upsert: true, new: true };

db.collection('users').findOneAndUpdate(query, update, options)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```