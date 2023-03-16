package sesac.sesacmybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sesac.sesacmybatis.domain.Person;
import sesac.sesacmybatis.dto.PersonDTO;
import sesac.sesacmybatis.service.PersonService;

@Controller
// @RestController // personController 안에 있는 모든 함수들이 @ResponseBody 가 붙는다?
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
		if ( person == null ) return false;
		else return true;
	}

	@PostMapping("/info")
	public String postInfo(PersonDTO personDTO, Model model){
		PersonDTO person = personService.getPerson(personDTO);
		model.addAttribute("person",person);
		return "info";
	}

	@PostMapping("/info/edit")
	@ResponseBody
	public String postInfoEdit(@RequestBody PersonDTO personDTO) {
		personService.updatePerson(personDTO);
		return "";
	}
	@PostMapping("/info/delete")
	@ResponseBody
	public String postInfoDelete(@RequestBody PersonDTO personDTO) {
		personService.deletePerson(personDTO);
		return "";
	}
}
