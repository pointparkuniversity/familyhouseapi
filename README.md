# Public API for Family House Mobile App
Welcome to the official public API for the Family House Mobile App project!

This service supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and requires no authentication to use. All responses are sent over HTTPS as well.


## Base URL
https://familyhouse.it.pointpark.edu:3000/api/v1/

# Services
## **GET** /entries

*List all entries currently cataloged in the project*

### Parameters
Parameter | Type | Data Type | Description | Required
| --- | --- | --- | --- | --- |
| faq | api/v1 | string | ALL or by ID) | No |
