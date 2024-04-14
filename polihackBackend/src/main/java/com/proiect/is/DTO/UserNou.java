package com.proiect.is.DTO;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class UserNou {
    private Long id;
    private String username;
    private String name;
    private String email;
    private String password;
    private Long tokens;
}
