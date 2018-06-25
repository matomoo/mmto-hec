import { dbFStore } from "./firebase";

export const GetUsers = dbFStore.collection("users").get();
				// .then((snapshot) => {
				// 	snapshot.forEach(doc => {
				// 		console.log(doc.id, "->",doc.data());
				// 	});
				// })
				// .catch(err => {
				// 	console.log("Error getting doc", err);
				// });
