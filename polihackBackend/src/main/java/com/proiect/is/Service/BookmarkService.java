package com.proiect.is.Service;

import com.proiect.is.Model.Bookmarks;
import com.proiect.is.Model.Users;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public interface BookmarkService {
    List<Bookmarks> findAllByEmail(String email);

    Bookmarks save(Bookmarks b);
    void delete(Bookmarks b);
    Bookmarks findFirstByAnswerAndEmail(String answer, String email);
}
