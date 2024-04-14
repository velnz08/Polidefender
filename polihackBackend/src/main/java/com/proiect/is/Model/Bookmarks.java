package com.proiect.is.Model;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Bookmarks")
public class Bookmarks{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String answer;
    private String email;

    @Override
    public String toString() {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = null;
        try {
            json = ow.writeValueAsString(this);
            //System.out.println(json);
            return json;
        } catch (Exception ignored) {
            return null;
        }
    }
}