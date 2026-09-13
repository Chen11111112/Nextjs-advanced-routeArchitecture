import mysql from "mysql2/promise";

const globalForMysql = globalThis as unknown as {
  __mysqlPool: mysql.Pool | undefined;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env: ${name}`);
  }
  return value;
}

function createNewPool() {
  return mysql.createPool({
    host: getRequiredEnv("DB_HOST"),
    port: Number(process.env.DB_PORT || 3306),
    user: getRequiredEnv("DB_USER"),
    // password: getRequiredEnv("DB_PASSWORD"),
    database: getRequiredEnv("DB_NAME"),
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  });
}

export const pool =
  process.env.NODE_ENV !== "production"
    ? globalForMysql.__mysqlPool || (globalForMysql.__mysqlPool = createNewPool())
    : createNewPool();