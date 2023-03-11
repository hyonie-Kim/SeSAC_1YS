package sesac2.sesac2.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value = "name", required = true) String name2, Model model){
        model.addAttribute("name", name2); // response1에게 전달해줌.
        return "response";
    }
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){
        model.addAttribute("name", name2); // response1에게 전달해줌.
        return "response";
    }
    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age",abc);
        return "response";
    }

//    값이 하나가 있든 두개가 잇든 getAPI4를 이용해서 처리를 해라뜻
    @GetMapping({"/get/response4/{name}/", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age",abc);
        return "response";
    }
}
