package rva.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@NamedQuery(name="Radnik.findAll", query="SELECT r FROM Radnik r")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Radnik implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="RADNIK_ID_GENERATOR", sequenceName="RADNIK_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="RADNIK_ID_GENERATOR")
	private Integer id;

	@Column(name="broj_lk")
	private Integer brojLk;

	private String ime;

	private String prezime;

	@ManyToOne
	@JoinColumn(name="obrazovanje")
	private Obrazovanje obrazovanje;

	@ManyToOne
	@JoinColumn(name="sektor")
	private Sektor sektor;

	public Radnik() {
		//
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getBrojLk() {
		return this.brojLk;
	}

	public void setBrojLk(Integer brojLk) {
		this.brojLk = brojLk;
	}

	public String getIme() {
		return this.ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return this.prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public Obrazovanje getObrazovanje() {
		return this.obrazovanje;
	}

	public void setObrazovanje(Obrazovanje obrazovanje) {
		this.obrazovanje = obrazovanje;
	}

	public Sektor getSektor() {
		return this.sektor;
	}

	public void setSektor(Sektor sektor) {
		this.sektor = sektor;
	}
}
