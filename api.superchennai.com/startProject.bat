@echo off
echo Running DB migrations...
npx knex migrate:latest

echo Starting the project...
npm run dev

pause
