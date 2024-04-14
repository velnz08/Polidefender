package com.proiect.is.Controller;

import com.proiect.is.Model.Obiecte;
import com.proiect.is.Service.Implementation.ObiectServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/Obiect")
public class ObiectController {
    
    private final ObiectServiceImplementation obiectServiceImplementation;

    @GetMapping("/ReadData")
    public String getData(){
        return "asdas"; 
    }

    @PostMapping("/insertData")
    public void insert(@RequestBody Obiecte ob1) {
        obiectServiceImplementation.Insert(ob1);
    }

    @PostMapping("/GetById")
    public ResponseEntity ReadByID(@RequestBody Long id)
    {
        Obiecte ob = obiectServiceImplementation.findFirstById(id);

        System.out.println(id + " " + ob);
        return ResponseEntity.status(HttpStatus.OK).body(ob);
    }
}
