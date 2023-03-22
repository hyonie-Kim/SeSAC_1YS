package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sesac.sesac.spring.Person;

import java.util.ArrayList;

@Controller
public class HelloController {
    @GetMapping("/hi") //app.get 8080뒤에 누군가 접속을하면 아래 함수 실행
    public String getHi(Model model){
        model.addAttribute("msg","메세지입니다.!!");
        model.addAttribute("utext","<strong>utext입니다.</strong>");
        model.addAttribute("age",20);

        return  "hi"; // 문자열을 리턴하는 것은 res.render("hi")
    }

//    실습문제 2번
    @GetMapping("/people")
    public String getPeople(Model model){
        ArrayList<Person> people = new ArrayList<Person>();
        people.add(new Person("kim",10));
        people.add(new Person("lee",20));
        people.add(new Person("hong",30));
        people.add(new Person("park",40));
        people.add(new Person("shin",50));

        model.addAttribute("people",people);
        return "people";
    }

}


