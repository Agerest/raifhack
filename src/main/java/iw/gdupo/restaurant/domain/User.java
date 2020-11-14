package iw.gdupo.restaurant.domain;

import lombok.Data;

import java.util.UUID;

@Data
public class User {

    private UUID id;
    private String name;
}
