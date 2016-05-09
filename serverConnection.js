class PrototripServerConnection {
	//on init gets token to be used later
	constructor (clientId, clientSecret, username, password) {
		this._clientId = clientId;
		this._clientSecret = clientSecret;
		this.getToken(username, password);
	};
	
	getToken (username, password) {
		var data = "grant_type=password&client_id=" + this._clientId + "&client_secret=" + this._clientSecret + "&username" + username + "&password=" + password;

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				var res = JSON.parse(this.responseText);
				this._accessToken = res.access_token;
				this._refreshToken = res.refresh_token;
				this._tokenType = res.token_type;
				this._created = Date.now();
				this._expiresIn = res.expires_in;
			}
		});
		
		xhr.open("POST", "http://localhost:1337/api/oauth/token");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.setRequestHeader("postman-token", "d293ce6d-bac4-1102-0e3e-17527527072c");
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		
		xhr.send(data);
	}
	
	checkValid() {
		return this._created + this._expiresIn < Date.now();
	}
	
	refreshToken() {
		var data = "grant_type=refresh_token&client_id=" + this._clientId + "&client_secret=" + this._clientSecret + "&refresh_token=" + this._refreshToken;

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				var res = JSON.parse(this.responseText);
				this._accessToken = res.access_token;
				this._refreshToken = res.refresh_token;
				this._tokenType = res.token_type;
				this._created = Date.now();
				this._expiresIn = res.expires_in;
			}
		});
		
		xhr.open("POST", "http://localhost:1337/api/oauth/token");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.setRequestHeader("postman-token", "d293ce6d-bac4-1102-0e3e-17527527072c");
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		
		xhr.send(data);
	}
	
	exampleGetUserInfo(token) {
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
			}
		});
		
		xhr.open("GET", "http://localhost:1337/api/users/info");
		xhr.setRequestHeader("authorization", "Bearer " + token);
		xhr.send();
	}
}