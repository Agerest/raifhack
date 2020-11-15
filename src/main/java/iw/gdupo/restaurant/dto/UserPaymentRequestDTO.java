package iw.gdupo.restaurant.dto;

import lombok.Data;

import java.util.Set;

@Data
public class UserPaymentRequestDTO {

    private Set<Long> orderIds;
}
