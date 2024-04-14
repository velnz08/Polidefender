package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.Users;
import com.proiect.is.Repository.UserRepository;
import com.proiect.is.Service.UserService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public Users findFirstById(Integer id ){
        return userRepository.findFirstById(id);
    }

    @Override
    public void Insert(Users acc) {
        userRepository.save(acc);
    }

    @Override
    public List<Users> getAll() {
        return userRepository.findAllBy();
    }

    @Override
    public Users findFirstByEmailAndPassword(String email, String password) {
        return userRepository.findFirstByEmailAndPassword(email, password);
    }


}
