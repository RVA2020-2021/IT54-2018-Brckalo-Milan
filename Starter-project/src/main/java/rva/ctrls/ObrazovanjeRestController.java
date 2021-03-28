package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Obrazovanje;
import rva.repository.ObrazovanjeRepository;

@RestController
public class ObrazovanjeRestController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
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
	
	@PostMapping("obrazovanje")
	public ResponseEntity<Obrazovanje> insertObrazovanje(@RequestBody Obrazovanje obrazovanje) {
		if (!obrazovanjeRepository.existsById(obrazovanje.getId())) {
			obrazovanjeRepository.save(obrazovanje);
			
			return new ResponseEntity<Obrazovanje>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Obrazovanje>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("obrazovanje")
	public ResponseEntity<Obrazovanje> updateObrazovanje(@RequestBody Obrazovanje obrazovanje) {
		if (!obrazovanjeRepository.existsById(obrazovanje.getId())) {
			return new ResponseEntity<Obrazovanje>(HttpStatus.NO_CONTENT);
		}
		
		obrazovanjeRepository.save(obrazovanje);
		
		return new ResponseEntity<Obrazovanje>(HttpStatus.OK);
	}
	
	@DeleteMapping("obrazovanje/{id}")
	public ResponseEntity<Obrazovanje> deleteObrazovanje(@PathVariable("id") Integer id) {
		if (!obrazovanjeRepository.existsById(id)) {
			return new ResponseEntity<Obrazovanje>(HttpStatus.NO_CONTENT);
		}
		
		obrazovanjeRepository.deleteById(id);
		
		if (id == -100) {
			String sql = "INSERT INTO \"obrazovanje\"(\"id\", \"naziv\", \"stepen_strucne_spreme\", \"opis\") VALUES (-100, 'ObrazovanjeNaziv', 'ObrazovanjeSSS', 'ObrazovanjeOpis')";
			
			jdbcTemplate.execute(sql);
		}
		
		return new ResponseEntity<Obrazovanje>(HttpStatus.OK);
	}
}
