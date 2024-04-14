package com.proiect.is.Controller;
import com.proiect.is.Model.License;
import com.proiect.is.Service.Implementation.LicenseServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/License")

public class LicenseController {
    private final  LicenseServiceImplementation licenseServiceImplementation;

    // @PostMapping("/GetData")
    // public ResponseEntity<List<Bookmarks>> getMessage(@RequestBody Bookmarks b) {
    //     List<Bookmarks> bookmarks = bookmarkServiceImplementation.findAllByEmail(b.getEmail());
    //     return ResponseEntity.status(HttpStatus.OK).body(bookmarks);
    // }

    // @PostMapping("/InsertData")
    // public ResponseEntity<Bookmarks> insertMessage(@RequestBody Bookmarks bookmark) {
    //     Bookmarks bookmarks = bookmarkServiceImplementation.save(bookmark);
    //     if(bookmarks != null)
    //         return ResponseEntity.status(HttpStatus.OK).body(bookmarks);

    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    // }

    // @PostMapping("/deleteData")
    // public ResponseEntity<Bookmarks> deleteMessage(@RequestBody Bookmarks bookmark) {
    //     Bookmarks bookmarks = bookmarkServiceImplementation.findFirstByAnswerAndEmail(bookmark.getAnswer(), bookmark.getEmail());
    //     bookmarkServiceImplementation.delete(bookmarks);
    //     bookmarks = bookmarkServiceImplementation.findFirstByAnswerAndEmail(bookmark.getAnswer(), bookmark.getEmail());
    //     if(bookmarks == null)
    //         return ResponseEntity.status(HttpStatus.OK).body(null);

    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    // }
}