package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.user.UserRequestDTO;
import iw.gdupo.restaurant.dto.user.UserResponseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserResponseDTO toResponseDTO(User user);

    User toEntity(UserRequestDTO userRequestDTO);
}
