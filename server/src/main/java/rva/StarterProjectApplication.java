package rva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
public class StarterProjectApplication {
	@RequestMapping("/")
    @ResponseBody
    String home() {
      return "Zdravo od PetiZadatak API!";
    }

	public static void main(String[] args) {
		SpringApplication.run(StarterProjectApplication.class, args); 
	}
}
