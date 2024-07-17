/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://interviewdb_owner:FfogLr1CTO5J@ep-silent-hat-a5y1puef.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require'
    }
  };
  
