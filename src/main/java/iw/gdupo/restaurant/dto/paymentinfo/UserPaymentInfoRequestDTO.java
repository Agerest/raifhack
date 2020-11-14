package iw.gdupo.restaurant.dto.paymentinfo;

import lombok.Data;

import java.util.Set;

@Data
public class UserPaymentInfoRequestDTO {

    private Set<Long> orderIds;
}
