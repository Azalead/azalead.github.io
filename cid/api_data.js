define({ "api": [
  {
    "type": "get",
    "url": "/cid",
    "title": "Company Identification",
    "version": "0.0.1",
    "name": "CID",
    "group": "CID",
    "permission": [
      {
        "name": "API Consumer with API key."
      }
    ],
    "description": "<p>Returns the company corresponding to either a given IP Address if it exists. If none are given an empty body is returned. This API needs an API Key to be accessed.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/cid?ip_address=:ip_address"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "apikey",
            "description": "<p>Mandatory API key to be able to consume the api</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ip_address",
            "description": "<p>IP address of the company</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Company identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Company name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Company address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Company city</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Company website</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "domain",
            "description": "<p>Company URL domain</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "naceCode",
            "description": "<p>Company NACE code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "legalForm",
            "description": "<p>Company legal status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Company country code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNational",
            "description": "<p>Company national identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "industryId",
            "description": "<p>Identifier of the company's industry</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "industryLabel",
            "description": "<p>Label of the company's industry</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sizeCategory",
            "description": "<p>Company size category</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "employeeCount",
            "description": "<p>Number of employees</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "summary",
            "description": "<p>Company activity summary</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response for ip parameter:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"id\": 165692,\n    \"name\": \"BAYER AG\",\n    \"address\": \"KAISER WILHELM 1\",\n    \"city\": \"LEVERKUSEN\",\n    \"countryCode\": \"DE\",\n    \"phone\": \"+49 214 301\",\n    \"website\": \"www.bayer.com\",\n    \"domain\": \"bayer.com\",\n    \"email\": \"ir@bayer.com\",\n    \"naceCode\": \"2120\",\n    \"legalForm\": \"Public limited company - AG\",\n    \"industryId\": 28,\n    \"industryLabel\": \"Pharmaceuticals & Biotechnology\",\n    \"idNational\": \"HRB 48248 (Köln)\",\n    \"summary\": \"Bayer AG ist ein weltweit tätiges Unternehmen mit Kernkompetenzen auf den Gebieten Gesundheit, Agrarwirtschaft und hochwertige Materialien. Die Aktien des Unternehmen wurden an der Deutsche Boerse am 21. September 2009 unter dem Code AY001 gehandelt. Das Unternehmen befindet sich in Leverkusen, Deutschland.\",\n    \"sizeCategory\": \"very_large\",\n    \"employeeCount\": 118900\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_ACCEPTABLE",
            "description": "<p>If ip_address parameter is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/cid/api/endpoint/CidApi.md",
    "groupTitle": "CID"
  }
] });
