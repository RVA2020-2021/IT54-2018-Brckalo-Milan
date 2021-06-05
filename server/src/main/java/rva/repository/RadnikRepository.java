package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import rva.jpa.Radnik;

public interface RadnikRepository extends JpaRepository<Radnik, Integer> {
	Collection<Radnik> findByImeContainingIgnoreCaseOrPrezimeContainingIgnoreCase(String ime, String prezime);
	Radnik findByBrojLk(Integer brojLk);
	
	@Query("FROM Radnik r WHERE r.obrazovanje.id = :obrazovanjeId")
    Collection<Radnik> findAllByCurrentObrazovanje(@Param("obrazovanjeId") Integer obrazovanjeId);
	@Query("FROM Radnik r WHERE r.sektor.preduzece.id = :preduzeceId")
    Collection<Radnik> findAllByCurrentPreduzece(@Param("preduzeceId") Integer preduzeceId);
	@Query("FROM Radnik r WHERE r.sektor.id = :sektorId")
    Collection<Radnik> findAllByCurrentSektor(@Param("sektorId") Integer sektorId);
}
