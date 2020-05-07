import allowedOrigin from "./allowedOrigin";
export default {
	PORT: 4000,
	HTTPS: {
		enable: false,
		keyPath: '',
		certPath: ''
  },
  whitelist: {
    enable: true,
    allowedOrigin
  },
	mysql: {
		mysqlConfig: {
			host: 'localhost',
			user: '',
			password: '',
			database: ''
		}
	},
	mongodb: {
		mongodbConfig: {
			host: 'localhost',
			port: '27017',
			dbName: 'start-node-mongodb'
		}
	}
};
