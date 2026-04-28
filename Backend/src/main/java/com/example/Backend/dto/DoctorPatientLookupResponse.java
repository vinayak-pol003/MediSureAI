package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorPatientLookupResponse {
    private Long userId;
    private String mrn;
    private String name;
    private Integer age;
    private String gender;
    private String email;
}
