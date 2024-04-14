package com.proiect.is.Controller;
import com.proiect.is.Model.Bookmarks;
import com.proiect.is.Model.Users;
import com.proiect.is.Service.Implementation.BookmarkServiceImplementation;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/Bookmarks")

public class BookmarksController {
    private final  BookmarkServiceImplementation bookmarkServiceImplementation;

    @PostMapping("/GetData")
    public ResponseEntity<List<Bookmarks>> getMessage(@RequestBody Bookmarks b) {
        List<Bookmarks> bookmarks = bookmarkServiceImplementation.findAllByEmail(b.getEmail());
        return ResponseEntity.status(HttpStatus.OK).body(bookmarks);
    }

    @PostMapping("/InsertData")
    public ResponseEntity<Bookmarks> insertMessage(@RequestBody Bookmarks bookmark) {
        Bookmarks bookmarks = bookmarkServiceImplementation.save(bookmark);
        if(bookmarks != null)
            return ResponseEntity.status(HttpStatus.OK).body(bookmarks);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PostMapping("/deleteData")
    public ResponseEntity<Bookmarks> deleteMessage(@RequestBody Bookmarks bookmark) {
        Bookmarks bookmarks = bookmarkServiceImplementation.findFirstByAnswerAndEmail(bookmark.getAnswer(), bookmark.getEmail());
        Long id = bookmarks.getId();
        bookmarkServiceImplementation.delete(bookmarks);
        bookmarks = bookmarkServiceImplementation.findFirstByAnswerAndEmail(bookmark.getAnswer(), bookmark.getEmail());
        if(bookmarks == null || !Objects.equals(bookmarks.getId(), id))
            return ResponseEntity.status(HttpStatus.OK).body(null);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}