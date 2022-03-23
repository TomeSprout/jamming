const clientId = '';
let accessToken;

const Spotify = {
	getAccessToken () {
		if (accessToken) return accessToken;

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);

			// Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
			window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');

			return accessToken;
		}
	},

	// setAccessToken () {},
};

export default Spotify;
