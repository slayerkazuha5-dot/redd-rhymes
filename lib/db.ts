import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

export function getDbPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'u603158705_admin',
      password: process.env.DB_PASSWORD || 'Redrhymes@21',
      database: process.env.DB_NAME || 'u603158705_redrhymes',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}
