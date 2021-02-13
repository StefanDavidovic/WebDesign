function loadBooks(onData) {
  const database = firebase.database();
  const ref = database.ref('books');
  ref.on('value', onData, errData);
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}
