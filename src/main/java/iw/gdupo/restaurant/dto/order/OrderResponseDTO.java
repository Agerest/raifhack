package iw.gdupo.restaurant.dto.order;

import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import lombok.Data;

@Data
public class OrderResponseDTO {

    private String name;
    private Integer price;
    private UserShortResponseDTO user;
}
