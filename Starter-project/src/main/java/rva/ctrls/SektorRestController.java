package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Sektor;
import rva.repository.SektorRepository;

@RestController
public class SektorRestController {
	@Autowired
	private SektorRepository sektorRepository;
	
	@GetMapping("sektor")
	public Collection<Sektor> getList() {
		return sektorRepository.findAll();
	}
	
	@GetMapping("sektor/{id}")
	public Sektor get(@PathVariable("id") Integer id) {
		return sektorRepository.getOne(id);
	}
}
