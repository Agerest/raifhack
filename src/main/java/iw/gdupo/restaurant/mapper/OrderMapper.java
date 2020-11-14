package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.dto.OrderDTO;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    List<OrderDTO> toDtoList(Collection<Order> entities);
}
