# Development Setup Guide

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: Latest version

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/sherrillwilliams919-source/MyBailHelper.git
cd MyBailHelper
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your local configuration:

```
PORT=3000
NODE_ENV=development
```

### 4. Verify Installation

```bash
npm run lint
npm test
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The server will start with hot-reload enabled.

### Production Mode

```bash
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the application |
| `npm run dev` | Start with watch mode |
| `npm test` | Run tests with coverage |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code style |
| `npm run lint:fix` | Fix code style issues |
| `npm run format` | Format code with Prettier |
| `npm run build` | Build for production |

## Project Structure

```
src/
  ├── index.js           # Application entry point
  ├── config/            # Configuration files
  ├── routes/            # API route handlers
  ├── controllers/       # Business logic
  ├── models/            # Data models
  ├── middleware/        # Express middleware
  └── utils/             # Utility functions

tests/
  ├── unit/              # Unit tests
  ├── integration/       # Integration tests
  └── fixtures/          # Test data

docs/
  ├── API.md             # API documentation
  └── SETUP.md           # This file
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, set a different port:

```bash
PORT=3001 npm run dev
```

### Dependencies Installation Issues

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tests Failing

Ensure you're using Node.js 18+:

```bash
node --version
```

## Next Steps

1. Read the [API Documentation](./API.md)
2. Review [Contributing Guidelines](../CONTRIBUTING.md)
3. Check [README](../README.md) for project overview

## Support

For issues or questions, open an issue on GitHub.
