var configValues = {"uname": "Yoav", "pwd": "piisgood"};
var config = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 3141,
    expireTime: 60*60*1000,
    getDbConnectionString: function () {
        return ' ';
    },
    secrets:{
        jwt: process.env.JWT || "uziuz"
    },
};
module.exports = config;