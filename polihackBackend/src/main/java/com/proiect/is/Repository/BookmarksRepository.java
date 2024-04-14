package com.proiect.is.Repository;
import com.proiect.is.Model.Bookmarks;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookmarksRepository extends CrudRepository<Bookmarks, Long> {
    List<Bookmarks> findAllByEmail(String email);
    Bookmarks findFirstByAnswerAndEmail(String answer, String email);
}
