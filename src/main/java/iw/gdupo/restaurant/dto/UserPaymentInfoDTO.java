package iw.gdupo.restaurant.dto;

import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class UserPaymentInfoDTO {

    private List<OrderResponseDTO> orders;
    private UserShortResponseDTO payer;
    private BigDecimal totalSum;
}
