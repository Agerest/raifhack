package iw.gdupo.restaurant.dto;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class UserDTO {

    private UUID id;
    private String name;
    private List<OrderDTO> orders;
    private int totalPrice;
}
