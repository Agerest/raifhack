package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    UserShortResponseDTO toUserShortResponseDTO(User user);

    List<OrderResponseDTO> toDtoList(Collection<Order> entities);

    OrderResponseDTO toDto(Order entities);
}
