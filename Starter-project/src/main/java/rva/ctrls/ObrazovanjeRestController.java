package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping("obrazovanje/q")
	public Collection<Obrazovanje> getListByQuery(@RequestParam(name="naziv", required=false) String naziv) {
		return obrazovanjeRepository.findListByNazivContainingIgnoreCase(naziv);
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
	
	@Transactional
	@DeleteMapping("obrazovanje/{id}")
	public ResponseEntity<Obrazovanje> deleteObrazovanje(@PathVariable("id") Integer id) {
		if (!obrazovanjeRepository.existsById(id)) {
			return new ResponseEntity<Obrazovanje>(HttpStatus.NO_CONTENT);
		}
		
		if (id == -100) {
			jdbcTemplate.execute("DELETE FROM obrazovanje WHERE id = -100");
			jdbcTemplate.execute("INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (-100, 'ONaziv', 'OSSS', 'OOpis')");
		} else {
			jdbcTemplate.execute("DELETE FROM radnik WHERE obrazovanje = " + id);
			
			obrazovanjeRepository.deleteById(id);
		}
		
		return new ResponseEntity<Obrazovanje>(HttpStatus.OK);
	}
}
