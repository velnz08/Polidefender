package com.proiect.is.Repository;

import com.proiect.is.Model.Bookmarks;
import com.proiect.is.Model.License;
import com.proiect.is.Model.Obiecte;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LicenseRepository extends CrudRepository<License, Integer> {
    License findLicenseByKey(String key);
    License save(License entity);
}
