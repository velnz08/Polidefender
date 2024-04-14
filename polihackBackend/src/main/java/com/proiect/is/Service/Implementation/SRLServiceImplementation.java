package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.Users;
import com.proiect.is.Repository.SrlRepository;
import com.proiect.is.Repository.UserRepository;
import com.proiect.is.Service.SRLService;
import com.proiect.is.Service.UserService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SRLServiceImplementation implements SRLService {
    @Autowired
    private SrlRepository srlRepository;


}
