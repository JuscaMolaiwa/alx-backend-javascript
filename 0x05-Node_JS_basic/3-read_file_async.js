const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').filter(line => line);
      const headers = lines.shift().split(',');

      if (headers.length < 2) {
        throw new Error('Cannot load the database');
      }

      const studentsByField = {};

      for (const line of lines) {
        const fields = line.split(',');
        if (fields.length === headers.length) {
          const field = fields[headers.length - 1].trim();
          const firstName = fields[0].trim();

          if (field && firstName) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        }
      }

      const totalStudents = Object.values(studentsByField).reduce(
        (acc, list) => acc + list.length,
        0
      );

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;

