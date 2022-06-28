# NextBrave-backend

This backend was created using typescript-express-starter package, based in many common packages 

- Application
  - Typescript
  - Express
- Testing
  - Jest 
- Database
  - TypeORM
  - Postgres
- Documentation
  - Swager
- Dev
  - Nodemon
- DevOps
  - PM2
  - eslint
  - prettier
  - swc
  - winston
  - husky

## Execution
### Requirements
- node 14
- npm 
- PostgreSQL(database and credentials)

Run in the folder:
```
npm install
```
### Dev Environment
#### Step 1
Create the file .env.development.local configuration, similar to .env.environment.local.template file, then update the file with your own database configurations
#### Step 2
Execute 

```
npm run dev
```
if you want to execute unit tests

```
npm run test
```

if you want to see linter warnings and errors

```
npm run lint
```

### Prod Environment
#### Step 1
modify .env.production.local configuration, similar to .env.environment.local.template file, then update the file with production database configurations
##### Step 2
Execute 

```
npm start
```
if you want to deploy with pm2 execute
```
npm run deploy:prod
```