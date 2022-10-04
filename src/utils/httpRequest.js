import { getDatabase, ref, onValue, set, push, remove, child } from 'firebase/database';

import { app as firebase } from '~/server/fireBase';
export const database = getDatabase();

// Get method
export const getCourses = ref(database, 'data');
// const get = onValue(getCourses, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });

// Put method
// set(ref(database, 'data/1'), {
//   id: 4,
//   name: 'long',
// });

// Post method
// push(ref(database, 'data/'), {
//   name: 'long1',
// });

// Delete method
// const database = getDatabase(connect);
// var data = ref(database, 'data/');
// let id;
// remove(child(data, id));
