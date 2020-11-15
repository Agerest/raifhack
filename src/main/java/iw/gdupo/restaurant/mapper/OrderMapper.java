package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    UserShortResponseDTO toUserShortResponseDTO(User user);

    List<OrderResponseDTO> toDtoList(Collection<Order> entities);

    @Mappings({
            @Mapping(target = "price", source = "entity.menu.price"),
            @Mapping(target = "name", source = "entity.menu.name")
    })
    OrderResponseDTO toDto(Order entity);
}
