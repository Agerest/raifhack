package iw.gdupo.restaurant.mapper;

import iw.gdupo.restaurant.domain.Settings;
import iw.gdupo.restaurant.dto.SettingsDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SettingsMapper extends AbstractEntityMapper<SettingsDTO, Settings> {
}
