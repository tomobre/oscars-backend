const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    VERSION: Joi.string().default("NON_GIVEN").description("API Version"),
    PORT: Joi.number().default(3000),
    DB_TYPE: Joi.string()
      .valid("sqlite", "sqlite3", "postgres")
      .required()
      .description("DB Type"),
    DB_HOST: Joi.string()
      .default("./database.sqlite")
      .required()
      .description("DB Host"),
    DB_PORT: Joi.string().required().description("DB Port"),
    DB_USERNAME: Joi.string().required().description("DB Username"),
    DB_PASSWORD: Joi.string().required().description("DB Password"),
    DB_DATABASE: Joi.string().required().description("DB Database"),
    MAXMIND_LICENSE_KEY: Joi.string()
      .required()
      .description("Geolocation API key"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

let finalPrivateKey = "";
if (envVars.NODE_ENV === "production") {
  finalPrivateKey = envVars.FIREBASE_ADMIN_PRIVATE_KEY;
  finalPrivateKey = finalPrivateKey.replace(/\\n/g, "\n");
} else {
  finalPrivateKey = envVars.FIREBASE_ADMIN_PRIVATE_KEY;
}

const settings = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  url: envVars.URL,
  version: envVars.VERSION,
  db_settings: {
    type: envVars.DB_TYPE,
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
  },
  maxmind_license_key: envVars.MAXMIND_LICENSE_KEY,
};

module.exports = settings;
