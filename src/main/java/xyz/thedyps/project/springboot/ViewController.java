package xyz.thedyps.project.springboot;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping(path = {"/goods/**"})
    public String index() {
        return "forward:/index.html";
    }
}