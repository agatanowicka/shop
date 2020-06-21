const stage = process.env.NODE_ENV;
let backendLink = '/api';
if(stage === 'development') {
    backendLink = 'http://localhost:3000/api';
}

module.exports = backendLink;