const dev = {
    serverName: 'http://localhost:3000'
};

const prod = {
    serverName: 'http://localhost:3000'
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    config
};