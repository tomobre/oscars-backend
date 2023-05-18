const { sync } = require("geo-from-ip");
const envconfig = require("../config/config.ts");

//using sync function from geo-from-ip to update geolocation database in postinstall step
// @ts-ignore
sync(envconfig.maxmind_license_key);
