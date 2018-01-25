module.exports = {
  servers: {
    one: {
      host: '209.250.255.230',
      username: 'root',
      pem: '~/.ssh/id_rsa'
    }
  },
  meteor: {
    name: 'JS_Ankara',
    path: '../',
    docker: {
      image: 'abernix/meteord:base',
      port: 3000
    },
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'http://209.250.255.230',
      MONGO_URL: 'mongodb://localhost/meteor',
      PORT: 3000
    },
    deployCheckPort: 3000,
  },
  mongo: {
    version: '3.4.1',
    servers: {
      one: {
        env: {
          PORT: 3000
        }
      }
    }
  }
};