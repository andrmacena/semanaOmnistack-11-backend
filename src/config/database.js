require('dotenv').config()

module.exports = {
   dialect: 'postgres',
   url: process.env.POSTGRES_URL,
   host: process.env.POSTGRES_HOST,
   username: process.env.POSTGRES_USERNAME,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB, 
   ssl: true,
   define: {
      timestamps: true,
      underscored: true
   }
}
