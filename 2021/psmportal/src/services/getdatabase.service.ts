import { Injectable } from '@angular/core';
import * as Realm from "realm-web";


@Injectable({
  providedIn: 'root'
})
export class GetdatabaseService {


  constructor() {

   }

  sayHello(value : string){
    console.log('You pressed: ' + value);
  }

  async init_db():Promise<any>{
    const app: Realm.App = new Realm.App({ id: "progressive-student-ljdmz" });
  
  
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      if(app.currentUser)console.log(user.id === app.currentUser.id?"Login Successful!":"Invalid user!")
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
}
    
// const credential = new stitch.UserApiKeyCredential("KqbNcVLKlxtjzdVPx4GVlW49FvZsfmPGUjmiQWzvQoO5gXHTIi6LFObae9jXFTvw")
// const client = stitch.Stitch.initializeDefaultAppClient('progressive-student-ljdmz');
// client.auth.loginWithCredential(credential)
// .then(authedId => {
//     console.log(`successfully logged in with id: ${authedId}`);
// })
// .catch(err => console.error(`login failed with error: ${err}`));

// const db = client.getServiceClient(stitch.RemoteMongoClient.factory,'mongodb-atlas').db('progressive');



// function createTable(q,t) {
//     return db.collection(t).find(q).asArray()
//         .then(docs => {
//         console.dir(docs);
//         //const props=Object.keys(c)
//         const stringTest = "<th scope='col'>"
    
//         const html = "<thead> <tr> " + Object.keys(docs[0]).map(c=>stringTest+c+"</th>").join("")+"</tr> </thead><tbody>"
//         + docs.map(c => {
//             y = (Object.keys(c).map(v=> "<td>" + c[v] + "</td>")).join("");
//             return "<tr>" + y + "</tr>"

//         }).join("") + "</tbody>";
//         document.getElementById("table1").innerHTML = html;
//         console.log(html);
//         return docs;
//     }).catch(err => {
//         console.error(err);
//     });
// }

