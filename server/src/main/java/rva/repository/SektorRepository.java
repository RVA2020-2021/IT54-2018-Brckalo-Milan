package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import rva.jpa.Preduzece;
import rva.jpa.Sektor;

public interface SektorRepository extends JpaRepository<Sektor, Integer> {
	Collection<Sektor> findByPreduzece(Preduzece preduzece);
	
	@Query("FROM Sektor s WHERE s.preduzece.id = :preduzeceId")
    Collection<Sektor> findAllByCurrentPreduzece(@Param("preduzeceId") Integer preduzeceId);
}
