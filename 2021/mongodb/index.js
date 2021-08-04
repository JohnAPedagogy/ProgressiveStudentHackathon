const client = stitch.Stitch.initializeDefaultAppClient('progressive-student-ljdmz');
const db = client.getServiceClient(stitch.RemoteMongoClient.factory,'mongodb-atlas').db('progressive');

function run_query(q) {
  return client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user => {
    // document.getElementById('auth-status').innerHTML = 
    //   `Logged in ${user.id}`;
      console.dir(user);
			return db.collection('Songs').aggregate(q).asArray()
			 .then(docs => {
			 	console.dir(docs);
			 	 const html = docs.map(c => "<div>" + c.Title + "</div>").join("");
			 	 document.getElementById("test").innerHTML = html;
			 }).catch(err => {
			 	console.error(err);
			 })
	});
}
// const app = new Realm.App({ id: "<Your App ID>" });
// window.onload = initializeAndLogin;

function samplequery() {
	const q = [{$sort:{order_date:-1}},{$skip:hchcs.pageSkip*pageSize},{$limit:pageSize}];
		run_query(q1).then(docs=>{ 
					console.log("found "+docs.length+" student!");
					hchcs.pageCount=Math.floor(docs.length/pageSize);//+1;
		}).catch(err=> {
				//dbg("Ooops! Something went wrong!", response.errors[0].message);
				console.error(err);
		});
}
/*
 * 
 * 
GroupID:1
ID:2,
LastName:"Betty"
OtherNames:"Boop"
SGCode:""
UniCode:"u0001111"
StartDate:"2021-01-01"
 * 
 * /