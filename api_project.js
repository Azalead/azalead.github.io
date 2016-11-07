define({  "name": "Azalead API",  "version": "0.0.1",  "description": "Azalead API documentation",  "title": "Azalead API",  "url": "https://api.azalead.com/latest",  "sampleUrl": "https://api.azalead.com/latest",  "template": {    "forceLanguage": "en",    "withGenerator": false  },  "header": {    "title": "",    "content": "<h1>Overview</h1>\n<p><br/>Use of this API requires an <a href=\"http://go.azalead.com/l/85062/2015-09-23/bqfw7\" target=\"_blank\">Azalead user account.</a></p>\n<span id=\"api-_-Schema\"/>\n<h2>Schema</h2>\n<ul>\n<li>\n<p>All API access is over <code>https</code>.</p>\n</li>\n<li>\n<p>All data is sent and received as JSON.</p>\n</li>\n<li>\n<p>Blank fields are included as null instead of being omitted.</p>\n</li>\n<li>\n<p>All dates are returned as <code>timestamps</code> (<em>in milliseconds</em>) .</p>\n</li>\n</ul>\n<span id=\"api-_-Request\"/>\n<h2>Request</h2>\n<h4>HTTP Verbs</h4>\n<p>Where possible, Azalead api strives to use the appropriate HTTP verb to each action :</p>\n<table>\n<thead>\n<tr>\n<th><strong>Verb</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>GET</code></td>\n<td>Retrieves resources.</td>\n</tr>\n<tr>\n<td><code>POST</code></td>\n<td>Creates  resources.</td>\n</tr>\n<tr>\n<td><code>PATCH</code></td>\n<td>Updates resources with a partial JSON data.</td>\n</tr>\n<tr>\n<td><code>DELETE</code></td>\n<td>Deletes resources.</td>\n</tr>\n</tbody>\n</table>\n<h4>HTTP headers</h4>\n<table>\n<thead>\n<tr>\n<th><strong>Header</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>Content-type</code></td>\n<td>Mandatory when performing a <code>POST</code> or a <code>PATCH</code> request. Accepted value: <code>application/json;charset=UTF-8</code>.</td>\n</tr>\n<tr>\n<td><code>X-Auth-token</code></td>\n<td>Contains the user's authentication  token returned by the <a href=\"#api-Authentication\">authentication endpoint</a> prefixed by <code>Bearer</code>.</td>\n</tr>\n</tbody>\n</table>\n<h4>Cross Origin Resource Sharing</h4>\n<p>The API does not support natively Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If you need to perform such requests please contact your Customer Success Manager.</p>\n<span id=\"api-_-Response\"/>\n<h3>Response</h3>\n<h4>HTTP headers</h4>\n<table>\n<thead>\n<tr>\n<th><strong>Header</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>X-Auth-token</code></td>\n<td>An updated version of the user's token.</td>\n</tr>\n<tr>\n<td><code>X-Count</code></td>\n<td>The actual number of objects in the response.</td>\n</tr>\n<tr>\n<td><code>X-Total-Count</code></td>\n<td>The actual number of objects matching the request.</td>\n</tr>\n<tr>\n<td><code>X-Page</code></td>\n<td>The actual page number on the pageable endpoints.</td>\n</tr>\n<tr>\n<td><code>X-Page-size</code></td>\n<td>The actual page size on the pageable endpoints.</td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Headers</code></td>\n<td>value <code>Content-Type, Access-Control-Allow-Headers, x-auth-token, X-Requested-With,username,password</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Methods</code></td>\n<td>value <code>POST, PATCH, GET, OPTIONS, DELETE</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Origin</code></td>\n<td>value <code>*</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Expose-Headers</code></td>\n<td>value <code>X-Auth-token,X-Count,X-Total-count</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Errors</h4>\n<ul>\n<li><code>401 Unauthorized</code> when no token is specified, the token expired, or the authenticated user does not have access to the requested resource.</li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 401 Unauthorized\n {\n  &quot;timestamp&quot;: 1470831446391,\n  &quot;status&quot;: 401,\n  &quot;error&quot;: &quot;Unauthorized&quot;,\n  &quot;message&quot;: &quot;Full authentication is required to access this resource&quot;,\n  &quot;path&quot;: &quot;/latest/resource/1234&quot;\n }\n</code></pre>\n<ul>\n<li><code>403 Forbidden</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 403 Forbidden\n{\n  &quot;title&quot;: &quot;Forbidden&quot;,\n  &quot;status&quot;: 403,\n  &quot;detail&quot;: &quot;Access is denied&quot;\n}\n</code></pre>\n<ul>\n<li><code>400 Bad Request</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 400 Bad Request\n{\n  &quot;title&quot;: &quot;Bad Request&quot;,\n  &quot;status&quot;: 400,\n  &quot;detail&quot;: &quot;Required request body is missing&quot;\n}\n</code></pre>\n<ul>\n<li><code>405 Method Not Allowed</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 405 Method Not Allowed\n{\n  &quot;title&quot;: &quot;Method Not Allowed&quot;,\n  &quot;status&quot;: 405\n}\n</code></pre>\n<ul>\n<li><code>429 Too Many Requests</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 429 Too Many Requests\n{\n  &quot;message&quot;:&quot;API rate limit exceeded&quot;\n}\n</code></pre>\n<ul>\n<li><code>500 Internal Server Error</code></li>\n</ul>\n<pre><code>HTTP/1.1 500 Internal Server Error\n{\n  &quot;title&quot;: &quot;Internal Server Error&quot;,\n  &quot;status&quot;: 500,\n  &quot;detail&quot;: &quot;Something went wrong on our end. Please contact the support.&quot;\n}\n</code></pre>\n<span id=\"api-_-Help\"/>\n<h2>Getting help</h2>\n<p>Having trouble with Azalead api ? We can help!</p>\n<ul>\n<li>Ask a question - we are on <a href='https://gitter.im/azalead/azalead-api'>gitter</a> .</li>\n<li>Found a bug ?  <a href='https://github.com/Azalead/azalead.github.io/issues'>let us know</a>.</li>\n</ul>\n"  },  "order": [    "Overview",    "Authentication",    "Account",    "account_1",    "account_2",    "account_3",    "account_4",    "account_5",    "account_6",    "account_7",    "account_8",    "account_9",    "account_10",    "account_11",    "Activity",    "activity_1",    "activity_2",    "activity_3",    "activity_4",    "Advertising",    "advertising_overview",    "advertising_timeline",    "advertising_programs",    "advertising_program",    "advertising_program_update",    "advertising_program_overview",    "advertising_creativegroups",    "advertising_creativegroup",    "advertising_creativegroup_update",    "advertising_creativegroup_overview",    "advertising_creatives",    "advertising_creative_delete",    "advertising_creative_update",    "advertising_creative_overview",    "Organization",    "user_1",    "user_2",    "user_3",    "user_4",    "Reference",    "ref_data_1",    "ref_data_2",    "ref_data_3"  ],  "apidoc": "0.2.0",  "generator": {    "name": "apidoc",    "time": "2016-11-07T18:07:38.538Z",    "url": "http://apidocjs.com",    "version": "0.16.1"  }});
