const Database = require('../src/database')
const expect = require('chai').expect;

describe('Database Class', () => {
  let db;
  beforeEach(() => {
    db = new Database();
  });

  it('#set adds a key-pair value to instance, #get returns value', () => {
    db.set("key", "value");
    expect(db.get("key")).to.eq("value")
  });
});
