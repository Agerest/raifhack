package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.UserDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper extends AbstractEntityMapper<UserDTO, User> {
}
