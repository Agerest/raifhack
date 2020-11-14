package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.user.UserRequestDTO;
import iw.gdupo.restaurant.dto.user.UserResponseDTO;
import iw.gdupo.restaurant.dto.user.UserShortResponseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserResponseDTO toResponseDTO(User user);

    UserShortResponseDTO toShortResponseDTO(User user);

    User toEntity(UserRequestDTO userRequestDTO);
}
