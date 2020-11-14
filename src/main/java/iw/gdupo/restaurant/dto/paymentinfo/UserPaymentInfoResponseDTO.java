package iw.gdupo.restaurant.dto.paymentinfo;

import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class UserPaymentInfoResponseDTO {

    private List<OrderResponseDTO> orders;
    private UserShortResponseDTO payer;
    private BigDecimal totalSum;
}
