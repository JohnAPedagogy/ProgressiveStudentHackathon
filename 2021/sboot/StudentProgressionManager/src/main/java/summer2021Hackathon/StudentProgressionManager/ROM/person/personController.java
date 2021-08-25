package main.java.summer2021Hackathon.StudentProgressionManager.ROM.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
public class StudentController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping
    List<Person> getPersons() {
        return personRepository.findAll();
    }

    @PostMapping
    Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }
}