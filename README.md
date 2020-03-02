# Public API for Family House Mobile App
Welcome to the official public API for the Family House Mobile App project!

This service supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and requires no authentication to use. All responses are sent over HTTPS as well.


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

```ruby
gem 'rlyft', require 'lyft'
```
