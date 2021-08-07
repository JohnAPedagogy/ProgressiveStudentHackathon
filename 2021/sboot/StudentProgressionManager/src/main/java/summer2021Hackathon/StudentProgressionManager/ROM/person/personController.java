package com.kriscfoster.school.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
public class StudentController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping
    List<Student> getStudents() {
        return personRepository.findAll();
    }

    @PostMapping
    Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }
}