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





registerUser() {
		var self = this;
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://localhost:1337/register",
			"method": "POST",
			"headers": {
				"cache-control": "no-cache",
				"postman-token": "252b5ca9-6076-c4f3-54af-784a9acc0b96",
				"content-type": "application/x-www-form-urlencoded"
			},
			"data": {
				"username": self.state.userName,
				"password": self.state.passValue
			}
		}

		$.ajax(settings).done(function(response) {
			console.log(response);
			if(response.status === "Failed") {
				console.log("Error creating a user");
			}
				store.dispatch({
						type: Actions.REG_USER_SUCCESS,
						payload: {
								username: self.state.userNasme,
								password: self.state.passValue,
								authorized: true
						}

				})
		})
};

getLocations() {
	var self = this;
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:1337/api/oauth/token",
	  "method": "POST",
	  "headers": {
	    "cache-control": "no-cache",
	    "postman-token": "7546f3b5-6f1e-f880-53f3-057c914848a8",
	    "content-type": "application/x-www-form-urlencoded"
	  },
	  "data": {
	    "grant_type": "password",
	    "client_id": //client_id,
	    "client_secret": //client_secret,
	    "username": //username
	    "password": //password
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}

getToken() {
	var self = this;
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:1337/api/oauth/token",
	  "method": "POST",
	  "headers": {
	    "cache-control": "no-cache",
	    "postman-token": "7546f3b5-6f1e-f880-53f3-057c914848a8",
	    "content-type": "application/x-www-form-urlencoded"
	  },
	  "data": {
	    "grant_type": "password",
	    "client_id": //client_id,
	    "client_secret": //client_secret,
	    "username": //username
	    "password": //password
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}

getLocations() {
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:1337/api/locations",
  "method": "GET",
  "headers": {
    "authorization": "Bearer ",// + token,
    "cache-control": "no-cache",
    "postman-token": "0ae3beb9-2052-22ae-6766-6c9243adcdae"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}

getPathes() {
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:1337/api/pathes/myapi",
	  "method": "GET",
	  "headers": {
	    "authorization": "Bearer ",// + token,
	    "cache-control": "no-cache",
	    "postman-token": "7369e9d8-f3d5-d5ba-40b2-31b8d1a27110"
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}
