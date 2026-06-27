# MyBailHelper API Documentation

## Overview

The MyBailHelper API provides endpoints for managing bail bondsman operations, client records, and administrative functions.

## Base URL

```
http://localhost:3000/api
```

## Authentication

(To be implemented)

## Endpoints

### Health Check

Check the API status.

```
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-06-27T12:00:00.000Z",
  "environment": "development"
}
```

## Error Handling

All errors follow this format:

```json
{
  "error": "Error message",
  "status": 400
}
```

## Rate Limiting

(To be implemented)

## Pagination

(To be implemented)

## Version History

- **v1.0.0** - Initial API release
