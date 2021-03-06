
const credential = new stitch.UserApiKeyCredential("KqbNcVLKlxtjzdVPx4GVlW49FvZsfmPGUjmiQWzvQoO5gXHTIi6LFObae9jXFTvw")
const client = stitch.Stitch.initializeDefaultAppClient('progressive-student-ljdmz');
client.auth.loginWithCredential(credential)
.then(authedId => {
    console.log(`successfully logged in with id: ${authedId}`);
})
.catch(err => console.error(`login failed with error: ${err}`));

const db = client.getServiceClient(stitch.RemoteMongoClient.factory,'mongodb-atlas').db('progressive');

function run_query(q,t) {
    return db.collection(t).find(q).asArray()
        .then(docs => {
        console.dir(docs);
        //const props=Object.keys(c)
        const html = docs.length==0?"":Object.keys(docs[0]).join(" | ")+"<br/>"+docs.map(c => {
            y = Object.keys(c).map(v=>c[v]).join(" | ");

            return "<div>" + y + "</div>"
        }).join("");
        return docs;
    }).catch(err => {
        console.error(err);
    });
}

function createTable(q,t) {
    return db.collection(t).find(q).asArray()
        .then(docs => {
        console.dir(docs);
        //const props=Object.keys(c)
        const stringTest = "<th scope='col'>"
    
        const html = "<thead> <tr> " + Object.keys(docs[0]).map(c=>stringTest+c+"</th>").join("")+"</tr> </thead><tbody>"
        + docs.map(c => {
            y = (Object.keys(c).map(v=> "<td>" + c[v] + "</td>")).join("");
            return "<tr>" + y + "</tr>"

        }).join("") + "</tbody>";
        document.getElementById("table1").innerHTML = html;
        console.log(html);
        return docs;
    }).catch(err => {
        console.error(err);
    });
}




// const app = new Realm.App({ id: "<Your App ID>" });
// window.onload = initializeAndLogin;
function insert_data(table,id,data){
    db.collection(table).updateOne({ID:id},{$set:data}, {upsert:true})
        .then(()=>{
            samplequery(table);
    }).catch(err => {
                console.error(err);
    })
}

function delete_data(table,id){
    //db.posts.remove({ title: 'Post Four' })
    db.collection(table).deleteOne({ID:id})
        .then(()=>{
            samplequery(table);
    }).catch(err => {
                console.error(err);
    })
}

function samplequery(table) {
    const q = { } //[{$sort:{order_date:-1}},{$skip:hchcs.pageSkip*pageSize},{$limit:pageSize}];
        run_query(q,table).then(docs=>{ 
            console.log("found "+docs.length+" document(s)!");
        }).catch(err=> {
                //dbg("Ooops! Something went wrong!", response.errors[0].message);
                console.error(err);
        });
}

const data =   {
    "TaskType": "unsure",
    "RPAGType":"Attendance",
    "TaskName": "Attendance",
    "DueWeek": 2,
    "DueLesson": 1
}

const Student1 = {
    "fName": "Francisco",
    "lname":"Hernandez",
    "uNumber": "u1975966",
    "SGCode": "12222",
    "Pathway": "Comp. System Eng.",
    "GroupNumber": 1
}



//Person
// samplequery('Person');
createTable({},'Person');
// delete_data('ModuleTask', 1);


//insert_data('ModuleTask', 2, data);





