function Database() {
}

Database.prototype.set = (key, value) => {
  this[key] = value;
};

Database.prototype.get = (key) => {
  return this[key];
}

module.exports = Database;
