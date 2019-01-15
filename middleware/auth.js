export default function({store, redirect}) {
	if (store.state.login_account == null) {
		redirect('/');
	} else {
		// redirect('/home');
	}
}