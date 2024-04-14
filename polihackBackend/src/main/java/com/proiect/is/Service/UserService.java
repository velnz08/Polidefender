package com.proiect.is.Service;

import com.proiect.is.Model.Users;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public interface UserService {
    Users findFirstById(Integer id);

    void Insert(Users acc);

    List<Users> getAll();

    Users findFirstByEmailAndPassword(String email, String password);

}
