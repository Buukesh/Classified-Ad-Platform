---
title: Classified Ad Platform API v1.0.0
language_tabs:
  - shell: Shell
  - javascript: JavaScript
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="classified-ad-platform-api">Classified Ad Platform API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A commercial-grade web interface for a classified advertisements website tailored specifically for students. 

# Authentication

* API Key (tokenAuth)
    - Parameter Name: **Authorization**, in: header. Token-based authentication with required prefix "Token"

<h1 id="classified-ad-platform-api-api">api</h1>

## api_ads_list

<a id="opIdapi_ads_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/ads \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/ads',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/ads`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "content": "string",
    "date": "2019-08-24T14:15:22Z",
    "modified": "2019-08-24T14:15:22Z",
    "user": {
      "id": 0,
      "username": "string"
    },
    "price": "string",
    "category": "IW",
    "item": "string",
    "images": [
      {
        "id": 0,
        "ad": 0,
        "image": "http://example.com"
      }
    ]
  }
]
```

<h3 id="api_ads_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="api_ads_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Ad](#schemaad)]|false|none|none|
|» id|integer|true|read-only|none|
|» title|string|true|none|none|
|» content|string|true|none|none|
|» date|string(date-time)|true|read-only|none|
|» modified|string(date-time)|true|read-only|none|
|» user|[PublicUser](#schemapublicuser)|true|read-only|none|
|»» id|integer|true|read-only|none|
|»» username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|» price|string(decimal)|true|none|none|
|» category|[CategoryEnum](#schemacategoryenum)|true|none|* `IW` - Items Wanted<br>* `IS` - Items for Sale<br>* `AS` - Academic Services|
|» item|string|true|none|none|
|» images|[[AdImage](#schemaadimage)]|true|read-only|none|
|»» id|integer|true|read-only|none|
|»» ad|integer|true|read-only|none|
|»» image|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|IW|
|category|IS|
|category|AS|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, None
</aside>

## api_ads_create

<a id="opIdapi_ads_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/ads \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript
const inputBody = '{
  "title": "string",
  "content": "string",
  "price": "string",
  "category": "IW",
  "item": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/ads',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/ads`

> Body parameter

```json
{
  "title": "string",
  "content": "string",
  "price": "string",
  "category": "IW",
  "item": "string"
}
```

```yaml
title: string
content: string
price: string
category: IW
item: string

```

<h3 id="api_ads_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Ad](#schemaad)|true|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "title": "string",
  "content": "string",
  "date": "2019-08-24T14:15:22Z",
  "modified": "2019-08-24T14:15:22Z",
  "user": {
    "id": 0,
    "username": "string"
  },
  "price": "string",
  "category": "IW",
  "item": "string",
  "images": [
    {
      "id": 0,
      "ad": 0,
      "image": "http://example.com"
    }
  ]
}
```

<h3 id="api_ads_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Ad](#schemaad)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth
</aside>

## api_messages_create

<a id="opIdapi_messages_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/messages \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript
const inputBody = '{
  "message": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/messages',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/messages`

> Body parameter

```json
{
  "message": "string"
}
```

```yaml
message: string

```

<h3 id="api_messages_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Message](#schemamessage)|true|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "conversation": 0,
  "message": "string",
  "sender": 0,
  "timestamp": "2019-08-24T14:15:22Z"
}
```

<h3 id="api_messages_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth
</aside>

## api_messages_conversations_list

<a id="opIdapi_messages_conversations_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/messages/conversations \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/messages/conversations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/messages/conversations`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "ad": {
      "id": 0,
      "title": "string",
      "content": "string",
      "date": "2019-08-24T14:15:22Z",
      "modified": "2019-08-24T14:15:22Z",
      "user": {
        "id": 0,
        "username": "string"
      },
      "price": "string",
      "category": "IW",
      "item": "string",
      "images": [
        {
          "id": 0,
          "ad": 0,
          "image": "http://example.com"
        }
      ]
    },
    "initiator": {
      "id": 0,
      "username": "string"
    },
    "messages": [
      {
        "id": 0,
        "conversation": 0,
        "message": "string",
        "sender": 0,
        "timestamp": "2019-08-24T14:15:22Z"
      }
    ]
  }
]
```

<h3 id="api_messages_conversations_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="api_messages_conversations_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conversation](#schemaconversation)]|false|none|none|
|» id|integer|true|read-only|none|
|» ad|[Ad](#schemaad)|true|read-only|none|
|»» id|integer|true|read-only|none|
|»» title|string|true|none|none|
|»» content|string|true|none|none|
|»» date|string(date-time)|true|read-only|none|
|»» modified|string(date-time)|true|read-only|none|
|»» user|[PublicUser](#schemapublicuser)|true|read-only|none|
|»»» id|integer|true|read-only|none|
|»»» username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|»» price|string(decimal)|true|none|none|
|»» category|[CategoryEnum](#schemacategoryenum)|true|none|* `IW` - Items Wanted<br>* `IS` - Items for Sale<br>* `AS` - Academic Services|
|»» item|string|true|none|none|
|»» images|[[AdImage](#schemaadimage)]|true|read-only|none|
|»»» id|integer|true|read-only|none|
|»»» ad|integer|true|read-only|none|
|»»» image|string(uri)|true|none|none|
|» initiator|[PublicUser](#schemapublicuser)|true|read-only|none|
|»» id|integer|true|read-only|none|
|»» username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|» messages|[[Message](#schemamessage)]|true|read-only|none|
|»» id|integer|true|read-only|none|
|»» conversation|integer|true|read-only|none|
|»» message|string|true|none|none|
|»» sender|integer|true|read-only|none|
|»» timestamp|string(date-time)|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|IW|
|category|IS|
|category|AS|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth
</aside>

## api_token_create

<a id="opIdapi_token_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript
const inputBody = '{
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/token',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/token`

> Body parameter

```json
{
  "username": "string",
  "password": "string"
}
```

```yaml
username: string
password: string

```

<h3 id="api_token_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthToken](#schemaauthtoken)|true|none|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

<h3 id="api_token_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[AuthToken](#schemaauthtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth
</aside>

## api_users_create

<a id="opIdapi_users_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```javascript
const inputBody = '{
  "username": "string",
  "password": "string",
  "email": "user@example.com"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('/api/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/users`

> Body parameter

```json
{
  "username": "string",
  "password": "string",
  "email": "user@example.com"
}
```

```yaml
username: string
password: string
email: user@example.com

```

<h3 id="api_users_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "username": "string",
  "email": "user@example.com"
}
```

<h3 id="api_users_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, None
</aside>

# Schemas

<h2 id="tocS_Ad">Ad</h2>
<!-- backwards compatibility -->
<a id="schemaad"></a>
<a id="schema_Ad"></a>
<a id="tocSad"></a>
<a id="tocsad"></a>

```json
{
  "id": 0,
  "title": "string",
  "content": "string",
  "date": "2019-08-24T14:15:22Z",
  "modified": "2019-08-24T14:15:22Z",
  "user": {
    "id": 0,
    "username": "string"
  },
  "price": "string",
  "category": "IW",
  "item": "string",
  "images": [
    {
      "id": 0,
      "ad": 0,
      "image": "http://example.com"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|title|string|true|none|none|
|content|string|true|none|none|
|date|string(date-time)|true|read-only|none|
|modified|string(date-time)|true|read-only|none|
|user|[PublicUser](#schemapublicuser)|true|read-only|none|
|price|string(decimal)|true|none|none|
|category|[CategoryEnum](#schemacategoryenum)|true|none|* `IW` - Items Wanted<br>* `IS` - Items for Sale<br>* `AS` - Academic Services|
|item|string|true|none|none|
|images|[[AdImage](#schemaadimage)]|true|read-only|none|

<h2 id="tocS_AdImage">AdImage</h2>
<!-- backwards compatibility -->
<a id="schemaadimage"></a>
<a id="schema_AdImage"></a>
<a id="tocSadimage"></a>
<a id="tocsadimage"></a>

```json
{
  "id": 0,
  "ad": 0,
  "image": "http://example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|ad|integer|true|read-only|none|
|image|string(uri)|true|none|none|

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
{
  "username": "string",
  "password": "string",
  "token": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|write-only|none|
|password|string|true|write-only|none|
|token|string|true|read-only|none|

<h2 id="tocS_CategoryEnum">CategoryEnum</h2>
<!-- backwards compatibility -->
<a id="schemacategoryenum"></a>
<a id="schema_CategoryEnum"></a>
<a id="tocScategoryenum"></a>
<a id="tocscategoryenum"></a>

```json
"IW"

```

* `IW` - Items Wanted
* `IS` - Items for Sale
* `AS` - Academic Services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|* `IW` - Items Wanted<br>* `IS` - Items for Sale<br>* `AS` - Academic Services|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|IW|
|*anonymous*|IS|
|*anonymous*|AS|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "id": 0,
  "ad": {
    "id": 0,
    "title": "string",
    "content": "string",
    "date": "2019-08-24T14:15:22Z",
    "modified": "2019-08-24T14:15:22Z",
    "user": {
      "id": 0,
      "username": "string"
    },
    "price": "string",
    "category": "IW",
    "item": "string",
    "images": [
      {
        "id": 0,
        "ad": 0,
        "image": "http://example.com"
      }
    ]
  },
  "initiator": {
    "id": 0,
    "username": "string"
  },
  "messages": [
    {
      "id": 0,
      "conversation": 0,
      "message": "string",
      "sender": 0,
      "timestamp": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|ad|[Ad](#schemaad)|true|read-only|none|
|initiator|[PublicUser](#schemapublicuser)|true|read-only|none|
|messages|[[Message](#schemamessage)]|true|read-only|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "id": 0,
  "conversation": 0,
  "message": "string",
  "sender": 0,
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|conversation|integer|true|read-only|none|
|message|string|true|none|none|
|sender|integer|true|read-only|none|
|timestamp|string(date-time)|true|read-only|none|

<h2 id="tocS_PublicUser">PublicUser</h2>
<!-- backwards compatibility -->
<a id="schemapublicuser"></a>
<a id="schema_PublicUser"></a>
<a id="tocSpublicuser"></a>
<a id="tocspublicuser"></a>

```json
{
  "id": 0,
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "username": "string",
  "password": "string",
  "email": "user@example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|password|string|true|write-only|none|
|email|string(email)|false|none|none|

