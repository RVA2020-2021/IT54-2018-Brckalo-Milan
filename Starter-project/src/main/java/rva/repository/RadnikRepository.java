package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Radnik;

public interface RadnikRepository extends JpaRepository<Radnik, Integer> {
	Collection<Radnik> findRadnikByImeContainingIgnoreCase(String ime);
	Collection<Radnik> findRadnikByPrezimeContainingIgnoreCase(String prezime);
	Radnik findRadnikByBrojLk(Integer brojLk);
}
