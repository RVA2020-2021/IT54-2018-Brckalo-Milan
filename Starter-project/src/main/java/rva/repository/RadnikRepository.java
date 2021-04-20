package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Radnik;

public interface RadnikRepository extends JpaRepository<Radnik, Integer> {
	Collection<Radnik> findByImeContainingIgnoreCaseOrPrezimeContainingIgnoreCase(String ime, String prezime);
	Radnik findByBrojLk(Integer brojLk);
}
