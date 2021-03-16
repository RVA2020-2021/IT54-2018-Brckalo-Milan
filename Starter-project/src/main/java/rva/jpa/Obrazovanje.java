package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@Entity
@NamedQuery(name="Obrazovanje.findAll", query="SELECT o FROM Obrazovanje o")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Obrazovanje implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="OBRAZOVANJE_ID_GENERATOR", sequenceName="OBRAZOVANJE_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="OBRAZOVANJE_ID_GENERATOR")
	private Integer id;

	private String naziv;

	private String opis;

	@Column(name="stepen_strucne_spreme")
	private String stepenStrucneSpreme;

	@JsonIgnore
	@OneToMany(mappedBy="obrazovanje")
	private List<Radnik> radnici;

	public Obrazovanje() {
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

	public String getStepenStrucneSpreme() {
		return this.stepenStrucneSpreme;
	}

	public void setStepenStrucneSpreme(String stepenStrucneSpreme) {
		this.stepenStrucneSpreme = stepenStrucneSpreme;
	}

	public List<Radnik> getRadnici() {
		return this.radnici;
	}

	public void setRadnici(List<Radnik> radnici) {
		this.radnici = radnici;
	}

	public Radnik addRadnik(Radnik radnik) {
		getRadnici().add(radnik);
		radnik.setObrazovanje(this);

		return radnik;
	}

	public Radnik removeRadnik(Radnik radnik) {
		getRadnici().remove(radnik);
		radnik.setObrazovanje(null);

		return radnik;
	}
}
