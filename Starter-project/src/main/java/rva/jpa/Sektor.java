package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@Entity
@NamedQuery(name="Sektor.findAll", query="SELECT s FROM Sektor s")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Sektor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="SEKTOR_ID_GENERATOR", sequenceName="SEKTOR_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEKTOR_ID_GENERATOR")
	private Integer id;

	private String naziv;

	private String oznaka;

	@JsonIgnore
	@OneToMany(mappedBy="sektor")
	private List<Radnik> radnici;

	@ManyToOne
	@JoinColumn(name="preduzece")
	private Preduzece preduzece;

	public Sektor() {
		//
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNaziv() {
		return this.naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getOznaka() {
		return this.oznaka;
	}

	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}

	public List<Radnik> getRadnici() {
		return this.radnici;
	}

	public void setRadnici(List<Radnik> radnici) {
		this.radnici = radnici;
	}

	public Radnik addRadnik(Radnik radnik) {
		getRadnici().add(radnik);
		radnik.setSektor(this);

		return radnik;
	}

	public Radnik removeRadnik(Radnik radnik) {
		getRadnici().remove(radnik);
		radnik.setSektor(null);

		return radnik;
	}

	public Preduzece getPreduzece() {
		return this.preduzece;
	}

	public void setPreduzece(Preduzece preduzece) {
		this.preduzece = preduzece;
	}
}
