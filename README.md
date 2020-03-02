# Public API for Family House Mobile App
Welcome to the official public API for the Family House Mobile App project!

This service supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and requires no authentication to use. All responses are sent over HTTPS as well.

## Current Version
1.0

## Libraries used

#### [Libraries](https://www.npmjs.com/)
```
JavaScript
MySQL as the database environment
Express
Body-Parser
Rest-Api
```

## Base URL
https://familyhouse.it.pointpark.edu:3000/api/v1/

# Services
## **Family House Rest End Points** /

*List a single entry selected at random*

### Parameters
Route | Method | Description
| --- | --- | --- 
| /api/v1/faq | GET| Captures all of the FAQ Data | 
| /api/v1/faq:/faqid | GET| Captures all of the FAQ Data by id number| 
| /api/v1/linens | GET | Captures all of the Linens Data | 
| /api/v1/linens:/linenid | GET | Captures all of the Linens Data by linenid number | 
| /api/v1/events | GET | Captures all of the Events Data | 
| /api/v1/events:/eventid | GET | Captures all of the Events Data by eventid number | 
| /api/v1/linens | POST | Add new linen data (HouseName, RoomNumber, Guests, LinenType) | 
| /api/v1/events | POST | Add new event data(Data Category, Location & Message) | 
| /api/v1/events:/eventid | PUT | Updates the DateCategory, Location and or Message by eventid| 





## Installation

Create Environment:

```
Create Schema 'CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_specification] ...'
```
```
Execute Table Creation Script 'CreateDatabaseEnvironment.sql'
```
Create Node Environment:
Use sudo if on mac or linux
```
 'npm install node.js' (Installs Node JS Environment)
 'npm install nvm' (Installs Node Version Manager)
 'npm install npm' (Installs Package Manager)
 'npm init -y' (Adds JSON File)
```
Install Packages:
```
 'npm install express --save' (Web Framework)
 'npm install body-parser' (request body for passing of params to service)
 'npm install rest-api' (API Framework for NodeJS)
 'npm install mysql' (Driver for mysql)
```
