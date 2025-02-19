import sql from "mssql";

const sqlConfig = {
  user: process.env.DB_USER || "user",
  password: process.env.DB_PWD || "password",
  database: process.env.DB_NAME || "db_name",
  server: "server_name",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  // port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const db = async () => {
  await sql.connect(sqlConfig);
  return {
    query: async (queryString, params = []) => {
      const request = new sql.Request();
      params.forEach(({ name, type, value }) => {
        request.input(name, type, value);
      });
      return request.query(queryString);
    },
    close: async () => {
      await sql.close();
    },
    sql,
  };
};

export default db;
