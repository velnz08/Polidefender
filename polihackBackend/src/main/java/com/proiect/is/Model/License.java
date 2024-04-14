package com.proiect.is.Model;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "License")
public class License{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String key;
    private Boolean used;
}