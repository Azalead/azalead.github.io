Azalead provides a REST API. This API is the best way to integrate with your marketing automation, your CRM or your content management system.
Azalead API exposes endpoints to follow your account’s activities, manage your account lists and administrate your Azalead organization.
<br/><br/>
Before diving into the endpoints below, developers can read our <a href="https://developers.azalead.com/rest-api-getting-started" target="_parent">"Getting Started"</a> section for an overview of high-level concepts as well as some use cases.

## Overview
<br/>Use of this API requires an <a href="http://go.azalead.com/l/85062/2015-09-23/bqfw7" target="_blank">Azalead user account.</a>

<span id="api-_-BaseURL"/>

### Base URL
All URLs referenced in the documentation have the following base:

````
https://api.azalead.com/latest
````

<span id="api-_-Schema"/>

### Schema

-   All API access is over `https`.

-   All data is sent and received as JSON.

-   Blank fields are included as null instead of being omitted.

-   All dates are returned as `timestamps` (_in milliseconds_) .

<span id="api-_-Request"/>

### Request
> All requests to Azalead's REST API require you to authenticate.

#### HTTP Verbs

Where possible, Azalead api strives to use the appropriate HTTP verb to each action :

| **Verb**    | **Description** |
| ----------- |----------------------------------------|
| `GET`       | Retrieves resources. |
| `POST`      | Creates  resources. |
| `PATCH`     | Updates resources with a partial JSON data. |
| `DELETE`    | Deletes resources. |

####  HTTP headers

| **Header**     | **Description** |
| -------------- |----------------------------------------|
| `Content-type` | Mandatory when performing a `POST` or a `PATCH` request. Accepted value: `application/json;charset=UTF-8`.|
| `X-Auth-token` | Contains the user's authentication  token returned by the <a href="#api-Authentication">authentication endpoint</a> prefixed by `Bearer `.|


### Cross Origin Resource Sharing

The API does not support natively Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If you need to perform such requests please contact your Customer Success Manager.

<span id="api-_-Response"/>

### Response

####  HTTP headers

| **Header**     | **Description** |
| -------------- |----------------------------------------|
| `X-Auth-token` | An updated version of the user's token. |
| `X-Count`      | The actual number of objects in the response. |
| `X-Total-Count`| The actual number of objects matching the request. |
| `X-Page`       | The actual page number on the pageable endpoints. |
| `X-Page-size`  | The actual page size on the pageable endpoints. |
| `Access-Control-Allow-Headers ` | value `Content-Type, Access-Control-Allow-Headers, x-auth-token, X-Requested-With,username,password` |
| `Access-Control-Allow-Methods` | value `POST, PATCH, GET, OPTIONS, DELETE`|
| `Access-Control-Allow-Origin` | value `*` |
| `Access-Control-Expose-Headers ` | value `X-Auth-token,X-Count,X-Total-count` |


#### Errors

-   `401 Unauthorized` when no token is specified, the token expired, or the authenticated user does not have access to the requested resource.

```` JSON
HTTP/1.1 401 Unauthorized
 {
  "timestamp": 1470831446391,
  "status": 401,
  "error": "Unauthorized",
  "message": "Full authentication is required to access this resource",
  "path": "/latest/resource/1234"
 }
````

-   `403 Forbidden`

```` JSON
HTTP/1.1 403 Forbidden
{
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is denied"
}
````

-   `400 Bad Request`  

````JSON
HTTP/1.1 400 Bad Request
{
  "title": "Bad Request",
  "status": 400,
  "detail": "Required request body is missing"
}
````

-   `405 Method Not Allowed`

````JSON
HTTP/1.1 405 Method Not Allowed
{
  "title": "Method Not Allowed",
  "status": 405
}
````

-   `429 Too Many Requests`

````JSON
HTTP/1.1 429 Too Many Requests
{
  "message":"API rate limit exceeded"
}
````

-   `500 Internal Server Error`

````
HTTP/1.1 500 Internal Server Error
{
  "title": "Internal Server Error",
  "status": 500,
  "detail": "Something went wrong on our end. Please contact the support."
}
````




<span id="api-_-Help"/>

### Getting help

Having trouble with Azalead api ? We can help!
-   Ask a question - we are on <a href="https://gitter.im/azalead/azalead-api" target="_blank">gitter</a>.
-   Found a bug ?  <a href="https://github.com/Azalead/azalead.github.io/issues" target="_blank">let us know</a>.
