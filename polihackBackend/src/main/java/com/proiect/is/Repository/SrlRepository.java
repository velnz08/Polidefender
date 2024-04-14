package com.proiect.is.Repository;

import com.proiect.is.Model.SRL;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SrlRepository extends CrudRepository<SRL,Long> {
    SRL findFirstById(Long id);
    List<SRL> findAllBy();
}
