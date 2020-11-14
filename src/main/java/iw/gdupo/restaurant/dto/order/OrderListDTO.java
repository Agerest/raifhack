package iw.gdupo.restaurant.dto.order;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderListDTO {

    private List<OrderResponseDTO> orders;
    private BigDecimal totalPrice;
}
