package com.example.Backend.service;

import com.example.Backend.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
@RequiredArgsConstructor
@Slf4j
public class MrnGeneratorService {

    private static final String ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    private static final int TOKEN_LENGTH = 8;
    private static final int MAX_ATTEMPTS = 10;
    private static final SecureRandom RNG = new SecureRandom();

    private final PatientRepository patientRepository;

    public String generate() {
        StringBuilder sb = new StringBuilder("MRN-");
        for (int i = 0; i < TOKEN_LENGTH; i++) {
            sb.append(ALPHABET.charAt(RNG.nextInt(ALPHABET.length())));
        }
        return sb.toString();
    }

    public String generateUnique() {
        for (int attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
            String candidate = generate();
            if (!patientRepository.existsByMrn(candidate)) {
                return candidate;
            }
            log.warn("MRN collision on attempt {} for candidate {}", attempt + 1, candidate);
        }
        throw new IllegalStateException("Could not generate a unique MRN after " + MAX_ATTEMPTS + " attempts");
    }
}
