package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Radnik;
import rva.repository.RadnikRepository;

@RestController
public class RadnikRestRepository {
	@Autowired
	private RadnikRepository radnikRepository;
	
	@GetMapping("radnik")
	public Collection<Radnik> getList() {
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/{id}")
	public Radnik get(@PathVariable("id") Integer id) {
		return radnikRepository.getOne(id);
	}
}
