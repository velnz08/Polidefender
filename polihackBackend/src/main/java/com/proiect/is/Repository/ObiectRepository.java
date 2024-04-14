package com.proiect.is.Repository;

import com.proiect.is.Model.Obiecte;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ObiectRepository extends CrudRepository<Obiecte,Long> {
    Obiecte findFirstById(Long id);

    Obiecte save(Obiecte entity);
}
