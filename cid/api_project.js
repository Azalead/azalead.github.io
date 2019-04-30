define({
  "name": "CID REST API",
  "version": "1.0.0",
  "description": "Azalead Company Identification REST API documentation",
  "title": "Azalead CID REST API",
  "url": "https://api.azalead.com",
  "sampleUrl": "https://api.azalead.com/cid",
  "template": {
    "forceLanguage": "en",
    "withGenerator": false
  },
  "header": {
    "title": "",
    "content": "<p>Azalead provides a REST API for company identification (CID).\nAzalead API exposes endpoints allow you to retrieve the company corresponding to an IP address.\n<br/><br/></p>\n<h2>Overview</h2>\n<p><br/>Use of this API requires an Azalead CID API key.</p>\n<span id=\"api-_-BaseURL\"/>\n<h3>Base URL</h3>\n<p>All URLs referenced in the documentation have the following base:</p>\n<pre><code>https://api.azalead.com/cid\n</code></pre>\n<span id=\"api-_-Schema\"/>\n<h3>Schema</h3>\n<ul>\n<li>\n<p>All API access is over <code>https</code>.</p>\n</li>\n<li>\n<p>All data is sent and received as JSON.</p>\n</li>\n</ul>\n<span id=\"api-_-Request\"/>\n<h3>Request</h3>\n<blockquote>\n<p>All requests to Azalead's REST API require you to authenticate.</p>\n</blockquote>\n<h4>HTTP Verbs</h4>\n<p>Where possible, Azalead api strives to use the appropriate HTTP verb to each action :</p>\n<table>\n<thead>\n<tr>\n<th><strong>Verb</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>GET</code></td>\n<td>Retrieves resources.</td>\n</tr>\n<tr>\n<td><code>POST</code></td>\n<td>Creates  resources.</td>\n</tr>\n<tr>\n<td><code>PATCH</code></td>\n<td>Updates resources with a partial JSON data.</td>\n</tr>\n<tr>\n<td><code>DELETE</code></td>\n<td>Deletes resources.</td>\n</tr>\n</tbody>\n</table>\n<h4>HTTP headers</h4>\n<table>\n<thead>\n<tr>\n<th><strong>Header</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>Content-type</code></td>\n<td>Mandatory when performing a <code>POST</code> or a <code>PATCH</code> request. Accepted value: <code>application/json;charset=UTF-8</code>.</td>\n</tr>\n<tr>\n<td><code>apikey</code></td>\n<td>Contains the CID API Key you will obtain from Azalead</td>\n</tr>\n</tbody>\n</table>\n<h3>Cross Origin Resource Sharing</h3>\n<p>The API does not support natively Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If you need to perform such requests please contact your Customer Success Manager.</p>\n<span id=\"api-_-Response\"/>\n<h3>Response</h3>\n<h4>HTTP headers</h4>\n<table>\n<thead>\n<tr>\n<th><strong>Header</strong></th>\n<th><strong>Description</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>apikey</code></td>\n<td>Contains the CID API Key you will obtain from Azalead</td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Headers</code></td>\n<td>value <code>Content-Type, Access-Control-Allow-Headers, apikey, X-Requested-With</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Methods</code></td>\n<td>value <code>GET</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Allow-Origin</code></td>\n<td>value <code>*</code></td>\n</tr>\n<tr>\n<td><code>Access-Control-Expose-Headers</code></td>\n<td>value <code>apikey</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Errors</h4>\n<ul>\n<li><code>401 Unauthorized</code> when no api key is specified</li>\n</ul>\n<pre><code class=\"language-json\">HTTP/1.1 401 Unauthorized\n{\n  &quot;title&quot;: &quot;Unauthorized&quot;,\n  &quot;status&quot;: 401,\n  &quot;detail&quot;: &quot;Full authentication is required to access this resource&quot;\n}\n</code></pre>\n<ul>\n<li><code>403 Forbidden</code></li>\n</ul>\n<pre><code class=\"language-json\">HTTP/1.1 403 Forbidden\n{\n  &quot;title&quot;: &quot;Forbidden&quot;,\n  &quot;status&quot;: 403,\n  &quot;detail&quot;: &quot;Access is denied&quot;\n}\n</code></pre>\n<ul>\n<li><code>400 Bad Request</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 400 Bad Request\n{\n  &quot;title&quot;: &quot;Bad Request&quot;,\n  &quot;status&quot;: 400,\n  &quot;detail&quot;: &quot;Required request body is missing&quot;\n}\n</code></pre>\n<ul>\n<li><code>405 Method Not Allowed</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 405 Method Not Allowed\n{\n  &quot;title&quot;: &quot;Method Not Allowed&quot;,\n  &quot;status&quot;: 405,\n  &quot;detail&quot;: &quot;Request method 'GET' not supported&quot;\n}\n</code></pre>\n<ul>\n<li><code>406 Method Not Allowed</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 406 Method Not Allowed\n{\n  &quot;title&quot;: &quot;Not Acceptable&quot;,\n  &quot;status&quot;: 406,\n  &quot;detail&quot;: &quot;Request content not sufficient to generate response entity&quot;\n}\n</code></pre>\n<ul>\n<li><code>429 Too Many Requests</code></li>\n</ul>\n<pre><code class=\"language-JSON\">HTTP/1.1 429 Too Many Requests\n{\n  &quot;message&quot;:&quot;API rate limit exceeded&quot;\n}\n</code></pre>\n<ul>\n<li><code>500 Internal Server Error</code></li>\n</ul>\n<pre><code class=\"language-json\">HTTP/1.1 500 Internal Server Error\n{\n  &quot;title&quot;: &quot;Internal Server Error&quot;,\n  &quot;status&quot;: 500,\n  &quot;detail&quot;: &quot;Something went wrong on our end. Please contact the support.&quot;\n}\n</code></pre>\n<span id=\"api-_-Help\"/>\n<h3>Getting help</h3>\n<p>Having trouble with Azalead api ? We can help!</p>\n<ul>\n<li>Ask a question - we are on <a href=\"https://gitter.im/azalead/azalead-api\" target=\"_blank\">gitter</a>.</li>\n<li>Found a bug ?  <a href=\"https://github.com/Azalead/azalead.github.io/issues\" target=\"_blank\">let us know</a>.</li>\n</ul>\n"
  },
  "order": [
    "Overview"
  ],
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-04-30T09:07:10.463Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
