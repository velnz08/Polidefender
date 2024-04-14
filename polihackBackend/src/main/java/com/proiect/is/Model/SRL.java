package com.proiect.is.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "srl")
public class SRL {
    @Id
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;
    private String name;
    
}
