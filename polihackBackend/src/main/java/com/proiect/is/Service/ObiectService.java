package com.proiect.is.Service;

import com.proiect.is.Model.Obiecte;
import org.springframework.stereotype.Component;

@Component
public interface ObiectService {

    Obiecte findFirstById(Long id);

    void Insert(Obiecte ob);
}
