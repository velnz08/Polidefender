package com.proiect.is.Repository;

import com.proiect.is.Model.Users;
import lombok.NonNull;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<Users,Long> {
    Users findFirstById(Integer id);
    List<Users> findAllBy();
    Users findFirstByEmailAndPassword(String email, String password);
}
