const axios = require('axios');
const express = require('express');

const exphbs = require('express-handlebars');
// const qs = require("qs");
// const getTermPublicKey = 'TnuOGEueZmOX36CyTXeyXwmYv0AwRDnR';
// const getTermSecretKey = 'pLLmhDmvLtWmvKl6';
const getTextbookPublicKey = 'Yl8lgkJbZUoGo3A5GZGAmNZf5PCvM45n';
const getTextbookSecretKey = 'JLku2OLJXiVIQ4Wc';
const grantType = 'client_credentials';
const year = 2020;
const term = 'Winter';
let getTermAccessToken, getTextbookAccessToken;
const params = new URLSearchParams();
const bodyParser = require('body-parser');
const app = express();
let results;
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.post('/search', async (req, res) => {
	console.log(req.body);
	results = await getTextbook(req.body.major, req.body.courseNumber);

	console.log('Results: ');
	console.log(results);
	res.status(200);
	res.end();
	// res.render('home');
});

app.use(express.static('public'));

app.listen(3000, () => console.log('server is running on port 3000..'));

// Get access token
function getTextbook(subject, courseNumber) {
	params.append('client_id', getTextbookPublicKey);
	params.append('client_secret', getTextbookSecretKey);
	params.append('grant_type', grantType);
	return axios
		.post('https://api.oregonstate.edu/oauth2/token', params)
		.then((res) => {
			getTextbookAccessToken = 'Bearer ' + res.data.access_token;
			// console.log(getTextbookAccessToken);
			return axios
				.get('https://api.oregonstate.edu/v1/textbooks', {
					params: {
						academicYear: year,
						term: term,
						subject: subject,
						courseNumber: courseNumber
					},
					headers: {
						Authorization: getTextbookAccessToken
					}
				})
				.then((res) => {
					// console.log(res.data.data);
					return res.data.data;
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => console.log(err));
}
