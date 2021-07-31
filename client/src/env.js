const env = 'production'

const EMAIL = 'admin@fantasticflamesentertainment.com'
const MAIN_TITLE = 'Fantastic Flames'

let API, PUBLIC
if (env == 'production') {
	// the api will be the EIP of the EC2 instance on AWS
	API = 'http://18.118.48.38/api'
	PUBLIC = 'http://18.118.48.38'
} else {
	API = 'http://localhost:8080/api'
	PUBLIC = 'http://localhost:8080'
}

export { EMAIL, MAIN_TITLE, API, PUBLIC }
