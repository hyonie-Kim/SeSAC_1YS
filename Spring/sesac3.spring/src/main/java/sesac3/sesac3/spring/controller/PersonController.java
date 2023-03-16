package sesac3.sesac3.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sesac3.sesac3.spring.dto.PersonDTO;
import sesac3.sesac3.spring.service.PersonService;

@Controller
@RequestMapping("/person")
public class PersonController {
    @Autowired
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
        return "register";

    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){
    personService.insertPerson(personDTO);
        return "";
    }
    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }


    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);

        if(person == null) return false;
        else return true;
    }
    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO){
        return "";
    }
}


