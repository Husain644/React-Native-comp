import SQLite from 'react-native-sqlite-storage';

// Enable promises + debug
SQLite.enablePromise(true);
SQLite.DEBUG(true);

let dbInstance = null;

export async function getDBConnection() {
  if (dbInstance) return dbInstance;

  dbInstance = await SQLite.openDatabase({
    name: 'students.db',
    location: 'default',
  });

  return dbInstance;
}

export async function closeDBConnection() {
  if (dbInstance) {
    await dbInstance.close();
    dbInstance = null;
  } else {
    console.log('No database connection to close.');
  }
}

export async function createTables() {
  const db = await getDBConnection();

  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      class TEXT,
      section TEXT,
      roll INTEGER
    );
  `;

  await db.executeSql(query);
}

export async function addStudent(student) {
  const db = await getDBConnection();

  const insertQuery = `
    INSERT INTO students (name, class, section, roll)
    VALUES (?, ?, ?, ?);
  `;

  const params = [
    student.name,
    student.class,
    student.section,
    student.roll,
  ];

  const [result] = await db.executeSql(insertQuery, params);
  return result.insertId;
}

export async function getAllStudents() {
  const db = await getDBConnection();

  const [results] = await db.executeSql('SELECT * FROM students;');
  const rows = results.rows;
  const students = [];

  for (let i = 0; i < rows.length; i++) {
    students.push(rows.item(i));
  }

  return students;
}

export async function searchStudents({ className, section, roll, name }) {
  const db = await getDBConnection();

  let query = 'SELECT * FROM students WHERE 1 = 1';
  const params = [];

  if (className) {
    query += ' AND class = ?';
    params.push(className);
  }
  if (section) {
    query += ' AND section = ?';
    params.push(section);
  }
  if (roll != null) {
    query += ' AND roll = ?';
    params.push(roll);
  }
  if (name) {
    query += ' AND name LIKE ?';
    params.push(`%${name}%`);
  }

  query += ' ORDER BY class ASC, roll ASC';

  const [results] = await db.executeSql(query, params);
  const rows = results.rows;
  const students = [];

  for (let i = 0; i < rows.length; i++) {
    students.push(rows.item(i));
  }

  return students;
}

export async function updateStudent(id, updates) {
  const db = await getDBConnection();

  const { name, className, section, roll } = updates;

  const query = `
    UPDATE students
    SET name = ?, class = ?, section = ?, roll = ?
    WHERE id = ?;
  `;

  const params = [name, className, section, roll, id];

  const [result] = await db.executeSql(query, params);
  return result.rowsAffected > 0;
}

export async function deleteStudent(id) {
  const db = await getDBConnection();
  const [result] = await db.executeSql('DELETE FROM students WHERE id = ?;', [id]);
  return result.rowsAffected > 0;
}

export async function clearStudents() {
  const db = await getDBConnection();
  await db.executeSql('DELETE FROM students;');
}
