package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.License;
import com.proiect.is.Repository.LicenseRepository;
import com.proiect.is.Service.LicenseService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LicenseServiceImplementation implements LicenseService{
    @Autowired
    private LicenseRepository licenseRepository;
    @Override
    public License findusedBoolean(String key){
        License l = licenseRepository.findLicenseByKey(key);
        return l;
    }
    @Override
    public void save(License l) {
        licenseRepository.save(l);
    }

}