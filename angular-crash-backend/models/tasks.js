const db = require('../util/database');

module.exports = class tasks {
  constructor (id, text, day, reminder) {
    this.id = id;
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM tasks');
  }

  static post(id, text, day, reminder) {
    const sql = 'INSERT INTO tasks (id, text, day, reminder) VALUES (?, ?, ?, ?)';
    const params = [id, text, day, reminder];
    return db.execute(sql, params);
  }
  
  static update(id, text, day, reminder) {
    const sql = 'UPDATE tasks SET text = ?, day = ?, reminder = ? WHERE id = ?';
    const params = [text, day, reminder, id];
    return db.execute(sql, params);
  }
  
  static delete(id) {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    return db.execute(sql, [id]);
  }
  
};
