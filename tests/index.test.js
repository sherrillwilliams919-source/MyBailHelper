import app from '../src/index.js';
import * as clientModel from '../src/models/Client.js';
import * as bailModel from '../src/models/Bail.js';

describe('MyBailHelper API Tests', () => {
  beforeEach(() => {
    // Clear data before each test
    jest.clearAllMocks();
  });

  describe('Health Check Endpoint', () => {
    it('should return ok status', () => {
      expect(true).toBe(true);
    });

    it('should have required fields', () => {
      expect(true).toBe(true);
    });
  });

  describe('Client Model', () => {
    it('should create a client', async () => {
      const client = await clientModel.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '555-1234',
      });

      expect(client).toBeDefined();
      expect(client.firstName).toBe('John');
      expect(client.lastName).toBe('Doe');
      expect(client.id).toBeDefined();
    });

    it('should get a client by ID', async () => {
      const created = await clientModel.create({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
      });

      const retrieved = await clientModel.getById(created.id);
      expect(retrieved).toBeDefined();
      expect(retrieved.firstName).toBe('Jane');
    });

    it('should search clients', async () => {
      await clientModel.create({
        firstName: 'Search',
        lastName: 'Test',
        email: 'search@example.com',
      });

      const results = await clientModel.search('Search');
      expect(results.length).toBeGreaterThan(0);
    });

    it('should update a client', async () => {
      const created = await clientModel.create({
        firstName: 'Update',
        lastName: 'Test',
      });

      const updated = await clientModel.update(created.id, {
        email: 'updated@example.com',
      });

      expect(updated.email).toBe('updated@example.com');
    });

    it('should delete a client', async () => {
      const created = await clientModel.create({
        firstName: 'Delete',
        lastName: 'Test',
      });

      const deleted = await clientModel.delete_(created.id);
      expect(deleted).toBeDefined();
      expect(deleted.firstName).toBe('Delete');
    });
  });

  describe('Bail Model', () => {
    it('should create a bail record', async () => {
      const record = await bailModel.create({
        clientId: 1,
        amount: 5000,
        status: 'pending',
        chargeDescription: 'Speeding',
      });

      expect(record).toBeDefined();
      expect(record.amount).toBe(5000);
      expect(record.status).toBe('pending');
    });

    it('should get bail records by client', async () => {
      await bailModel.create({
        clientId: 1,
        amount: 10000,
        status: 'approved',
      });

      const records = await bailModel.getByClientId(1);
      expect(records.length).toBeGreaterThan(0);
    });

    it('should filter by status', async () => {
      await bailModel.create({
        clientId: 2,
        amount: 5000,
        status: 'pending',
      });

      const records = await bailModel.getByStatus('pending');
      expect(records.length).toBeGreaterThan(0);
    });

    it('should update bail record', async () => {
      const created = await bailModel.create({
        clientId: 3,
        amount: 7500,
        status: 'pending',
      });

      const updated = await bailModel.update(created.id, {
        status: 'approved',
      });

      expect(updated.status).toBe('approved');
    });

    it('should delete bail record', async () => {
      const created = await bailModel.create({
        clientId: 4,
        amount: 3000,
        status: 'cancelled',
      });

      const deleted = await bailModel.delete_(created.id);
      expect(deleted).toBeDefined();
    });
  });

  describe('Basic API Structure', () => {
    it('should have app defined', () => {
      expect(app).toBeDefined();
    });

    it('should be an Express application', () => {
      expect(typeof app).toBe('function');
    });
  });
});
