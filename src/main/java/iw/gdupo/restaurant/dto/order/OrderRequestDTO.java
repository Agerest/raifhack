package iw.gdupo.restaurant.dto.order;

import lombok.Data;

@Data
public class OrderRequestDTO {

    private Long menuId;
    private Long tableId;
}
