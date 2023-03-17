module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "pass1516",
  DB: "postgres",
  dialect: "postgresql",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
