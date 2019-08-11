import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID c33b7b035b298b15f8e11ccf6bfa44294a0bd0014e50360e36caa5b2c1ffe969'
	}
});