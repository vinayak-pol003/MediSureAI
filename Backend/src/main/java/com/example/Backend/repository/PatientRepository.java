package com.example.Backend.repository;

import com.example.Backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findByUserId(Long userId);

    Optional<Patient> findByMrn(String mrn);

    boolean existsByMrn(String mrn);

    Optional<Patient> findByUserEmail(String email);
}