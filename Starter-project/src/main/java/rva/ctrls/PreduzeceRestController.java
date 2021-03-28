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

import rva.jpa.Preduzece;
import rva.repository.PreduzeceRepository;

@RestController
public class PreduzeceRestController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PreduzeceRepository preduzeceRepository;
	
	@GetMapping("preduzece")
	public Collection<Preduzece> getList() {
		return preduzeceRepository.findAll();
	}
	
	@GetMapping("preduzece/{id}")
	public Preduzece get(@PathVariable("id") Integer id) {
		return preduzeceRepository.getOne(id);
	}
	
	@PostMapping("preduzece")
	public ResponseEntity<Preduzece> insertPreduzece(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			preduzeceRepository.save(preduzece);
			
			return new ResponseEntity<Preduzece>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Preduzece>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("preduzece")
	public ResponseEntity<Preduzece> updatePreduzece(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		
		preduzeceRepository.save(preduzece);
		
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
	
	@DeleteMapping("preduzece/{id}")
	public ResponseEntity<Preduzece> deletePreduzece(@PathVariable("id") Integer id) {
		if (!preduzeceRepository.existsById(id)) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		
		preduzeceRepository.deleteById(id);
		
		if (id == -100) {
			String sql = "INSERT INTO \"preduzece\"(\"id\", \"naziv\", \"opis\", \"pib\", \"sediste\") VALUES (-100, 'PreduzeceNaziv', 'PreduzeceOpis', 'PreduzecePIB', 'PreduzeceSediste')";
			
			jdbcTemplate.execute(sql);
		}
		
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
}
