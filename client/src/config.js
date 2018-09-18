const local = {
    serverName: 'http://localhost:3000'
};

const prod = {
    serverName: 'http://localhost:3000'
};

console.log(process.env);
const config = process.env.REACT_APP_STAGE === 'local'
    ? local
    : dev;

export default {
    config
};