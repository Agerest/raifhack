package iw.gdupo.restaurant.dto.order;

import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderResponseDTO {

    private Long id;
    private String name;
    private BigDecimal price;
    private UserShortResponseDTO user;
}
