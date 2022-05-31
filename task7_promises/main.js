const pageTitle = document.createElement('h1');
pageTitle.textContent = "Promises intro"
document.body.appendChild(pageTitle);


// const fakeRequest = (url)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const rand = Math.random()
//             if(rand<0.3){
//                 reject()
//             }
//             else{
//                 resolve()
//             }
//         }, 3000)
//     })
// }
// fakeRequest()
// .then(()=>{
//     console.log("Resolved")
// })
// .catch(()=>{
//     console.log("Rejected")

// })

const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pages ={
                '/users':[
                    {id:1, username: 'Bilbo'},
                    {id:2, username: 'Esmeralda'},
                ], 
                '/users/1':{
                    id : 1, 
                    username : 'Bilbo', 
                    upvotes: 360, 
                    city: 'Lisbon',
                    topPostId: 456543
                },
                '/users/5':{
                    id : 5, 
                    username : 'Esmeralda', 
                    upvotes: 571, 
                    city: 'Honolulu',
                },
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('OH NO!', err);
	});