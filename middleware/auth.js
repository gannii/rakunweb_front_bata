export default function({store, redirect}) {

console.log(store.state.login_account);

	if (store.state.login_account == null) {

		redirect('/');

	}

}