Azalead provides a REST API for company identification (CID). This API is the best way to integrate with your marketing automation, your CRM or your content management system.
Azalead API exposes endpoints allow you to retrieve the company corresponding either to an IP address or a domain.
<br/><br/>
Before diving into the endpoints below, developers can read our <a href="https://developers.azalead.com/rest-api-getting-started" target="_parent">"Getting Started"</a> section for an overview of high-level concepts as well as some use cases.

## Overview
<br/>Use of this API requires an Azalead CID API key.

<span id="api-_-BaseURL"/>

### Base URL
All URLs referenced in the documentation have the following base:

````
https://api.azalead.com/cid
````

<span id="api-_-Schema"/>

### Schema

-   All API access is over `https`.

-   All data is sent and received as JSON.

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
| `apikey`       | Contains the CID API Key you will obtain from Azalead


### Cross Origin Resource Sharing

The API does not support natively Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If you need to perform such requests please contact your Customer Success Manager.

<span id="api-_-Response"/>

### Response

####  HTTP headers

| **Header**     | **Description** |
| -------------- |----------------------------------------|
| `apikey`       | Contains the CID API Key you will obtain from Azalead |
| `Access-Control-Allow-Headers ` | value `Content-Type, Access-Control-Allow-Headers, apikey, X-Requested-With` |
| `Access-Control-Allow-Methods` | value `GET`|
| `Access-Control-Allow-Origin` | value `*` |
| `Access-Control-Expose-Headers ` | value `apikey` |


#### Errors

-   `401 Unauthorized` when no api key is specified 

````json
HTTP/1.1 401 Unauthorized
{
  "title": "Unauthorized",
  "status": 401,
  "detail": "Full authentication is required to access this resource"
}
````

-   `403 Forbidden`

````json
HTTP/1.1 403 Forbidden
{
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is denied"
}
````

-   `400 Bad Request`  

```JSON
HTTP/1.1 400 Bad Request
{
  "title": "Bad Request",
  "status": 400,
  "detail": "Required request body is missing"
}
```

-   `405 Method Not Allowed`

````JSON
HTTP/1.1 405 Method Not Allowed
{
  "title": "Method Not Allowed",
  "status": 405,
  "detail": "Request method 'GET' not supported"
}
````


-   `406 Method Not Allowed`

````JSON
HTTP/1.1 406 Method Not Allowed
{
  "title": "Not Acceptable",
  "status": 406,
  "detail": "Request content not sufficient to generate response entity"
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

````json
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
