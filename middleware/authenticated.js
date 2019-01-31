export default function({app, store, redirect}) {

/*
	if(store.state.login_account == null){

		const p = new Promise((resolve, reject) => {

			var thisAccount = app.$auth.$storage.getUniversal("_token.azureSignIn");

			if(thisAccount){
		  
			// oid加工抽出
				thisAccount = Buffer.from(thisAccount, "base64").toString();
				var _oid = thisAccount.split(',');
				var oid = _oid[4].split(':');
				oid = oid[1].substring(1, oid[1].length-1);
 
				console.log(oid);

				resolve(oid);

			}else{
				return;
			}

		});

		p.then((oid) => {
				
			app.$axios.$get('/initial_setting/' + oid)
			.then((res) => {

				console.log(res);

				if(res.data.account_name){

					app.$axios.$get('/account/' + res.data.account_name + '/' + res.data.account_name)
					.then((res) => {

						store.commit("SET_LOGIN_ACCOUNT", res.data);

						console.log('middleware ===> ' + res.data);

					});
					
				}else{
					
				}

			})

		});

	}
*/

}