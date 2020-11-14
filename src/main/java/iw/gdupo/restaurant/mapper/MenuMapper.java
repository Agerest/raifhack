package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.Menu;
import iw.gdupo.restaurant.dto.MenuDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MenuMapper extends AbstractEntityMapper<MenuDTO, Menu> {
}
