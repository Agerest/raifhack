package iw.gdupo.restaurant.dto;

import lombok.Data;

@Data
public class MenuDTO {

    private Long id;
    private String name;
    private String shortDescription;
    private String description;
    private Integer weight;
    private Integer price;
}
