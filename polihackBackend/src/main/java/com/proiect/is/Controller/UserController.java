package com.proiect.is.Controller;

import com.proiect.is.DTO.ObiectNou;
import com.proiect.is.Model.License;
import com.proiect.is.Model.Users;
import com.proiect.is.Service.Implementation.LicenseServiceImplementation;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/User")
public class UserController {
    
    private final UserServiceImplementation userServiceImplementation;
    private final LicenseServiceImplementation licenseServiceImplementation;

    @PostMapping("/GetLicense")
    public ResponseEntity<License> getLicense(@RequestBody License key){
        License l = licenseServiceImplementation.findusedBoolean(key.getKey());

        if( l != null && l.getUsed() == false){
            l.setUsed(true);
            l.setKey(l.getKey() + '\'');
            licenseServiceImplementation.save(l);
            return ResponseEntity.status(HttpStatus.OK).body(l);
        }
        else return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
    } 

    @GetMapping("/GetData")
    public ResponseEntity<List<Users>> getMessage() {
        List<Users> users = userServiceImplementation.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @PostMapping("/InsertData")
    public ResponseEntity<String> insertUser(@RequestBody Users u) {
        userServiceImplementation.Insert(u);
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users u2) {
        Users u = userServiceImplementation.findFirstByEmailAndPassword(u2.getEmail(), u2.getPassword());
        if(u == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("");
        }
        return ResponseEntity.status(HttpStatus.OK).body(u.toString());
    }

    @PostMapping ("/Print")
    public void printMessage(@RequestBody ObiectNou data)
    {
        System.out.println(data);
    }

    @PostMapping ("/checkUser")
    public void checkUser(@RequestBody ObiectNou data)
    {
        System.out.println(data);
    }

    @PostMapping("/deleteuser")
    public ResponseEntity<String> deleteUser(Users u){
        userServiceImplementation.getAll();
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

    @PostMapping("/updateTokens")
    public ResponseEntity<String> updateTokens(Users u){
        if(u.getTokens() == null)
            u.setTokens(0L);
        userServiceImplementation.Insert(u);
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

}
