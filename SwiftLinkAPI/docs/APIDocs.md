# SwiftLinkAPI Documentation

SwiftLinkAPI is a URL shortening service that allows you to create shortened URLs and provides analytics for these URLs.


## Create a Short URL

### Request

- **Method:** `POST`
- **Endpoint:** `http://localhost:1234/url`
- **Content-Type:** `application/json`

#### Request Body

```json
{
    "url": "https://example.com"
}
```

#### Response

```
{
  "id": "Wp2LS6If",
  "ok": true
}
```


## Get URL Analytics

### Request

- **Method:** `GET`
- **Endpoint:** `http://localhost:1234/url/analytics/{shortId}`

#### Response

```
{
  "analytics": {
    "totalClicks": 10,
    "clicksTimeStamp": [
      {
        "timestamp": "Jan 19, 2024, 12:00:00 AM UTC-05:00",
        "visitorsInfo": {
          "ip": "127.0.0.1",
          "country": "US",
          "region": "NY",
          "city": "New York",
          "timezone": "America/New_York"
        }
      },
    ]
  },
  "ok": true
}
```


## Get Redirect URL Info

### Request

- **Method:** `GET`
- **Endpoint:** `http://localhost:1234/{shortId}+`

#### Response

```
{
  "redirectURL": "https://example.com"
}
```


## Testing ShortID

### Request

- **Method:** `GET`
- **Endpoint:** `http://localhost:1234/{shortId}`

This will redirect you to the original URL associated with the ShortID.