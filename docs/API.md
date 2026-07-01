# MyBailHelper API Documentation

## Overview

The MyBailHelper API provides comprehensive endpoints for managing bail bondsman operations, including client record management, bail tracking, and status updates.

## Base URL

```
http://localhost:3000/api
```

## Authentication

(To be implemented - JWT/Session-based authentication)

## Response Format

All API responses follow this standard format:

```json
{
  "success": true,
  "data": {},
  "message": "Optional message"
}
```

## Error Format

```json
{
  "success": false,
  "error": "Error message",
  "status": 400
}
```

---

## Client Endpoints

### Get All Clients

Retrieve a paginated list of all clients.

```http
GET /api/clients?page=1&limit=10
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Records per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "555-0123",
      "address": "123 Main St",
      "createdAt": "2026-07-01T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1
  }
}
```

### Get Single Client

Retrieve a specific client by ID.

```http
GET /api/clients/:id
```

**Parameters:**
- `id` (required): Client ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "555-0123",
    "address": "123 Main St",
    "createdAt": "2026-07-01T12:00:00Z"
  }
}
```

### Create Client

Create a new client record.

```http
POST /api/clients
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "555-0456",
  "address": "456 Oak Ave"
}
```

**Request Body:**
- `firstName` (required): Client's first name
- `lastName` (required): Client's last name
- `email` (optional): Email address
- `phone` (optional): Phone number
- `address` (optional): Street address

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "555-0456",
    "address": "456 Oak Ave",
    "createdAt": "2026-07-01T12:00:00Z"
  },
  "message": "Client created successfully"
}
```

### Update Client

Update an existing client.

```http
PUT /api/clients/:id
Content-Type: application/json

{
  "email": "newemail@example.com",
  "phone": "555-0789"
}
```

**Parameters:**
- `id` (required): Client ID

**Request Body:**
- Any client fields to update

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "newemail@example.com",
    "phone": "555-0789",
    "updatedAt": "2026-07-01T12:05:00Z"
  },
  "message": "Client updated successfully"
}
```

### Delete Client

Delete a client record.

```http
DELETE /api/clients/:id
```

**Parameters:**
- `id` (required): Client ID

**Response (200):**
```json
{
  "success": true,
  "message": "Client deleted successfully"
}
```

### Search Clients

Search for clients by name, email, or phone.

```http
GET /api/clients/search/query?q=john
```

**Query Parameters:**
- `q` (required): Search query string

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "555-0123"
    }
  ],
  "count": 1
}
```

---

## Bail Endpoints

### Get All Bail Records

Retrieve a paginated list of bail records.

```http
GET /api/bail?page=1&limit=10&status=pending
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Records per page (default: 10)
- `status` (optional): Filter by status (pending, approved, denied, completed, cancelled)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "clientId": 1,
      "amount": 5000,
      "status": "pending",
      "courtDate": "2026-08-15",
      "chargeDescription": "Speeding",
      "createdAt": "2026-07-01T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1
  }
}
```

### Get Single Bail Record

Retrieve a specific bail record by ID.

```http
GET /api/bail/:id
```

**Parameters:**
- `id` (required): Bail record ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "clientId": 1,
    "amount": 5000,
    "status": "pending",
    "courtDate": "2026-08-15",
    "chargeDescription": "Speeding",
    "createdAt": "2026-07-01T12:00:00Z"
  }
}
```

### Create Bail Record

Create a new bail record.

```http
POST /api/bail
Content-Type: application/json

{
  "clientId": 1,
  "amount": 10000,
  "status": "pending",
  "courtDate": "2026-08-20",
  "chargeDescription": "Felony charge"
}
```

**Request Body:**
- `clientId` (required): Associated client ID
- `amount` (required): Bail amount in dollars
- `status` (optional): Initial status (default: "pending")
- `courtDate` (optional): Court appearance date
- `chargeDescription` (optional): Description of charges

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "clientId": 1,
    "amount": 10000,
    "status": "pending",
    "courtDate": "2026-08-20",
    "chargeDescription": "Felony charge",
    "createdAt": "2026-07-01T12:00:00Z"
  },
  "message": "Bail record created successfully"
}
```

### Update Bail Record

Update an existing bail record.

```http
PUT /api/bail/:id
Content-Type: application/json

{
  "amount": 12000,
  "courtDate": "2026-08-25"
}
```

**Parameters:**
- `id` (required): Bail record ID

**Request Body:**
- Any bail record fields to update

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "clientId": 1,
    "amount": 12000,
    "status": "pending",
    "courtDate": "2026-08-25",
    "chargeDescription": "Speeding",
    "updatedAt": "2026-07-01T12:05:00Z"
  },
  "message": "Bail record updated successfully"
}
```

### Delete Bail Record

Delete a bail record.

```http
DELETE /api/bail/:id
```

**Parameters:**
- `id` (required): Bail record ID

**Response (200):**
```json
{
  "success": true,
  "message": "Bail record deleted successfully"
}
```

### Get Bail Records by Client

Retrieve all bail records for a specific client.

```http
GET /api/bail/client/:clientId
```

**Parameters:**
- `clientId` (required): Client ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "clientId": 1,
      "amount": 5000,
      "status": "pending",
      "chargeDescription": "Speeding",
      "createdAt": "2026-07-01T12:00:00Z"
    },
    {
      "id": 2,
      "clientId": 1,
      "amount": 10000,
      "status": "approved",
      "chargeDescription": "Felony charge",
      "createdAt": "2026-07-01T12:05:00Z"
    }
  ],
  "count": 2
}
```

### Update Bail Status

Update the status of a bail record.

```http
PATCH /api/bail/:id/status
Content-Type: application/json

{
  "status": "approved"
}
```

**Parameters:**
- `id` (required): Bail record ID

**Request Body:**
- `status` (required): New status (pending, approved, denied, completed, cancelled)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "clientId": 1,
    "amount": 5000,
    "status": "approved",
    "chargeDescription": "Speeding",
    "updatedAt": "2026-07-01T12:10:00Z"
  },
  "message": "Bail status updated to approved"
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Server error |

---

## Common Errors

### Missing Required Field

**Response (400):**
```json
{
  "success": false,
  "error": "First name and last name are required"
}
```

### Resource Not Found

**Response (404):**
```json
{
  "success": false,
  "error": "Client not found"
}
```

### Invalid Status

**Response (400):**
```json
{
  "success": false,
  "error": "Status must be one of: pending, approved, denied, completed, cancelled"
}
```

---

## Example Usage

### Create a Client and Associate Bail

```bash
# 1. Create client
curl -X POST http://localhost:3000/api/clients \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "555-0123"
  }'

# Response includes id: 1

# 2. Create bail for client
curl -X POST http://localhost:3000/api/bail \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": 1,
    "amount": 5000,
    "status": "pending",
    "chargeDescription": "Speeding"
  }'

# 3. Get all bail records for client
curl http://localhost:3000/api/bail/client/1

# 4. Update bail status
curl -X PATCH http://localhost:3000/api/bail/1/status \
  -H "Content-Type: application/json" \
  -d '{
    "status": "approved"
  }'
```

---

## Version History

- **v1.0.0** - Initial API release with client and bail management endpoints
