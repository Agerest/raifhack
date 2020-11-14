package iw.gdupo.restaurant.dto.order;

import lombok.Data;

import java.util.List;

@Data
public class OrderListDTO {

    private List<OrderResponseDTO> orders;
    private int totalPrice;
}
