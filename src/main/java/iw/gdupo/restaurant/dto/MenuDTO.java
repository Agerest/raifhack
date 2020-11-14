package iw.gdupo.restaurant.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class MenuDTO {

    private Long id;
    private String name;
    private String shortDescription;
    private String description;
    private Integer weight;
    private BigDecimal price;
}
