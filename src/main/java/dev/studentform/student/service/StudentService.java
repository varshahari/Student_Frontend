package dev.studentform.student.service;

import dev.studentform.student.modal.Student;


import java.util.List;



public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
