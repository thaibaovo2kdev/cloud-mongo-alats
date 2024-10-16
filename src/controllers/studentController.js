const Student = require('../models/student');

async function createStudent(req, res) {
  const { name, address, country, school, city } = req.body;
  try {
    const student = new Student({ name, address, country, school, city });
    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
}

async function getAllStudents(req, res) {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
}

module.exports = { createStudent, getAllStudents };
