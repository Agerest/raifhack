package iw.gdupo.restaurant.dto.user;

import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import lombok.Data;

import java.util.List;

@Data
public class UserResponseDTO {

    private Long id;
    private String nickname;
    private List<OrderResponseDTO> orders;
    private int totalPrice;
    private Long tableId;
}
