# Nodemailer Email API

This repository provides an API for sending emails using Nodemailer and managing email records in the database. It also allows you to fetch all users from the database.

```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```

DATABASE_URL="your_database_connection_string"
EMAIL_USER="your_email_user"
EMAIL_PASS="your_email_password"
LOGO_URL="optional_logo_url"

```

### Example `.env` file

```

DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
EMAIL_USER="example@example.com"
EMAIL_PASS="your_email_password"
LOGO_URL="https://example.com/logo.png"

````

Make sure to replace the placeholders with your actual database connection string and email credentials.

## API Routes

### Send Welcome Email

- **Endpoint**: `POST /api/send-welcome-email`
- **Description**: Sends a welcome email to a new user.
- **Request Body**:
  ```json
  {
    "fullname": "John Doe",
    "country": "USA",
    "email": "johndoe@example.com"
  }
````

- **Request Example**:

  ```bash
  curl -X POST http://localhost:3000/api/send-welcome-email \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": "John Doe",
    "country": "USA",
    "email": "johndoe@example.com"
  }'
  ```

- **Response Example**:
  ```json
  {
    "message": "Welcome email sent successfully."
  }
  ```

### Fetch All Users

- **Endpoint**: `GET /api/users`
- **Description**: Fetches all users from the database.
- **Request Example**:

  ```bash
  curl -X GET http://localhost:3000/api/users
  ```

- **Response Example**:
  ```json
  [
    {
      "id": 1,
      "fullname": "John Doe",
      "country": "USA",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "fullname": "Jane Smith",
      "country": "Canada",
      "email": "janesmith@example.com"
    }
  ]
  ```
