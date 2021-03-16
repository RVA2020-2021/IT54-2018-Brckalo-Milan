package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Obrazovanje;
import rva.repository.ObrazovanjeRepository;

@RestController
public class ObrazovanjeRestController {
	@Autowired
	private ObrazovanjeRepository obrazovanjeRepository;
	
	@GetMapping("obrazovanje")
	public Collection<Obrazovanje> getList() {
		return obrazovanjeRepository.findAll();
	}
	
	@GetMapping("obrazovanje/{id}")
	public Obrazovanje get(@PathVariable("id") Integer id) {
		return obrazovanjeRepository.getOne(id);
	}
}
