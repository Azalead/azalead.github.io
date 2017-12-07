define({ "api": [
  {
    "type": "get",
    "url": "/core/account",
    "title": "Accounts",
    "version": "0.0.1",
    "name": "account_1",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a paginated list of accounts order by last activity date by default. An account contains detailed company data, activity overview, list qualification and a score.</p> <p>This endpoint helps retrieve:</p> <ul> <li>Last active accounts in general</li> <li>Last active accounts in target account list</li> <li>A list of accounts that clicked on your ad or visited your website</li> <li>The list of accounts in your blacklist</li> <li>The list of accounts with alerts...</li> </ul> <p><em>Note on filtering accounts behavior:</em></p> <p>The list of account can be filtered on the following boolean attributes: <code>target</code>, <code>isp</code>, <code>blacklist</code> and <code>alert</code>. They are used to include or exclude accounts based on those attributes. When one of these attributes is set to false the list will contain <strong>only</strong> accounts with this attribute set to false. While when set to true, the list of account will contain all accounts with <strong>at least one</strong> of the attributes set to true.</p> <p>For instance <code>/account?target=false&amp;alert=false&amp;blacklist=true&amp;isp=true</code> will return all accounts including only blacklisted (<code>blacklist=true</code>) and reported as ISP (<code>isp=true</code>) but excluding target accounts (<code>target=false</code>) and account with subscribed alert (<code>alert=false</code>).</p> <p>By default <code>isp</code> and <code>blacklist</code> are excluded.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/account?page=:page&size=:size&sort=:sort&dir=:dir&filter=:filter&target=:target&alert=:alert&blacklist=:blacklist&isp=:isp&labels=:labels"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>The number of the page returned by the api call</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-6000",
            "optional": true,
            "field": "size",
            "defaultValue": "25",
            "description": "<p>The number of objects per page returned by the api call.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"lastActivityDate\"",
              "\"score\"",
              "\"name\"",
              "\"activityCount\"",
              "\"country\"",
              "\"employeeCount\"",
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_viewed\""
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "lastActivityDate",
            "description": "<p>The account's attribute on which the list of account is sorted.</p> <ul> <li>Using <code>website_visit</code> will sort the accounts with website visit as last activity on top, then with ad click and lastly with email viewed.</li> <li>Using <code>ad_clicked</code> will sort the accounts with ad click as last activity on top, then with website visit and lastly with email viewed.</li> <li>Using <code>email_viewed</code> will sort the accounts with email viewed as last activity on top, then with website visit and lastly with ad click.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": true,
            "field": "dir",
            "defaultValue": "asc",
            "description": "<p>The direction on which the account list is sorted, by ascending (<code>asc</code>) or descending (<code>desc</code>) order.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "target",
            "description": "<p>Include (when true) or exclude (when false) accounts depending on the value of its <code>target</code> attribute.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "isp",
            "defaultValue": "false",
            "description": "<p>Include (when true) or exclude (when false) accounts depending on the value of its <code>isp</code> attribute.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "blacklist",
            "defaultValue": "false",
            "description": "<p>Include (when true) or exclude (when false) accounts depending on the value of its <code>blacklist</code> attribute for the authenticated user.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "alert",
            "description": "<p>Include (when true) or exclude (when false) accounts depending on the value of its <code>alert</code> attribute for the authenticated user.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "labels",
            "defaultValue": "{}",
            "description": "<p>A list of <a href=\"#api-Label\">label identifiers</a> to filter the list of accounts with. The returning list of account will include accounts with these labels. Using the special identifier <code>0</code> will result in including accounts without labels.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"default\""
            ],
            "optional": true,
            "field": "filter",
            "description": "<p>If set to 'default' <a href=\"#api-Organization-user_2\">the ideal customer profile of the authenticated user</a> is applied in addition with other filters.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "from",
            "description": "<p>Long number, representing the lower boundary of the last registered visit time filter, expressed as UNIX time (in milliseconds since January 1, 1970, 00:00:00 GMT).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "to",
            "description": "<p>Long number, representing the upper boundary of the last registered visit time filter, expressed as UNIX time (in milliseconds since January 1, 1970, 00:00:00 GMT).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get the last active accounts from your target account list.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account?target=true",
        "type": "curl"
      },
      {
        "title": "Get the last active accounts.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"firstActivityDate\": 1470159902134,\n  \"lastActivityDate\": 1470389521000,\n  \"lastActivityType\": \"ad_clicked\",\n  \"activityCount\": 3,\n  \"score\": 1,\n  \"naceCode\": \"3212\",\n  \"idNational\": \"CHE-106.325.524\",\n  \"name\": \"COMPAGNIE FINANCIERE RICHEMONT SA\",\n  \"employeeCount\": 28324,\n  \"sizeCategory\": \"Very large company\",\n  \"foundingDate\": 567993600000,\n  \"industry\": \"Industry\",\n  \"legalForm\": \"Limited company - AG/SA\",\n  \"summary\": null,\n  \"address\": \"CHEMIN DE LA CHENAIE 50\",\n  \"city\": \"BELLEVUE\",\n  \"zipCode\": \"1293\",\n  \"country\": \"CH\",\n  \"phone\": \"+41 22 715 3500\",\n  \"emailDomain\": \"richemont.com\",\n  \"website\": \"www.richemont.com\",\n  \"labels\": [],\n  \"target\": false,\n  \"isp\": false,\n  \"alert\": false,\n  \"blacklist\": false,\n  \"screenshot\": 128568,\n  \"id\": 1000607\n },\n {\n  \"firstActivityDate\": 1460904212296,\n  \"lastActivityDate\": 1470389281000,\n  \"lastActivityType\": \"email_viewed\",\n  \"activityCount\": 89,\n  \"score\": 3,\n  \"naceCode\": \"2599\",\n  \"idNational\": \"556606-5446\",\n  \"name\": \"LINDAB INTERNATIONAL AB\",\n  \"employeeCount\": 4587,\n  \"sizeCategory\": \"Very large company\",\n  \"foundingDate\": -347155200000,\n  \"industry\": \"Industry\",\n  \"legalForm\": \"Public limited liability company - AB publikt\",\n  \"summary\": null,\n  \"address\": \"JARNVAGSGATAN 41\",\n  \"city\": \"BASTAD\",\n  \"zipCode\": \"269 82\",\n  \"country\": \"SE\",\n  \"phone\": \"+46 431 850 00\",\n  \"emailDomain\": \"lindab.com\",\n  \"website\": \"www.lindab.com\",\n  \"labels\": [],\n  \"target\": false,\n  \"isp\": false,\n  \"alert\": false,\n  \"blacklist\": false,\n  \"screenshot\": 128551,\n  \"id\": 1000606\n  },\n  {\n   \"firstActivityDate\": 1470389101604,\n   \"lastActivityDate\": 1470389101000,\n   \"lastActivityType\": \"email_viewed\",\n   \"activityCount\": 1,\n   \"score\": 0,\n   \"naceCode\": \"7120\",\n   \"idNational\": \"A64622970\",\n   \"name\": \"APPLUS SERVICES, S.A.\",\n   \"employeeCount\": 18420,\n   \"sizeCategory\": \"Very large company\",\n   \"foundingDate\": 820454400000,\n   \"industry\": \"Specific Act.\",\n   \"legalForm\": \"Public limited company - SA\",\n   \"summary\": \"La Compañia es líder mundial en Ensayo, Inspección y Certificación.\",\n   \"address\": \"APPLUS, CAMPUS UAB, CARRETERA ACCESO A LA FACULTAD DE\",\n   \"city\": \"BARCELONA, CATALONIA\",\n   \"zipCode\": \"08193\",\n   \"country\": \"ES\",\n   \"phone\": \"+34 900 103 067\",\n   \"emailDomain\": \"applus.com\",\n   \"website\": \"www.applus.com\",\n   \"labels\": [],\n   \"target\": false,\n   \"isp\": false,\n   \"alert\": false,\n   \"blacklist\": false,\n   \"screenshot\": 128530,\n   \"id\": 1000605\n  }\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "firstActivityDate",
            "description": "<p>First activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "lastActivityDate",
            "description": "<p>Last activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "lastActivityType",
            "description": "<p>Last activity type for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "activityCount",
            "description": "<p>Number of activities for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "score",
            "description": "<p>Score represents the account marketing engagement. Can take this values: 0 (cool), 1 (warm), 2 (hot), 3 (boiling hot), 4 (on fire)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNational",
            "description": "<p>National ID for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Account name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "employeeCount",
            "description": "<p>Number of employees.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sizeCategory",
            "description": "<p>Account size category (cf <a href=\"#api-Reference-ref_data_3\">REFERENCE &gt; Categories</a>).</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "foundingDate",
            "description": "<p>Founding date for this account's company.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "industry",
            "description": "<p>Account industry.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "legalForm",
            "description": "<p>Account legal form.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "summary",
            "description": "<p>Account summary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Account address.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Account city.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Account zip code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Account country.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Account phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailDomain",
            "description": "<p>Account email domain.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Account website.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailPattern",
            "description": "<p>Account email pattern.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": "<p>Account label identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "target",
            "description": "<p>Specifies if this account is a target account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isp",
            "description": "<p>Specifies if this account is an ISP (Internet Service Provider).</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "alert",
            "description": "<p>Specifies if there is an alert set for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "blacklist",
            "description": "<p>Specifies if this account is in the blacklist.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "screenshot",
            "description": "<p>This account screenshot is available at this url https://mobile.azalead.com/Azalead-Web/images/:screenshot.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id_account/contact",
    "title": "Contacts of an account",
    "version": "0.0.1",
    "name": "account_10",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns the contact list of the specified account id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_account",
            "description": "<p>The identifier of the account for which contacts will be listed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get all contacts of an account",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/contact",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n   {\n       \"id\": 164579,\n       \"position\": \"Chairman Procter & Gamble; CHAIRMAN OF THE BOARD, PRESIDENT, CHIEF EXECUTIVE Officer\",\n       \"firstName\": \"Alan\",\n       \"lastName\": \"Lafley\",\n       \"email\": \"alan.lafley@pg.com\",\n       \"phone\": \"+33 1 00 11 22 33\"\n   },\n   {\n       \"id\": 164580,\n       \"position\": \"President and Chief Executive Officer\",\n       \"firstName\": \"Paula\",\n       \"lastName\": \"LopezDeSilanes\",\n       \"email\": \"paula.LopezDeSilanes@company.com\",\n       \"phone\": null\n   },\n   {\n       \"id\": 164581,\n       \"position\": \"Presiding Member of the Board of Directors; Presiding Independent Director\",\n       \"firstName\": \"W.\",\n       \"lastName\": \"McNerney\",\n       \"email\": null,\n       \"phone\": \"+33 1 99 88 77 66\"\n   }\n  ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Position of the contact in this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>Firstname of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Lastname of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>The phone number of the contact.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/contact/Contact.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id_account/contact"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id_account/contact/:id_contact/find-email",
    "title": "Account's contact email",
    "version": "0.0.1",
    "name": "account_11",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns specific account contact information.<br> If the contact email address field if empty, performs an external search to try to find an associated email to this contact.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_account",
            "description": "<p>The identifier of the account for which contacts will be listed.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_contact",
            "description": "<p>The identifier of the contact which will be displayed and for which an email will be searched.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get account contact email",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/contact/987654/find-email",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [   \n   {\n       \"id\": 164579,\n       \"position\": \"Chairman Procter & Gamble; CHAIRMAN OF THE BOARD, PRESIDENT, CHIEF EXECUTIVE Officer\",\n       \"firstName\": \"Alan\",\n       \"lastName\": \"Lafley\",\n       \"email\": \"alan.lafley@pg.com\",\n       \"phone\": \"+33 1 00 11 22 33\"\n   }\n  ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Position of the contact in this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>Firstname of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Lastname of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>The phone number of the contact.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/contact/Contact.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id_account/contact/:id_contact/find-email"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id",
    "title": "Account",
    "version": "0.0.1",
    "name": "account_2",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a single account, specified by its unique id. An account contains detailed company data, activity overview, list membership status and a score.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The identifier of the account to be returned.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"firstActivityDate\": 1461577742029,\n     \"lastActivityDate\": 1470344499000,\n     \"lastActivityType\": \"email_viewed\",\n     \"activityCount\": 122,\n     \"score\": 3,\n     \"naceCode\": \"2811\",\n     \"idNational\": \"14-0689340\",\n     \"name\": \"GENERAL ELECTRIC COMPANY\",\n     \"employeeCount\": 0,\n     \"sizeCategory\": \"Very large company\",\n     \"foundingDate\": -2452377600000,\n     \"industry\": \"Industry\",\n     \"legalForm\": \"Public limited company\",\n     \"summary\": null,\n     \"revenue\": 105898777243,\n     \"address\": \"3135, EASTON TURNPIKE\",\n     \"city\": \"FAIRFIELD\",\n     \"zipCode\": \"06828\",\n     \"country\": \"US\",\n     \"phone\": \"+1 203 373 2211\",\n     \"emailDomain\": \"ge.com\",\n     \"website\": \"www.ge.com\",\n     \"emailPattern\": \"{first}.{last}\",\n     \"labels\": [\n         1\n     ],\n     \"target\": true,\n     \"isp\": false,\n     \"alert\": false,\n     \"blacklist\": false,\n     \"screenshot\": 17327,\n     \"id\": 1000039\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "firstActivityDate",
            "description": "<p>First activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "lastActivityDate",
            "description": "<p>Last activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "lastActivityType",
            "description": "<p>Last activity type for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "activityCount",
            "description": "<p>Number of activities for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "score",
            "description": "<p>Score represents the account marketing engagement. Can take this values: 0 (cool), 1 (warm), 2 (hot), 3 (boiling hot), 4 (on fire)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNational",
            "description": "<p>National ID for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Account name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "employeeCount",
            "description": "<p>Number of employees.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sizeCategory",
            "description": "<p>Account size category (cf <a href=\"#api-Reference-ref_data_3\">REFERENCE &gt; Categories</a>).</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "foundingDate",
            "description": "<p>Founding date for this account's company.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "industry",
            "description": "<p>Account industry.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "legalForm",
            "description": "<p>Account legal form.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "summary",
            "description": "<p>Account summary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Account address.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Account city.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Account zip code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Account country.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Account phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailDomain",
            "description": "<p>Account email domain.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Account website.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailPattern",
            "description": "<p>Account email pattern.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": "<p>Account label identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "target",
            "description": "<p>Specifies if this account is a target account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isp",
            "description": "<p>Specifies if this account is an ISP (Internet Service Provider).</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "alert",
            "description": "<p>Specifies if there is an alert set for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "blacklist",
            "description": "<p>Specifies if this account is in the blacklist.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "screenshot",
            "description": "<p>This account screenshot is available at this url https://mobile.azalead.com/Azalead-Web/images/:screenshot.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/overview",
    "title": "Account overview",
    "version": "0.0.1",
    "name": "account_3",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns an account activity overview. Activities are: website visits, ads clicked and emails viewed. There's also an information about average website visit duration.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id, which overview is requested. Provided as a part of the URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "from",
            "description": "<p>Long number, representing the lower boundary of the activities time filter, expressed as UNIX time (in milliseconds since January 1, 1970, 00:00:00 GMT).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "to",
            "description": "<p>Long number, representing the upper boundary of the activities time filter, expressed as UNIX time (in milliseconds since January 1, 1970, 00:00:00 GMT).</p>"
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
            "field": "adClickedCount",
            "description": "<p>The amount of ADs clicked for the specified account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "websiteVisitCount",
            "description": "<p>The amount of website visits for the specified account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "emailViewedCount",
            "description": "<p>The amount of viewed emails for the specified account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "averageWebsiteVisitDurationInSecond",
            "description": "<p>Average website visit duration, represented in seconds.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"adClickedCount\": 1,\n    \"websiteVisitCount\": 0,\n    \"emailViewedCount\": 1,\n    \"averageWebsiteVisitDurationInSecond\": 3.5\n  }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Basic endpoint usage :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/overview",
        "type": "curl"
      },
      {
        "title": "Usage with date filtering :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/overview?from=1483225200000&to=1485903600000",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/overview"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/news",
    "title": "Account news",
    "version": "0.0.1",
    "name": "account_3_1",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>This endpoint is representing an integration with &quot;Bing news&quot;. The system will make a request to &quot;Bing News&quot;, returning back top-5 news related to an account company name. So the result is normally represented by an array of 5 elements.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id, for which related news are requested. Provided as a part of the URL.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The article title.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>URL to the full article.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Short summary of the article or its introduction.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "datePublished",
            "description": "<p>The date and time when the article was published.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"name\":\"Women in innovation: There is still room for progress\",\n    \"url\":\"http://www.bing.com/some_long_url\",\n    \"description\":\"Marie-Vorgan Le Barzic, CEO of Numa Paris; a start-up incubator born out of ‘Silicon Sentier,’ has established herself as a leading figure on the start-up scene. More and more women are starting to gain prominence thanks to their success: Rania ...\",\n    \"datePublished\":\"2017-11-19T08:36:00\"\n  },\n  {\n    \"name\":\"Cassidy: Medvedev’s Russian Silicon Valley could actually happen\",\n    \"url\":\"http://www.bing.com/other_long_url\",\n    \"description\":\"Silicon Sentier in France, Silicon Oasis in Dubai — with varying success. But none has achieved the notoriety of Silicon Valley. But Skolkovo might benefit from a growing Russia buzz in the valley. There’s the foundation’s Sand Hill Road office ...\",\n    \"datePublished\":\"2011-03-31T13:16:40\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/news",
        "type": "json"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/news"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/emailPattern",
    "title": "Account email pattern",
    "version": "0.0.1",
    "name": "account_3_2",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>This endpoint is giving back the requested account details, but in case if the email pattern is missing for this account, it also makes a try to figure it out through third-party services. In case of successful search of the email pattern, the corresponding field of the account will be updated and stored.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id. Provided as a part of the URL.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/emailPattern",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"firstActivityDate\": 1460904166028,\n    \"lastActivityDate\": 1470346081000,\n    \"lastActivityType\": \"email_viewed\",\n    \"activityCount\": 139,\n    \"score\": 3,\n    \"naceCode\": \"2932\",\n    \"idNational\": \"A23RUXWKASG834LTMK28\",\n    \"name\": \"AUTOLIV, INC.\",\n    \"employeeCount\": 60000,\n    \"sizeCategory\": \"Very large company\",\n    \"foundingDate\": 844128000000,\n    \"industry\": \"Industry\",\n    \"legalForm\": \"Public limited company\",\n    \"summary\": null,\n    \"address\": null,\n    \"city\": null,\n    \"zipCode\": null,\n    \"country\": \"US\",\n    \"phone\": null,\n    \"emailDomain\": \"autoliv.com\",\n    \"website\": \"www.autoliv.com\",\n    \"emailPattern\": \"{first}.{last}\",\n    \"labels\": [],\n    \"target\": false,\n    \"isp\": false,\n    \"alert\": false,\n    \"blacklist\": false,\n    \"screenshot\": 128019,\n    \"id\": 1001042\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "firstActivityDate",
            "description": "<p>First activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "lastActivityDate",
            "description": "<p>Last activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "lastActivityType",
            "description": "<p>Last activity type for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "activityCount",
            "description": "<p>Number of activities for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "score",
            "description": "<p>Score represents the account marketing engagement. Can take this values: 0 (cool), 1 (warm), 2 (hot), 3 (boiling hot), 4 (on fire)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNational",
            "description": "<p>National ID for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Account name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "employeeCount",
            "description": "<p>Number of employees.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sizeCategory",
            "description": "<p>Account size category (cf <a href=\"#api-Reference-ref_data_3\">REFERENCE &gt; Categories</a>).</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "foundingDate",
            "description": "<p>Founding date for this account's company.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "industry",
            "description": "<p>Account industry.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "legalForm",
            "description": "<p>Account legal form.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "summary",
            "description": "<p>Account summary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Account address.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Account city.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Account zip code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Account country.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Account phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailDomain",
            "description": "<p>Account email domain.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Account website.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailPattern",
            "description": "<p>Account email pattern.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": "<p>Account label identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "target",
            "description": "<p>Specifies if this account is a target account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isp",
            "description": "<p>Specifies if this account is an ISP (Internet Service Provider).</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "alert",
            "description": "<p>Specifies if there is an alert set for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "blacklist",
            "description": "<p>Specifies if this account is in the blacklist.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "screenshot",
            "description": "<p>This account screenshot is available at this url https://mobile.azalead.com/Azalead-Web/images/:screenshot.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/emailPattern"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/core/account/:id",
    "title": "Update account",
    "version": "0.0.1",
    "name": "account_4",
    "group": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "updated",
            "description": "<p>account</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "firstActivityDate",
            "description": "<p>First activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "lastActivityDate",
            "description": "<p>Last activity date for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "lastActivityType",
            "description": "<p>Last activity type for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "activityCount",
            "description": "<p>Number of activities for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "score",
            "description": "<p>Score represents the account marketing engagement. Can take this values: 0 (cool), 1 (warm), 2 (hot), 3 (boiling hot), 4 (on fire)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNational",
            "description": "<p>National ID for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Account name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "employeeCount",
            "description": "<p>Number of employees.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sizeCategory",
            "description": "<p>Account size category (cf <a href=\"#api-Reference-ref_data_3\">REFERENCE &gt; Categories</a>).</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "foundingDate",
            "description": "<p>Founding date for this account's company.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "industry",
            "description": "<p>Account industry.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "legalForm",
            "description": "<p>Account legal form.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "summary",
            "description": "<p>Account summary.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Account address.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Account city.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Account zip code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Account country.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Account phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailDomain",
            "description": "<p>Account email domain.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Account website.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailPattern",
            "description": "<p>Account email pattern.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "labels",
            "description": "<p>Account label identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "target",
            "description": "<p>Specifies if this account is a target account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isp",
            "description": "<p>Specifies if this account is an ISP (Internet Service Provider).</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "alert",
            "description": "<p>Specifies if there is an alert set for this account.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "blacklist",
            "description": "<p>Specifies if this account is in the blacklist.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "screenshot",
            "description": "<p>This account screenshot is available at this url https://mobile.azalead.com/Azalead-Web/images/:screenshot.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"firstActivityDate\": 1460904166028,\n    \"lastActivityDate\": 1470346081000,\n    \"lastActivityType\": \"email_viewed\",\n    \"activityCount\": 139,\n    \"score\": 3,\n    \"naceCode\": \"2932\",\n    \"idNational\": \"A23RUXWKASG834LTMK28\",\n    \"name\": \"AUTOLIV, INC.\",\n    \"employeeCount\": 60000,\n    \"sizeCategory\": \"Very large company\",\n    \"foundingDate\": 844128000000,\n    \"industry\": \"Industry\",\n    \"legalForm\": \"Public limited company\",\n    \"summary\": null,\n    \"address\": null,\n    \"city\": null,\n    \"zipCode\": null,\n    \"country\": \"US\",\n    \"phone\": null,\n    \"emailDomain\": \"autoliv.com\",\n    \"website\": \"www.autoliv.com\",\n    \"labels\": [],\n    \"target\": false,\n    \"isp\": false,\n    \"alert\": false,\n    \"blacklist\": false,\n    \"screenshot\": 128019,\n    \"id\": 1001042\n  }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Updates the account, specified by the id parameter, target account list, blacklist or ISP (Internet Service Provider) list membership.</p> <p>The <code>target</code> and <code>isp</code> parameters, as well as the <code>alert</code> and <code>blacklist</code> parameters, are exclusive. When one is <code>true</code>, the other is automatically set to <code>false</code>, and when one is <code>false</code>, the other is automatically set to <code>true</code>. If both are send with the same value a <code>400 BAD REQUEST</code> error will be returned with an explanatory message.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The identifier of the account to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "target",
            "description": "<p>The new value of the target attribute for this account. Use <code>true</code> to set the account as target, <code>false</code> to remove the account from the target list. This parameter should not be used along with the isp parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "isp",
            "description": "<p>The new value of the isp attribute for this account. Use <code>true</code> to add it to ISP list membership for all users, <code>false</code> to remove it. This parameter should not be used along with the target parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "alert",
            "description": "<p>The new value of the alert attribute for this account and the authenticated user. Use <code>true</code> to subscribe to alert with current authenticated user, <code>false</code> to not subscribe. This parameter should not be used along with the blacklist parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "blacklist",
            "description": "<p>The new value of the blacklist attribute for this account and the authenticated user. Use <code>true</code> to add this account to the current authenticated user blacklist, <code>false</code> to remove it. This parameter should not be used along with the alert parameter.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/Account.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id_account/alert-recipient",
    "title": "List alert recipients",
    "version": "0.0.1",
    "name": "account_5",
    "group": "Account",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Given the id of an Account, returns the list of its alert recipients. The recipients represent only active users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_account",
            "description": "<p>the account id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/alert-recipient",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n      {\n          \"email\": \"sales4@acme.com\",\n          \"firstName\": \"John\",\n          \"lastName\": \"Branson\",\n          \"id\": 2375\n      },\n      {\n          \"email\": \"jdeley@acme.com\",\n          \"firstName\": \"Justin\",\n          \"lastName\": \"Deley\",\n          \"id\": 2261\n      }\n  ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user. Represents the user login.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/actionuser/AlertRecipient.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id_account/alert-recipient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/account/:id_account/alert-recipient",
    "title": "Add an alert recipient",
    "version": "0.0.1",
    "name": "account_6",
    "group": "Account",
    "permission": [
      {
        "name": "admin or alert management right"
      }
    ],
    "description": "<p>Subscribes the specified user to the alerts for the specified account. Returns the created user details.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_account",
            "description": "<p>The account id, provided as a part of the URL. The specified user will be subscribed to alerts of this account.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The user id (provided in request body), which will be subscribed to the specified account.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -d '{\"id:987654321\"}' -H \"Content-Type: application/json\" -H \"X-Auth-token:Bearer YOUR_TOKEN\" -X POST https://api.azalead.com/core/account/123456/alert-recipient",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n  {\n      \"email\": \"jdeley@acme.com\",\n      \"firstName\": \"Justin\",\n      \"lastName\": \"Deley\",\n      \"id\": 2261\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user. Represents the user login.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/actionuser/AlertRecipient.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id_account/alert-recipient"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/core/account/:id_account/alert-recipient/:id",
    "title": "Remove an alert recipient",
    "version": "0.0.1",
    "name": "account_7",
    "group": "Account",
    "permission": [
      {
        "name": "admin or alert management right"
      }
    ],
    "description": "<p>Removes the subscription of the specified user to the alerts of the specified account. Returns the deleted user details.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id_account",
            "description": "<p>The account id, provided as a part of the URL. The specified user will be subscribed to alerts of this account.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The user id, provided as a part of the URL, which will be subscribed to the specified account.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\" -X DELETE https://api.azalead.com/core/account/123456/alert-recipient/987654321",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"email\": \"jdeley@acme.com\",\n        \"firstName\": \"Justin\",\n        \"lastName\": \"Deley\",\n        \"id\": 2261\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user. Represents the user login.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/actionuser/AlertRecipient.md",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id_account/alert-recipient/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/activity",
    "title": "Account activities",
    "version": "0.27.0",
    "name": "activity_1",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a list of activities for a given account. The activities will be returned in reverse chronological order.</p> <p>This API allow pagination, time based filtering and type based filtering.</p> <p>The objects contained in the list can have different data types (website_visit, ad_clicked and email_viewed).</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/account/123456/activity?page=:page&size=:size&from=:from&to=:to&types=:types"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the account on which activities are going to be listed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>The number of the page returned by the api call</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "defaultValue": "25",
            "description": "<p>the number of objects per page returned by the api call</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "from",
            "description": "<p>a timestamp defining the bottom of the activities date range</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "to",
            "description": "<p>a timestamp defining the top of the activities date range</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"website_visit\"",
              "\"ad_clicked\"",
              "\"email_opened\""
            ],
            "optional": true,
            "field": "types",
            "description": "<p>the type of activities returned by the api call</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": "<p>A List of activity objects. Activity objects can be of different types. See their description under.</p>"
          }
        ],
        "ad_clicked activity object": [
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "allowedValues": [
              "\"ad_clicked\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Object[]",
            "optional": false,
            "field": "visitedPages",
            "description": "<p>List of visitedPage object representing the visited pages sorted by url visit date in ascending order</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Object",
            "optional": false,
            "field": "referer",
            "description": "<p>An object representing a visit referer</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "referer.idCategory",
            "description": "<p>The activity category</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "referer.name",
            "description": "<p>The name of the referer</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "idPerson",
            "description": "<p>The id of the person linked to the activity</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>The name of the campaign that generated the click</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The activity id</p>"
          }
        ],
        "website_visit activity object": [
          {
            "group": "website_visit activity object",
            "type": "String",
            "allowedValues": [
              "\"website_visit\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Object[]",
            "optional": false,
            "field": "visitedPages",
            "description": "<p>List of visitedPage object representing the visited pages sorted by url visit date in ascending order</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Object",
            "optional": false,
            "field": "referer",
            "description": "<p>An object representing a visit referer</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "String",
            "optional": false,
            "field": "referer.idCategory",
            "description": "<p>The activity category</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "String",
            "optional": false,
            "field": "referer.name",
            "description": "<p>The name of the referer</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "idPerson",
            "description": "<p>The id of the person linked to the activity</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>The name of the campaign that generated the click</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The website_visit activity id</p>"
          }
        ],
        "email_viewed activity object": [
          {
            "group": "email_viewed activity object",
            "type": "String",
            "allowedValues": [
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Object[]",
            "optional": false,
            "field": "openers",
            "description": "<p>List of opener objects sorted by activity date in ascending order</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>The name of the email campaign</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The email_viewed activity id</p>"
          }
        ],
        "visited_page object": [
          {
            "group": "visited_page object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The webpage title</p>"
          },
          {
            "group": "visited_page object",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The webpage url</p>"
          },
          {
            "group": "visited_page object",
            "type": "Number",
            "optional": false,
            "field": "durationInSeconds",
            "description": "<p>The duration of the visit in seconds</p>"
          },
          {
            "group": "visited_page object",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>List of event objects related to the visit sorted by event date in ascending order</p>"
          },
          {
            "group": "visited_page object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The webpage visit id</p>"
          }
        ],
        "event object": [
          {
            "group": "event object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The identifier of the event (UUID)</p>"
          },
          {
            "group": "event object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of event</p>"
          },
          {
            "group": "event object",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>The content/data of the event. Will consist of a key/value json object varying in function of the event type.</p>"
          }
        ],
        "opener object": [
          {
            "group": "opener object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the person who opened the email</p>"
          },
          {
            "group": "opener object",
            "type": "Number",
            "optional": false,
            "field": "openDate",
            "description": "<p>Email opening timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n   [\n    {\n        \"type\": \"ad_clicked\",\n        \"date\": 1470388801000,\n        \"visitedPages\": [\n            {\n                \"title\": \"The Chaos of Buying in Industrial Manufacturing\",\n                \"url\": \"https://acme.com/blog/the-chaos-of-swimming-in-post-industrial-noise/\",\n                \"durationInSecond\": 7,\n                \"events\": [ {\n                  \"id\": \"5872fc92-a1c4-41cf-a976-b89f516ac1d9\",\n                  \"type\": \"link_clicked\",\n                  \"content\": {\n                    \"url\": \"/summer-webinar\"\n                  }\n                }],\n                \"id\": 8941287\n            },\n            {\n                \"title\": \"Product X\",\n                \"url\": \"http://acme.com/product/\",\n                \"durationInSecond\": 10,\n                \"events\": [],\n                \"id\": 8941286\n            }\n        ],\n        \"referer\": {\n            \"idCategory\": \"azalead_ad\",\n            \"name\": \"acme-en-theb2bchaos\"\n        },\n        \"idPerson\": \"089be716-2a0e-49fc-b485-d94655df65bf\",\n        \"campaignName\": \"acme-en-theb2bchaos\",\n        \"id\": 4639547\n    },\n    {\n        \"type\": \"email_viewed\",\n        \"date\": 1470273901000,\n        \"openers\": [\n            {\n                \"email\": \"faye.valentine@bebop.com\",\n                \"openDate\": \"1425970856000\"\n            }\n        ],\n        \"campaignName\": \"Email White Paper\",\n        \"id\": 4638973\n    },\n    {\n        \"type\": \"website_visit\",\n        \"date\": 1507884678000,\n        \"visitedPages\": [\n            {\n                \"title\": \"Blog - Acme\",\n                \"url\": \"https://acme.com/blog/b-to-big-b-is-too-big/\",\n                \"durationInSecond\": 182,\n                \"events\": null,\n                \"id\": 952123136\n            },\n            {\n                \"title\": null,\n                \"url\": \"https://acme.com/blog/blog/b-to-big-b-is-bigger/\",\n                \"durationInSecond\": 1,\n                \"events\": null,\n                \"id\": 952008578\n            }\n        ],\n        \"referer\": {\n            \"idCategory\": \"social\",\n            \"name\": \"blog_amazon_en_twitter\"\n        },\n        \"idPerson\": null,\n        \"id\": 28212776\n    }\n   ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Basic endpoint usage using account identifier:",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/activity",
        "type": "curl"
      },
      {
        "title": "Full endpoint usage with time&type based filtering and pagination:",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/activity?page=3&size=50&from=1430385808000&to=1490123408000&types=website_visit&types=ad_clicked",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/activity",
    "title": "Account activities",
    "version": "0.0.1",
    "name": "activity_1",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Lists all activities for an account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/activity",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n    {\n        \"type\": \"ad_clicked\",\n        \"date\": 1470388801000,\n        \"visitedPages\": [\n            {\n                \"url\": \"http://acme.com/pricing/\",\n                \"durationInSecond\": 7,\n                \"id\": 8941287,\n                \"events\": [\n                  {\n                    \"id\": \"8e5380ec-dd1d-4e35-8eb7-a1053cd51a7a\",\n                    \"type\": \"download\",\n                    \"content\": {\n                      \"type\": \"download\",\n                      \"url\": \"http://acme.com/pricing/pricing.pdf\"\n                    }\n                  },\n                  {\n                    \"id\": \"25519326-ffb8-4313-ba86-9c57527c20c5\",\n                    \"type\": \"custom\",\n                    \"content\": {\n                      \"type\": \"product_view\",\n                      \"product_id\": \"AZ42567\"\n                    }\n                  }\n                ]\n            },\n            {\n                \"url\": \"http://acme.com/product/\",\n                \"durationInSecond\": 10,\n                \"id\": 8941286\n            }\n        ],\n        \"referer\": {\n            \"idCategory\": \"paid_search\",\n            \"name\": \"azalead ad nurturing ABR Case Study\"\n        },\n        \"idPerson\": \"ba1102bf-68f2-41b5-ad08-b836eebe2551\",\n        \"campaignName\": null,\n        \"id\": 4639547\n    },\n    {\n        \"type\": \"email_viewed\",\n        \"date\": 1470273901000,\n        \"openers\": [\n            {\n                \"email\": \"faye.valentine@bebop.com\",\n                \"openDate\": \"1425970856000\"\n            }\n        ],\n        \"campaignName\": \"Email White Paper\",\n        \"id\": 4638973\n    }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/activity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/activity/:id_activity",
    "title": "Account activity",
    "version": "0.27.0",
    "name": "activity_2",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a specific account activity.</p> <p>As there are several types of activity (email_viewed,ad_clicked,website_visit) the returned JSON can change.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_activity",
            "description": "<p>the activity id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "ad_clicked activity object": [
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "allowedValues": [
              "\"ad_clicked\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Object[]",
            "optional": false,
            "field": "visitedPages",
            "description": "<p>List of visitedPage object representing the visited pages sorted by url visit date in ascending order</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Object",
            "optional": false,
            "field": "referer",
            "description": "<p>An object representing a visit referer</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "referer.idCategory",
            "description": "<p>The activity category</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "referer.name",
            "description": "<p>The name of the referer</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "idPerson",
            "description": "<p>The id of the person linked to the activity</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>The name of the campaign that generated the click</p>"
          },
          {
            "group": "ad_clicked activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The activity id</p>"
          }
        ],
        "website_visit activity object": [
          {
            "group": "website_visit activity object",
            "type": "String",
            "allowedValues": [
              "\"website_visit\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Object[]",
            "optional": false,
            "field": "visitedPages",
            "description": "<p>List of visitedPage object representing the visited pages sorted by url visit date in ascending order</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Object",
            "optional": false,
            "field": "referer",
            "description": "<p>An object representing a visit referer</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "String",
            "optional": false,
            "field": "referer.idCategory",
            "description": "<p>The activity category</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "String",
            "optional": false,
            "field": "referer.name",
            "description": "<p>The name of the referer</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "idPerson",
            "description": "<p>The id of the person linked to the activity</p>"
          },
          {
            "group": "website_visit activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The website_visit activity id</p>"
          }
        ],
        "email_viewed activity object": [
          {
            "group": "email_viewed activity object",
            "type": "String",
            "allowedValues": [
              "\"email_viewed\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the activity (constant)</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The activity timestamp</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Object[]",
            "optional": false,
            "field": "openers",
            "description": "<p>List of opener objects sorted by activity date in ascending order</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>The name of the email campaign</p>"
          },
          {
            "group": "email_viewed activity object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The email_viewed activity id</p>"
          }
        ],
        "visited_page object": [
          {
            "group": "visited_page object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The webpage title</p>"
          },
          {
            "group": "visited_page object",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The webpage url</p>"
          },
          {
            "group": "visited_page object",
            "type": "Number",
            "optional": false,
            "field": "durationInSeconds",
            "description": "<p>The duration of the visit in seconds</p>"
          },
          {
            "group": "visited_page object",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>List of event objects related to the visit sorted by event date in ascending order</p>"
          },
          {
            "group": "visited_page object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The webpage visit id</p>"
          }
        ],
        "event object": [
          {
            "group": "event object",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The identifier of the event (UUID).</p>"
          },
          {
            "group": "event object",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of event.</p>"
          },
          {
            "group": "event object",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>The content/data of the event. Will consist of a key/value json object varying in function of the event type.</p>"
          }
        ],
        "opener object": [
          {
            "group": "opener object",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the person who opened the email</p>"
          },
          {
            "group": "opener object",
            "type": "Number",
            "optional": false,
            "field": "openDate",
            "description": "<p>Email opening timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response email_viewed activity:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"email_viewed\",\n        \"date\": 1470273901000,\n        \"openers\": [\n            {\n                \"email\": \"faye.valentine@bebop.com\",\n                \"openDate\": \"1425970856000\"\n            }\n        ],\n        \"campaignName\": \"Email White Paper\",\n        \"id\": 4638973\n    }",
          "type": "json"
        },
        {
          "title": "Success-Response website_visit activity:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"website_visit\",\n        \"date\": 1507884678000,\n        \"visitedPages\": [\n            {\n                \"title\": \"Blog - Acme\",\n                \"url\": \"https://acme.com/blog/b-to-big-b-is-too-big/\",\n                \"durationInSecond\": 182,\n                \"events\": null,\n                \"id\": 952123136\n            },\n            {\n                \"title\": null,\n                \"url\": \"https://acme.com/blog/blog/b-to-big-b-is-bigger/\",\n                \"durationInSecond\": 1,\n                \"events\": null,\n                \"id\": 952008578\n            }\n        ],\n        \"referer\": {\n            \"idCategory\": \"social\",\n            \"name\": \"blog_amazon_en_twitter\"\n        },\n        \"idPerson\": null,\n        \"id\": 28212776\n    }",
          "type": "json"
        },
        {
          "title": "Success-Response ad_clicked activity:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"ad_clicked\",\n        \"date\": 1470388801000,\n        \"visitedPages\": [\n            {\n                \"title\": \"The Chaos of Buying in Industrial Manufacturing\",\n                \"url\": \"https://acme.com/blog/the-chaos-of-swimming-in-post-industrial-noise/\",\n                \"durationInSecond\": 7,\n                \"events\": [ {\n                  \"id\": \"5872fc92-a1c4-41cf-a976-b89f516ac1d9\",\n                  \"type\": \"link_clicked\",\n                  \"content\": {\n                    \"url\": \"/summer-webinar\"\n                  }\n                }],\n                \"id\": 8941287\n            },\n            {\n                \"title\": \"Product X\",\n                \"url\": \"http://acme.com/product/\",\n                \"durationInSecond\": 10,\n                \"events\": [],\n                \"id\": 8941286\n            }\n        ],\n        \"referer\": {\n            \"idCategory\": \"azalead_ad\",\n            \"name\": \"acme-en-theb2bchaos\"\n        },\n        \"idPerson\": \"089be716-2a0e-49fc-b485-d94655df65bf\",\n        \"campaignName\": \"acme-en-theb2bchaos\",\n        \"id\": 4639547\n    }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/activity/7654321",
        "type": "json"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/activity/:id_activity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/activity/:id_activity",
    "title": "Account activity",
    "version": "0.0.1",
    "name": "activity_2",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a specific account activity.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_activity",
            "description": "<p>the activity id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/activity/7654321",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"type\": \"email_viewed\",\n      \"date\": 1425970856000,\n      \"openers\": [\n          {\n              \"email\": \"jet.black@bebop.com\",\n              \"openDate\": 1425970856000\n          }\n      ],\n      \"campaignName\": \"Email Tradeshow NYC August\",\n      \"id\": 4586777\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/activity/:id_activity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/visited-page/overview",
    "title": "Account's visited pages overview",
    "version": "0.0.1",
    "name": "activity_3",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a list of visited pages overview for a specific account activity.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>The visited webpage url.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The visited webpage title.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "visitCount",
            "description": "<p>The number of visit on this webpage.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "averageVisitDurationInSecond",
            "description": "<p>The average time spent in second on this webpage.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier for this website visit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n  {\n      \"url\": \"http://acme.com/\",\n      \"title\": \"Acme – Sales Acceleration Software\",\n      \"visitCount\": 57,\n      \"averageVisitDurationInSecond\": 2.4035087719298245,\n      \"id\": 129\n  },\n  {\n      \"url\": \"http://acme.com/company/\",\n      \"title\": \"Acme Company Background\",\n      \"visitCount\": 31,\n      \"averageVisitDurationInSecond\": 6.774193548387097,\n      \"id\": 93912\n  },\n  {\n      \"url\": \"http://acme.com/pricing/\",\n      \"title\": \"Acme – Sales Acceleration Software | Plans Pricing\",\n      \"visitCount\": 25,\n      \"averageVisitDurationInSecond\": 6.44,\n      \"id\": 33481\n  }\n ]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "from",
            "description": "<p>A timestamp defining the bottom of the visited pages date range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "to",
            "description": "<p>A timestamp defining the top of the visited pages date range.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic endpoint usage : ",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/visited-page/overview",
        "type": "curl"
      },
      {
        "title": "Full endpoint usage with time filter :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/visited-page/overview?from=1430385808000&to=1490123408000",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/visited-page/overview"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/referer",
    "title": "Account's traffic sources",
    "version": "0.0.1",
    "name": "activity_4",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a list of referer overview for a specific account activity.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"advertising_display\"",
              "\"affiliate\"",
              "\"azalead_ad\"",
              "\"direct\"",
              "\"email\"",
              "\"organic_search\"",
              "\"others\"",
              "\"paid_search\"",
              "\"referral\"",
              "\"social\"",
              "\"social_ad\""
            ],
            "optional": false,
            "field": "idCategory",
            "description": "<p>The unique identifier of the referer category.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The referer name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "visitCount",
            "description": "<p>The number of visit from this referer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n    {\n        \"idCategory\": \"azalead_ad\",\n        \"name\": \"azalead ad nurturing ABR Tradeshow NYC August\",\n        \"visitCount\": 8\n    },\n    {\n        \"idCategory\": \"azalead_ad\",\n        \"name\": \"azalead ad nurturing ABR Case Study\",\n        \"visitCount\": 8\n    },\n    {\n        \"idCategory\": \"organic_search\",\n        \"name\": \"Bing\",\n        \"visitCount\": 8\n    },\n    {\n        \"idCategory\": \"azalead_ad\",\n        \"name\": \"azalead ad nurturing ABR White Paper\",\n        \"visitCount\": 7\n    },\n    {\n        \"idCategory\": \"organic_search\",\n        \"name\": \"Google\",\n        \"visitCount\": 6\n    },\n    {\n        \"idCategory\": \"social\",\n        \"name\": \"Facebook\",\n        \"visitCount\": 5\n    },\n    {\n        \"idCategory\": \"social\",\n        \"name\": \"Linkedin\",\n        \"visitCount\": 4\n    },\n    {\n        \"idCategory\": \"social\",\n        \"name\": \"Twitter\",\n        \"visitCount\": 4\n    },\n    {\n        \"idCategory\": \"direct\",\n        \"name\": null,\n        \"visitCount\": 4\n    },\n    {\n        \"idCategory\": \"paid_search\",\n        \"name\": \"Adwords\",\n        \"visitCount\": 3\n    },\n    {\n        \"idCategory\": \"organic_search\",\n        \"name\": \"Yahoo!\",\n        \"visitCount\": 3\n    }\n   ]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "from",
            "description": "<p>A timestamp defining the bottom of the referers date range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "to",
            "description": "<p>A timestamp defining the top of the referers date range.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic endpoint usage : ",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/referer",
        "type": "curl"
      },
      {
        "title": "Full endpoint usage with time filter :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/referer?from=1430385808000&to=1490123408000",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/referer"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/referer/category",
    "title": "Account's traffic sources by category",
    "version": "0.0.1",
    "name": "activity_5",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a list of referer category overview for a specific account activity.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "visitCount",
            "description": "<p>The number of visit from this referer category.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"advertising_display\"",
              "\"affiliate\"",
              "\"azalead_ad\"",
              "\"direct\"",
              "\"email\"",
              "\"organic_search\"",
              "\"others\"",
              "\"paid_search\"",
              "\"referral\"",
              "\"social\"",
              "\"social_ad\""
            ],
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the referer category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n       {\n           \"visitCount\": 0,\n           \"id\": \"social_ad\"\n       },\n       {\n           \"visitCount\": 6444,\n           \"id\": \"azalead_ad\"\n       },\n       {\n           \"visitCount\": 152,\n           \"id\": \"advertising_display\"\n       },\n       {\n           \"visitCount\": 0,\n           \"id\": \"referral\"\n       },\n       {\n           \"visitCount\": 0,\n           \"id\": \"email\"\n       },\n       {\n           \"visitCount\": 0,\n           \"id\": \"paid_search\"\n       },\n       {\n           \"visitCount\": 33,\n           \"id\": \"social\"\n       },\n       {\n           \"visitCount\": 0,\n           \"id\": \"organic_search\"\n       },\n       {\n           \"visitCount\": 396,\n           \"id\": \"direct\"\n       },\n       {\n           \"visitCount\": 0,\n           \"id\": \"affiliate\"\n       },\n       {\n           \"visitCount\": 201,\n           \"id\": \"others\"\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The account id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "from",
            "description": "<p>A timestamp defining the bottom of the referers date range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "to",
            "description": "<p>A timestamp defining the top of the referers date range.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic endpoint usage : ",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/referer/category",
        "type": "curl"
      },
      {
        "title": "Full endpoint usage with time filter :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/referer/category?from=1430385808000&to=1490123408000",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/referer/category"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/event/type",
    "title": "Account's events on visited pages",
    "version": "0.27.0",
    "name": "activity_6",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a list of event overview made by visitors.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"custom\"",
              "\"link_clicked\"",
              "\"form_completed\"",
              "\"file_downloaded\"",
              "\"live_chat\"",
              "\"newsletter_signup\"",
              "\"blog_comment\"",
              "\"video_played\"",
              "\"website_personalization\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The event type.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "eventCount",
            "description": "<p>The number of event from this event type.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the event type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n      {\n        \"type\": \"download\",\n        \"eventCount\": 12,\n        \"id\": \"8e5380ec-dd1d-4e35-8eb7-a1053cd51a7a\"\n      },\n      {\n        \"type\": \"custom\",\n        \"eventCount\": 45,\n        \"id\": \"25519326-ffb8-4313-ba86-9c57527c20c5\"\n      }\n   ]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "from",
            "description": "<p>A timestamp defining the bottom of the events date range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "to",
            "description": "<p>A timestamp defining the top of the events date range.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic endpoint usage :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/event/type",
        "type": "curl"
      },
      {
        "title": "Full endpoint usage with time filter :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/123456/event/type?from=1430385808000&to=1490123408000",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/activity/AccountActivity.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/event/type"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/activity/person/:id",
    "title": "Activity person",
    "version": "0.27.0",
    "name": "activity_person_1",
    "group": "Activity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Performs the lookup by the uid of the person, who performed some activity. If the person is found, its detailed view is returned, otherwise error 404 is returned. The detailed view must contain the described below fields and may contain other additional fields with additional info we have.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the person.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the requested person.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "externalId",
            "description": "<p>The external id of the requested person, for example the id from the marketing automation tool.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the requested person.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the requested person.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the requested person.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "content",
            "description": "<p>All the additional info we have on the requested person.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\":\"ba1102bf-68f2-41b5-ad08-b836eebe2551\",\n  \"externalId\":\"EXT42\",\n  \"email\":\"steve.gerald@abertis.com\",\n  \"firstName\":\"Steve\",\n  \"lastName\":\"Gerald\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "cURL :",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/activity/person/ba1102bf-68f2-41b5-ad08-b836eebe2551",
        "type": "json"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/activity/person/Person.md",
    "groupTitle": "Activity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/activity/person/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/authenticate",
    "title": "Authenticate user",
    "version": "0.0.1",
    "name": "authenticate_2",
    "group": "Authentication",
    "description": "<p>All requests to Azalead's REST API require you to authenticate. Send your Azalead user login and password to get your JSON Web Token. You will need this token to make API calls.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>work email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token to use for API calls.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\"token\":\"eyJhbGciOiJxMiJ9.eyJzdWIiOiJhcmVndWlnQGF6YWxlYWQuY29tIiwianRpIjoiMTQ2MCIsImxvZ2luIjoiYXJlZ3VpZ0BhemFsZWFkLmNvbSIsImlkIjoxNDYwLCJzdWJzY3JpYmVyIjo0NCwicm9sZSI6MSwicmVtZW1iZXJNZSI6dHJ1ZSwiYXV0aCI6IlJPTEVfQUNDT1VOVF9BRE1JTixST0xFX0JBU0lDLGxhYmVsX21hbmFnZW1lbnQsZW1haWxfc291cmNpbmcsYWxlcnRfbWFuYWdlbWVudCx0YXJnZXRfbWFuYWdlbWVudCxhZF9wZXJmb3JtYW5jZV90YWIsYmxhY2tsaXN0X21hbmFnZW1lbnQsdXNlcl9yaWdodHNfbWFuYWdlbWVudCIsImV4cCI6MTQ3MDMxMzkxMn0.DnHGO6YHUGH2Wo014VrGRNRtTd3S5OM2ll5sbO_rCRc6IzCgmOdXqbqnm6liBmxWekehRoBUDBzIldH9w\"}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Get a token. ",
        "content": "curl -H \"Content-type: application/json\" -X POST https://api.azalead.com/core/authenticate -d '{ \"username\":\"YOUR_USERNAME\",\"password\":\"YOUR_PASSWORD\"}'",
        "type": "json"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/auth/Authentication.md",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/authenticate"
      }
    ]
  },
  {
    "type": "get",
    "url": "/core/label",
    "title": "Labels",
    "version": "0.0.15",
    "name": "label_1",
    "group": "Label",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns the list of labels.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/label"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The label name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"label\": \"Client\",\n     \"id\": 6890\n   },\n   {\n     \"label\": \"Investor\",\n     \"id\": 4498\n   },\n   {\n     \"label\": \"Partner\",\n     \"id\": 6542\n   },\n   {\n     \"label\": \"Sales Pipeline\",\n     \"id\": 8315\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Get the label list.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/label",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/label/Label.md",
    "groupTitle": "Label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/label/:id",
    "title": "Label",
    "version": "0.0.15",
    "name": "label_2",
    "group": "Label",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a single label.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/label/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>the label name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>label ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"label\": \"Sales Pipeline\",\n     \"id\": 8315\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Get a specific label.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/label/8315",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/label/Label.md",
    "groupTitle": "Label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/label",
    "title": "Add a label",
    "version": "0.0.15",
    "name": "label_3",
    "group": "Label",
    "permission": [
      {
        "name": "admin & user with label management rights"
      }
    ],
    "description": "<p>Add a new label.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/label"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>the label name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The label name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"label\": \"Sales Pipeline\",\n     \"id\": 8315\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Get a specific label.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/label  -d { \"label\": \"NEW_LABEL\" }",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/label/Label.md",
    "groupTitle": "Label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/core/label",
    "title": "Update a label",
    "version": "0.0.15",
    "name": "label_4",
    "group": "Label",
    "permission": [
      {
        "name": "admin & user with label management rights"
      }
    ],
    "description": "<p>Update a label.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/label/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>the label name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The label name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"label\": \"Sales Pipeline\",\n     \"id\": 8315\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Update a label.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/label/8315  -d { \"label\": \"LABEL_UPDATE\" }",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/label/Label.md",
    "groupTitle": "Label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/core/label",
    "title": "Delete a label",
    "version": "0.0.15",
    "name": "label_5",
    "group": "Label",
    "permission": [
      {
        "name": "admin & user with label management rights"
      }
    ],
    "description": "<p>Delete a label.</p>",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/label/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The label name.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Label ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"label\": \"Sales Pipeline\",\n     \"id\": 8315\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Delete a label.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/label/8315",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/core/label/Label.md",
    "groupTitle": "Label",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/opportunity",
    "title": "Account's opportunities",
    "version": "0.0.16",
    "name": "account_opportunity_1",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns the opportunities linked to a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n   {\n    \"dealSize\": 85000,\n    \"closedDate\": 1471478400000,\n    \"name\": \"PROCTER & GAMBLE CO\",\n    \"state\": \"open\",\n    \"probabilityPercentage\": 50,\n    \"idUser\": 2375\n    \"id\": 2524\n   }\n  ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/opportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:id/opportunity",
    "title": "Account's opportunities",
    "version": "0.0.16",
    "name": "account_opportunity_1",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns the opportunities linked to a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "closed",
            "description": "<p>filters on closed status</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "won",
            "description": "<p>filters on won status</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get all opportunities for the given account.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/1837/opportunity",
        "type": "curl"
      },
      {
        "title": "Get all open opportunities for the given account.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/1837/opportunity?closed=false&won=false",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n   {\n    \"dealSize\": 85000,\n    \"closedDate\": 1471478400000,\n    \"name\": \"PROCTER & GAMBLE CO\",\n    \"probabilityPercentage\": 50,\n    \"closed\": false,\n    \"won\": false,\n    \"idUser\": 2375,\n    \"idAccount\": 1837,\n    \"id\": 2524,\n    \"source\": \"salesforce\",\n    \"externalId\": \"003a000300OH9mFRRO\"\n    }\n  ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/opportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/account/:idAccount/opportunity/:idOpportunity",
    "title": "Account's opportunity",
    "version": "0.0.16",
    "name": "account_opportunity_2",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns a specific opportunity for a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idOpportunity",
            "description": "<p>the opportunity id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get a specific opportunity by id for a given account.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/1837/opportunity/2524",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"dealSize\": 85000,\n    \"closedDate\": 1471478400000,\n    \"name\": \"PROCTER & GAMBLE CO\",\n    \"probabilityPercentage\": 50,\n    \"closed\": false,\n    \"won\": false,\n    \"idUser\": 2375,\n    \"idAccount\": 1837,\n    \"id\": 2524,\n    \"source\": \"salesforce\",\n    \"externalId\": \"003a000300OH9mFRRO\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:idAccount/opportunity/:idOpportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/account/:id/opportunity",
    "title": "Add an account's opportunity",
    "version": "0.0.16",
    "name": "account_opportunity_3",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>This endpoint is to add an opportunity to a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "defaultValue": "authenticated user id",
            "description": "<p>The id of the user assigned to the opportunity. Only an administrator can specify this field. If not specified the authenticated user is used.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n      \"dealSize\": 85000,\n      \"closedDate\": 1471478400000,\n      \"name\": \"PROCTER & GAMBLE CO\",\n      \"probabilityPercentage\": 50,\n      \"closed\": false,\n      \"won\": false,\n      \"idUser\": 2375,\n      \"idAccount\": 1837,\n      \"id\": 2524,\n      \"source\": \"salesforce\",\n      \"externalId\": \"003a000300OH9mFRRO\"\n      }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:id/opportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/core/account/:idAccount/opportunity/:idOpportunity",
    "title": "Update an account's opportunity",
    "version": "0.0.16",
    "name": "account_opportunity_4",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>This endpoint is to update a specific opportunity for a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idOpportunity",
            "description": "<p>the opportunity id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "timestamps",
            "optional": true,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity. Only an administrator can specify this field.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Move the opportunity to another account and change its probability.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/account/1837/opportunity  -d { \"idAccount\": 1643, \"probabilityPercentage\": 70 }'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n        \"dealSize\": 85000,\n        \"closedDate\": 1471478400000,\n        \"name\": \"PROCTER & GAMBLE CO\",\n        \"probabilityPercentage\": 70,\n        \"closed\": false,\n        \"won\": false,\n        \"idUser\": 2375,\n        \"idAccount\": 1434,\n        \"id\": 2524,\n        \"source\": \"salesforce\",\n        \"externalId\": \"003a000300OH9mFRRO\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:idAccount/opportunity/:idOpportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/core/account/:idAccount/opportunity/:idOpportunity",
    "title": "Remove an account's opportunity",
    "version": "0.0.16",
    "name": "account_opportunity_5",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>This endpoint is to delete a specific opportunity for a specific account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>the account id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "idOpportunity",
            "description": "<p>the opportunity id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"dealSize\": 85000,\n    \"closedDate\": 1471478400000,\n    \"name\": \"PROCTER & GAMBLE CO\",\n    \"probabilityPercentage\": 50,\n    \"closed\": false,\n    \"won\": false,\n    \"idUser\": 2375,\n    \"idAccount\": 1837,\n    \"id\": 2524,\n    \"source\": \"salesforce\",\n    \"externalId\": \"003a000300OH9mFRRO\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/account/opportunity/AccountOpportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/account/:idAccount/opportunity/:idOpportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/opportunity",
    "title": "All opportunities",
    "version": "0.0.16",
    "name": "opportunity_1",
    "group": "Opportunity",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Returns the list of all your opportunities. Opportunities can be filtered by closed and won status.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "closed",
            "description": "<p>filters on closed status</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "won",
            "description": "<p>filters on won status</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get all opportunities.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/opportunity",
        "type": "curl"
      },
      {
        "title": "Get all open opportunities.",
        "content": "curl -H \"X-Auth-token:Bearer YOUR_TOKEN\"  https://api.azalead.com/core/opportunity?closed=false&won=false",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n   {\n    \"dealSize\": 85000,\n    \"closedDate\": 1471478400000,\n    \"name\": \"PROCTER & GAMBLE CO\",\n    \"probabilityPercentage\": 50,\n    \"closed\": false,\n    \"won\": false,\n    \"idUser\": 2375,\n    \"idAccount\": 1837,\n    \"id\": 2524,\n    \"source\": \"salesforce\",\n    \"externalId\": \"003a000300OH9mFRRO\"\n    }\n  ]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dealSize",
            "description": "<p>The money value of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamps",
            "optional": false,
            "field": "closedDate",
            "description": "<p>The opportunity closed date.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "probabilityPercentage",
            "description": "<p>The probability of closing in percents.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Specifies if the opportunity is closed.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "won",
            "description": "<p>Specifies if the opportunity is won.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idAccount",
            "description": "<p>The id of the associated account.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "idUser",
            "description": "<p>The id of the user assigned to the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the opportunity.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "externalId",
            "description": "<p>Specifies the key of the opportunity in the external source system.</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/opportunity/Opportunity.md",
    "groupTitle": "Opportunity",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/opportunity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/organization",
    "title": "Organization",
    "version": "0.0.12",
    "name": "organization_1",
    "group": "Organization",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "trackerCode",
            "description": "<p>Your organization tracker code used by Azalead to identify your organization for example email pixels.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "planType",
            "description": "<p>Your organization current plan type.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"2ways\"",
              "\"1way\"",
              "\"no\""
            ],
            "optional": false,
            "field": "sfdcIntegrationCode",
            "description": "<p>Your organization level of Salesforce integration.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Your organization's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Your organization's website.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "numUsers",
            "description": "<p>The maximum number of users for your organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "websiteTrackerCode",
            "description": "<p>Your organization website tracker code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "emailTrackerCode",
            "description": "<p>Your organization email tracker code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"trackerCode\": \"TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npb\",\n    \"planType\": \"ENTERPRISE\",\n    \"sfdcIntegrationCode\": \"2ways\",\n    \"name\": \"ACME\",\n    \"website\": \"https://www.acme.com\",\n    \"numUsers\": 25,\n    \"websiteTrackerCode\": \"&lt;!-- Azalead tracking code --&gt;\\n&lt;script src=\\\"//b2btagmgr.azalead.com/tag?az=TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npb\\\" type=\\\"application/javascript\\\"&gt;&lt;/script&gt;\\n&lt;!-- End Azalead tracking code --&gt;\",\n    \"emailTrackerCode\": \"&lt;img src=\\\"https://b2btagmgr.azalead.com/email/TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npb/EmailCampaign(Azalead_Tag)/YOUR_ESP_EMAIL_VARIABLE/\\\" style=\\\"border:0\\\" alt=\\\"\\\" width=\\\"0\\\" height=\\\"0\\\" /&gt;\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/Organization.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/organization/websiteTrackerCode",
    "title": "Send website tracker code by email",
    "version": "0.0.12",
    "name": "organization_2",
    "group": "Organization",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The recipient of the email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"script\": \"&lt;!-- Azalead tracking code --&gt;\\n&lt;script src=\\\"//b2btagmgr.azalead.com/tag?az=TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npb\\\" type=\\\"application/javascript\\\"&gt;&lt;/script&gt;\\n&lt;!-- End Azalead tracking code --&gt;\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/Organization.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/websiteTrackerCode"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/core/organization/emailTrackerCode",
    "title": "Send email tracker code by email",
    "version": "0.0.12",
    "name": "organization_3",
    "group": "Organization",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The recipient of the email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"script\": \"&lt;img src=\\\"https://b2btagmgr.azalead.com/email/TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2Npb/EmailCampaign(Azalead_Tag)/YOUR_ESP_EMAIL_VARIABLE/\\\" style=\\\"border:0\\\" alt=\\\"\\\" width=\\\"0\\\" height=\\\"0\\\" /&gt;\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/Organization.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/emailTrackerCode"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/organization/user",
    "title": "Users",
    "version": "0.0.1",
    "description": "<p>Lists all the users in your organization.</p>",
    "name": "user_1",
    "group": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>filters on active status</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "id",
            "description": "<p>a list of specific users'ids to retrieve</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"Brandon\",\n        \"lastName\": \"McClaine\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066882010,\n        \"dateLastAction\": 1469094567690,\n        \"email\": \"bmclaine@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2193\n    },\n    {\n        \"name\": \"Chester\",\n        \"lastName\": \"Rao\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066231692,\n        \"dateLastAction\": 1469622737778,\n        \"email\": \"crao@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2188\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/core/organization/user/config",
    "title": "User's settings overview",
    "version": "0.0.1",
    "description": "<p>an overview of the authenticated user's settings.</p>",
    "name": "user_2",
    "group": "Organization",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"alert_email\": {\n          \"active\": true,\n          \"ad_clicked\": true,\n          \"email_viewed\": true,\n          \"website_visit\": true\n      },\n      \"report_email_weekly\": true,\n      \"report_target_email_daily\": true,\n      \"report_email_daily\": true,\n      \"default_account_selection_filter\": {\n          \"sectors\": [],\n          \"countries\": [],\n          \"categories\": []\n      }\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/config"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/core/organization/user/config",
    "title": "Update reports configuration",
    "version": "0.0.1",
    "name": "user_3",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "report_email_weekly",
            "description": "<p>activate weekly email report.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "report_target_email_daily",
            "description": "<p>activate daily target account engagement report.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "report_email_daily",
            "description": "<p>activate daily email report.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"alert_email\": {\n          \"active\": true,\n          \"ad_clicked\": true,\n          \"email_viewed\": true,\n          \"website_visit\": true\n      },\n      \"report_email_weekly\": true,\n      \"report_target_email_daily\": true,\n      \"report_email_daily\": true,\n      \"default_account_selection_filter\": {\n          \"sectors\": [],\n          \"countries\": [],\n          \"categories\": []\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/config"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/organization/user/config/alert_email",
    "title": "User alerts configuration",
    "version": "0.0.1",
    "name": "user_4",
    "group": "Organization",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"active\": true,\n     \"ad_clicked\": true,\n     \"email_viewed\": true,\n     \"website_visit\": true\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/config/alert_email"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/core/organization/user/config/alert_email",
    "title": "Update alerts configuration",
    "version": "0.0.1",
    "name": "user_5",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>enable alerts.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "ad_clicked",
            "description": "<p>enable alerts on ad clicks.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "email_viewed",
            "description": "<p>enable alerts on email viewed.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "website_visit",
            "description": "<p>enable alerts on website visits.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"active\": true,\n     \"ad_clicked\": true,\n     \"email_viewed\": false,\n     \"website_visit\": true\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/config/alert_email"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/core/organization/user/:id",
    "title": "Remove a user",
    "version": "0.0.12",
    "description": "<p>Remove a user from your organization.</p>",
    "name": "user_delete_id",
    "group": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The user's id</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"name\": \"Brandon\",\n        \"lastName\": \"McClaine\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066882010,\n        \"dateLastAction\": 1469094567690,\n        \"email\": \"bmclaine@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2193\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/core/organization/user/:id",
    "title": "User",
    "version": "0.0.12",
    "description": "<p>Get a specific user by its id.</p>",
    "name": "user_get_id",
    "group": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin or owner of the resource"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The user id</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"name\": \"Brandon\",\n        \"lastName\": \"McClaine\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066882010,\n        \"dateLastAction\": 1469094567690,\n        \"email\": \"bmclaine@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2193\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/core/organization/user/:id",
    "title": "Update a user",
    "version": "0.0.12",
    "description": "<p>Update a user from your organization.</p>",
    "name": "user_patch_id",
    "group": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The user's id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": "<p>The user's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": "<p>The user's password</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "\"1\"",
              "\"2\""
            ],
            "optional": true,
            "field": "idRole",
            "description": "<p>The user's role id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>If true will remove the user from your organization (same as calling DELETE /organization/user/:id)</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"name\": \"Brandon\",\n        \"lastName\": \"McClaine\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066882010,\n        \"dateLastAction\": 1469094567690,\n        \"email\": \"bmclaine@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2193\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/core/organization/user/",
    "title": "Add a user",
    "version": "0.0.12",
    "description": "<p>Add a user to your organization.</p>",
    "name": "user_post",
    "group": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The user's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The user's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The user's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "idRole",
            "description": "<p>The user's role id (1 for admin, 2 for user)</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/organization/user/User.md",
    "groupTitle": "Organization",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/organization/user/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idRole",
            "description": "<p>Role id of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "idSubscriber",
            "description": "<p>Id of the user's organization.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of the user.</p>"
          }
        ],
        "Current user and Administrator view": [
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Specify if the user is active.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "boolean",
            "optional": true,
            "field": "deleted",
            "description": "<p>Specify if the user is deleted.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "creationDate",
            "description": "<p>The creation date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "timestamps",
            "optional": true,
            "field": "dateLastAction",
            "description": "<p>The last action date of the user.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "subscriberRights",
            "description": "<p>The user's rights inherited from organization.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userRights",
            "description": "<p>The user's rights.</p>"
          },
          {
            "group": "Current user and Administrator view",
            "type": "object",
            "optional": true,
            "field": "userConfig",
            "description": "<p>The user' settings (including alerts and ICP).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"name\": \"Brandon\",\n        \"lastName\": \"McClaine\",\n        \"idRole\": 1,\n        \"role\": \"admin\",\n        \"idSubscriber\": 44,\n        \"active\": true,\n        \"deleted\": false,\n        \"creationDate\": 1435066882010,\n        \"dateLastAction\": 1469094567690,\n        \"email\": \"bmclaine@acme.com\",\n        \"locale\": \"en\",\n        \"subscriberRights\": {\n            \"label_management\": false,\n            \"email_sourcing\": true,\n            \"alert_management\": true,\n            \"target_management\": false,\n            \"ad_performance_tab\": true,\n            \"blacklist_management\": false,\n            \"user_rights_management\": true\n        },\n        \"userConfig\": {\n            \"alert_email\": {\n                \"active\": true,\n                \"ad_clicked\": true,\n                \"email_viewed\": true,\n                \"website_visit\": true\n            },\n            \"report_email_weekly\": true,\n            \"report_target_email_daily\": true,\n            \"report_email_daily\": true,\n            \"default_account_selection_filter\": {\n                \"sectors\": [],\n                \"countries\": [],\n                \"categories\": []\n            }\n        },\n        \"userRights\": {},\n        \"id\": 2193\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/public/password/forgot",
    "title": "Forgotten password",
    "version": "0.0.1",
    "name": "Forgot",
    "group": "Public",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Sends the &quot;Forgot Password&quot; email for the requested login. The link in this email is valid for limited time, depending on the platform configuration. If the email, provided in the request, does not represent valid Azalead user login, nothing happens.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The login of the user, requesting password reset. Must represent valid email address.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The login of the user, who requested password reset (same as provided in the request)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{  \n   \"email\":\"john.smith@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example: ",
        "content": "curl -H \"Content-type: application/json\" -X POST https://api.azalead.com/public/password/forgot -d '{ \"email\":\"john.smith@gmail.com\" }'",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/anonymous/resetPassword/ResetPassword.md",
    "groupTitle": "Public",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/public/password/forgot"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/public/password/reminder",
    "title": "Password reminder",
    "version": "0.0.1",
    "name": "Reminder",
    "group": "Public",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Performs the password reset by the token, which can be obtained from the email, after POSTing to /public/password/forgot. If the token is valid, the email with the new password is sent to the user. If the token is not valid, nothing happens.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The token, obtained from the &quot;Forgot password&quot; email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The token, which was used to reset the password (same as provided in the request)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{  \n   \"token\":\"XXXXXXXXXXXXXXX\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example: ",
        "content": "curl -H \"Content-type: application/json\" -X POST https://api.azalead.com/public/password/forgot -d '{ \"token\":\"XXXXXXXXXXXXXXX\" }'",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/anonymous/resetPassword/ResetPassword.md",
    "groupTitle": "Public",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/public/password/reminder"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/public/signUp",
    "title": "Sign Up",
    "version": "0.0.1",
    "name": "SignUp",
    "group": "Public",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Should be used for the creation of a new platform subscriber (customer). The newly created subscriber is assigned with limited &quot;FREE TRIAL&quot; plan.</p> <p>Given that the request is valid, this API call will perform these steps:</p> <ul> <li>Verify that there's no existing subscriber already for the specified domain.</li> <li>Verify that the provided email is not already in use.</li> <li>Create the subscriber and its first user with all required initialization</li> <li>Send the account creation email (using the provided email parameter)</li> <li>Send the webmaster web tracker installation email (using the provided email parameter)</li> <li>Send the subscriber details back as an API response</li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the primary subscriber user. Must not be empty. Max allowed length is 64 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the primary subscriber user. Must not be empty. Max allowed length is 64 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email to be used as a login for the primary subscriber user. Must represent a valid email. Max allowed length is 255 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The password for the primary subscriber user. Must follow the password policy: At least one digit, one lowercase, one uppercase, one special symbol from (@#$%!), and the length must be between 6 and 20.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>The website which the new subscriber represents. Should contain the protocol part, otherwise defaulted to &quot;http://&quot;. Must represent the valid URL (considering the note just made about the protocol). Max allowed length is 255 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>the name of the company of the subscriber. Must not be empty. Max allowed length is 100 characters.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user (same as provided in the request)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user (same as provided in the request)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user (same as provided in the request). Represents the login for the newly created account</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>The company name of the newly created subscriber (same as provided in the request)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{  \n  \"firstName\":\"John\",\n  \"lastName\":\"Smith\",\n  \"email\":\"john.smith@gmail.com\",\n  \"company\":\"Google Inc\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Valid example: ",
        "content": "curl -H \"Content-type: application/json\" -X POST https://api.azalead.com/public/signUp -d '{ \"firstName\":\"John\",\"lastName\":\"Smith\",\"email\":\"john.smith@gmail.com\",\"password\":\"1aA$$$\",\"website\":\"http://google.com\",\"company\":\"Google Inc\"}'",
        "type": "curl"
      }
    ],
    "filename": "src/main/java/com/azalead/api/endpoint/anonymous/signUp/SignUp.md",
    "groupTitle": "Public",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/public/signUp"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/ref/country",
    "title": "Countries",
    "version": "0.0.1",
    "name": "ref_data_1",
    "group": "Reference",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n  {\n      \"name\": \"Afghanistan\",\n      \"id\": \"AF\"\n  },\n  {\n      \"name\": \"Åland Islands\",\n      \"id\": \"AX\"\n  },\n  {\n      \"name\": \"Albania\",\n      \"id\": \"AL\"\n  },\n  ...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/ref/RefData.md",
    "groupTitle": "Reference",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/ref/country"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/ref/industry",
    "title": "Industries",
    "version": "0.0.1",
    "name": "ref_data_2",
    "group": "Reference",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"name\": \"Advertising & Marketing\"\n     },\n     {\n         \"id\": 2,\n         \"name\": \"Agriculture, Forestry and Fishing\"\n     },\n     {\n         \"id\": 3,\n         \"name\": \"Apparel & Fashion\"\n     },\n     {\n         \"id\": 4,\n         \"name\": \"Automotive\"\n     },\n     {\n         \"id\": 5,\n         \"name\": \"Banking, Insurance & Financial Services\"\n     },\n     {\n         \"id\": 6,\n         \"name\": \"Business Services\"\n     },\n     {\n         \"id\": 7,\n         \"name\": \"Chemicals\"\n     },\n     {\n         \"id\": 8,\n         \"name\": \"Construction\"\n     },\n     {\n         \"id\": 9,\n         \"name\": \"Consulting & Professional Services\"\n     },\n     {\n         \"id\": 10,\n         \"name\": \"Education\"\n     },\n     {\n         \"id\": 11,\n         \"name\": \"Electronics\"\n     },\n     {\n         \"id\": 12,\n         \"name\": \"Energy\"\n     },\n     {\n         \"id\": 13,\n         \"name\": \"Environmental Services\"\n     },\n     {\n         \"id\": 14,\n         \"name\": \"Food & Beverages\"\n     },\n     {\n         \"id\": 15,\n         \"name\": \"Government Services\"\n     },\n     {\n         \"id\": 17,\n         \"name\": \"Health Care\"\n     },\n     {\n         \"id\": 18,\n         \"name\": \"Home Equipment & Furnishings\"\n     },\n     {\n         \"id\": 19,\n         \"name\": \"Hospitality & Restaurants\"\n     },\n     {\n         \"id\": 20,\n         \"name\": \"Human Resources\"\n     },\n     {\n         \"id\": 22,\n         \"name\": \"Legal & Accounting Services\"\n     },\n     {\n         \"id\": 23,\n         \"name\": \"Leisure & Entertainment\"\n     },\n     {\n         \"id\": 24,\n         \"name\": \"Manufacturing\"\n     },\n     {\n         \"id\": 25,\n         \"name\": \"Media & Publishing\"\n     },\n     {\n         \"id\": 26,\n         \"name\": \"Non-Profit Organization Management\"\n     },\n     {\n         \"id\": 27,\n         \"name\": \"Oil & Gas\"\n     },\n     {\n         \"id\": 28,\n         \"name\": \"Pharmaceuticals & Biotechnology\"\n     },\n     {\n         \"id\": 29,\n         \"name\": \"Publishing\"\n     },\n     {\n         \"id\": 30,\n         \"name\": \"Real Estate\"\n     },\n     {\n         \"id\": 31,\n         \"name\": \"Retail\"\n     },\n     {\n         \"id\": 32,\n         \"name\": \"Software & Information Technology\"\n     },\n     {\n         \"id\": 33,\n         \"name\": \"Telecommunications\"\n     },\n     {\n         \"id\": 34,\n         \"name\": \"Transportation & Logistics\"\n     },\n     {\n         \"id\": 35,\n         \"name\": \"Travel & Tourism\"\n     },\n     {\n         \"id\": 36,\n         \"name\": \"Aerospace & Defence\"\n     },\n     {\n         \"id\": 37,\n         \"name\": \"Electrical\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/ref/RefData.md",
    "groupTitle": "Reference",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/ref/industry"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/ref/company-category",
    "title": "Categories",
    "version": "0.0.1",
    "name": "ref_data_3",
    "group": "Reference",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n  {\n   \"id\": \"small\",\n   \"name\": \"Small company\"\n  },\n  {\n   \"id\": \"medium\",\n   \"name\": \"Medium sized company\"\n  },\n  {\n   \"id\": \"large\",\n   \"name\": \"Large company\"\n  },\n  {\n   \"id\": \"very_large\",\n   \"name\": \"Very large company\"\n  }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/ref/RefData.md",
    "groupTitle": "Reference",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/ref/company-category"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/core/",
    "title": "Version",
    "version": "0.0.12",
    "name": "root_version",
    "group": "Root",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \"version\": \"/v0.0.13\",\n  \"name\": \"Azalead API\",\n  \"documentation\": \"https://azalead.github.io\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/azalead/api/endpoint/core/version/Version.md",
    "groupTitle": "Root",
    "sampleRequest": [
      {
        "url": "https://api.azalead.com/core/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Auth-token",
            "defaultValue": "Bearer YOUR_TOKEN",
            "description": ""
          }
        ]
      }
    }
  }
] });
