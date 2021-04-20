package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
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
import rva.jpa.Radnik;
import rva.repository.RadnikRepository;

@CrossOrigin
@RestController
@Api(tags= { "CRUD operacije za Radnik kontroler" })
public class RadnikRestController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private RadnikRepository radnikRepository;
	
	@GetMapping("radnik")
	@ApiOperation(value="Vraca kolekciju svih radnika")
	public Collection<Radnik> getList() {
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/q")
	@ApiOperation(value="Vraca kolekciju radnika po imenu ili prezimenu")
	public Collection<Radnik> getListByQuery(@RequestParam(name="ime", required=false, defaultValue="") String ime, @RequestParam(name="prezime", required=false, defaultValue="") String prezime) {
		return radnikRepository.findByImeContainingIgnoreCaseOrPrezimeContainingIgnoreCase(ime, prezime);
	}
	
	@GetMapping("radnik/{id}")
	@ApiOperation(value="Vraca radnika sa odgovarajucim ID-em")
	public Radnik get(@PathVariable("id") Integer id) {
		return radnikRepository.getOne(id);
	}
	
	@GetMapping("radnik/lk/{lk}")
	@ApiOperation(value="Vraca radnika sa odgovarajucom licnom kartom")
	public Radnik getByBrojLk(@PathVariable("lk") Integer lk) {
		return radnikRepository.findByBrojLk(lk);
	}
	
	@PostMapping("radnik")
	@ApiOperation(value="Kreira novog radnika")
	public ResponseEntity<Radnik> insertRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Radnik>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("radnik")
	@ApiOperation(value="Azurira postojeceg radnika")
	public ResponseEntity<Radnik> updateRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		
		radnikRepository.save(radnik);
		
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}
	
	@DeleteMapping("radnik/{id}")
	@ApiOperation(value="Brise radnika")
	public ResponseEntity<Radnik> deleteRadnik(@PathVariable("id") Integer id) {
		if (!radnikRepository.existsById(id)) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		
		if (id == -100) {
			jdbcTemplate.execute("DELETE FROM radnik WHERE id = -100");
			jdbcTemplate.execute("INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (-100, 'RIme', 'RPrz', 1234, 1, 1)");
		} else {
			radnikRepository.deleteById(id);
		}
		
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}
}
