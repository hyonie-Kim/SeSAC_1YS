package sesac2.sesac2.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac2.sesac2.spring.Vo.UserVO;
import sesac2.sesac2.spring.dto.UserDTO;

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

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody // Java객체를 Json기반 변환을 한다. 값을 보낸다. res.send 개념
    public String postAPI3(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
//        return "response"; ResponseBody를 붙이면 response 값으로 반환함
        return "이름은: " + name;
    }

//    실습3. API-GET
    @GetMapping("/introduce/{name}")
    public String practiceGetAPI(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/introduce2/{name}/{age}")
    public String practiceGetAPI2(@PathVariable String name, @PathVariable String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age",age);
        return "response";
    }

//    @GetMapping({"/post/introduce", "/post/introduce/{name}/{age}"})
//    public String getAPI4(@PathVariable String name, @PathVariable(value = "gender", required = false) String abc, Model model){
//        model.addAttribute("name", name);
//        model.addAttribute("gender",gender);
//        model.addAttribute("date",date);
//
//
//        return "response";
//    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO){
        String msg = userDTO.getName() + " "+ userDTO.getAge() +"!!!";
        return msg;
    }

    @GetMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " "+ userDTO.getAge()+"!!!";
        return msg;
    }

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 :" + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 :" + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @GetMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 :" + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 :" + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @GetMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 :" + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @GetMapping("axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름: " + name + "\n나이" + age;
        return msg;
    }
    @GetMapping("axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO userVO){
        String msg = "이름: " + userVO.getName() + "\n나이" + userVO.getAge();
        return msg;
    }

    @GetMapping("axios/vo/response3")
    @ResponseBody
    public String axiosvoAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름: " + name + "\n나이" + age;
        return msg;
    }
    @GetMapping("axios/vo/response4")
    @ResponseBody
    public String axiosvoAPI4(UserVO userVO){
        String msg = "이름: " + userVO.getName() + "\n나이" + userVO.getAge();
        return msg;
    }


}

