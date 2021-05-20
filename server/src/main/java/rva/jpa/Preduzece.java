package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@Entity
@NamedQuery(name="Preduzece.findAll", query="SELECT p FROM Preduzece p")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Preduzece implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="PREDUZECE_ID_GENERATOR", sequenceName="PREDUZECE_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PREDUZECE_ID_GENERATOR")
	private Integer id;

	private String naziv;

	private String opis;

	private Integer pib;

	private String sediste;

	@JsonIgnore
	@OneToMany(mappedBy="preduzece")
	private List<Sektor> sektori;

	public Preduzece() {
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

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Integer getPib() {
		return this.pib;
	}

	public void setPib(Integer pib) {
		this.pib = pib;
	}

	public String getSediste() {
		return this.sediste;
	}

	public void setSediste(String sediste) {
		this.sediste = sediste;
	}

	public List<Sektor> getSektori() {
		return this.sektori;
	}

	public void setSektori(List<Sektor> sektori) {
		this.sektori = sektori;
	}

	public Sektor addSektor(Sektor sektor) {
		getSektori().add(sektor);
		sektor.setPreduzece(this);

		return sektor;
	}

	public Sektor removeSektor(Sektor sektor) {
		getSektori().remove(sektor);
		sektor.setPreduzece(null);

		return sektor;
	}
}
