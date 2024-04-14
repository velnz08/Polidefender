package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.Bookmarks;
import com.proiect.is.Repository.BookmarksRepository;
import com.proiect.is.Service.BookmarkService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkServiceImplementation implements BookmarkService{
    @Autowired
    private BookmarksRepository bookmarkRepo;

    @Override
    public List<Bookmarks> findAllByEmail(String email) {
        return bookmarkRepo.findAllByEmail(email);
    }

    @Override
    public Bookmarks save(Bookmarks b) {
        return bookmarkRepo.save(b);
    }

    @Override
    public void delete(Bookmarks b) {
        bookmarkRepo.delete(b);
    }

    @Override
    public Bookmarks findFirstByAnswerAndEmail(String answer, String email) {
        return bookmarkRepo.findFirstByAnswerAndEmail(answer, email);
    }
}