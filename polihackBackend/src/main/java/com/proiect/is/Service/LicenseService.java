package com.proiect.is.Service;
import com.proiect.is.Model.License;
import lombok.NonNull;
import org.springframework.stereotype.Component;
@Component
public interface LicenseService {
    License findusedBoolean(String key);

    void save(License l);
}