package dev.studentform.student.service;

import dev.studentform.student.modal.Student;
import dev.studentform.student.rpository.StudentRepo;
import dev.studentform.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class Serviceimpl implements StudentService {

    @Autowired
    private StudentRepo studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}