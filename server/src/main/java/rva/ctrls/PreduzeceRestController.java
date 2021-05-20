package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Preduzece;
import rva.jpa.Sektor;
import rva.repository.PreduzeceRepository;
import rva.repository.SektorRepository;

@CrossOrigin
@RestController
@Api(tags= { "CRUD operacije za Preduzece kontroler" })
public class PreduzeceRestController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PreduzeceRepository preduzeceRepository;
	
	@Autowired
	private SektorRepository sektorRepository;
	
	@GetMapping("preduzece")
	@ApiOperation(value="Vraca kolekciju svih preduzeca")
	public Collection<Preduzece> getList() {
		return preduzeceRepository.findAll();
	}
	
	@GetMapping("preduzece/q")
	@ApiOperation(value="Vraca kolekciju vrsta obrazovanja po nazivu")
	public Collection<Preduzece> getListByQuery(@RequestParam(name="naziv", required=false) String naziv) {
		return preduzeceRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@GetMapping("preduzece/{id}")
	@ApiOperation(value="Vraca preduzece sa odgovarajucim ID-em")
	public Preduzece get(@PathVariable(name="id", required=false) Integer id) {
		return preduzeceRepository.getOne(id);
	}
	
	@GetMapping("preduzece/pib/{pib}")
	@ApiOperation(value="Vraca preduzece sa odgovarajucim PIB-om")
	public Preduzece getByPIB(@PathVariable(name="pib", required=false) Integer pib) {
		return preduzeceRepository.findByPib(pib);
	}
	
	@PostMapping("preduzece")
	@ApiOperation(value="Kreira novo preduzece")
	public ResponseEntity<Preduzece> insertPreduzece(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			preduzeceRepository.save(preduzece);
			
			return new ResponseEntity<Preduzece>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Preduzece>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("preduzece")
	@ApiOperation(value="Azurira postojece preduzece")
	public ResponseEntity<Preduzece> updatePreduzece(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		
		preduzeceRepository.save(preduzece);
		
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
	
	@Transactional
	@DeleteMapping("preduzece/{id}")
	@ApiOperation(value="Brise preduzece i njene veze sa drugim tabelama")
	public ResponseEntity<Preduzece> deletePreduzece(@PathVariable("id") Integer id) {	
		if (!preduzeceRepository.existsById(id)) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		
		if (id == -100) {
			jdbcTemplate.execute("DELETE FROM preduzece WHERE id = -100");
			jdbcTemplate.execute("INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (-100, 'PNaziv', 1020, 'PSediste', 'POpis')");
		} else {
			Collection<Sektor> sektoriByPreduzece = sektorRepository.findByPreduzece(preduzeceRepository.getOne(id));
			
			if (sektoriByPreduzece.size() > 0) {
				String sektori = "(";
				
				for (Sektor s : sektoriByPreduzece) {
					sektori += s.getId() + ",";
				}
				
				sektori = sektori.substring(0, sektori.length() - 1) + ")";
				
				jdbcTemplate.execute("DELETE FROM radnik WHERE sektor IN " + sektori);
			}
			
			jdbcTemplate.execute("DELETE FROM sektor WHERE preduzece = " + id);
			
			preduzeceRepository.deleteById(id);
		}
		
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
}
