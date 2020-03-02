# Public API for Family House Mobile App
Welcome to the official public API for the Family House Mobile App project!

This service supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and requires no authentication to use. All responses are sent over HTTPS as well.


## Base URL
https://familyhouse.it.pointpark.edu:3000/api/v1/

# Services
## **GET** /

*List a single entry selected at random*

### Parameters
Parameter | Type | Data Type | Description | Required
| --- | --- | --- | --- | --- |
| faq | api/v1 | string | ALL or by ID) | No |
| linens | api/v1 | string | ALL or by ID) | No |
| events | api/v1 | string | ALL or by ID) | No |

## **POST** /

*List a single entry selected at random*

### Parameters
Parameter | Type | Data Type | Description | Required
| --- | --- | --- | --- | --- |
| linens | api/v1 | string | ALL or by ID) | No |
| events | api/v1 | string | ALL or by ID) | No |

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'rlyft', require 'lyft'
```
