package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.dto.SettingsDTO;
import iw.gdupo.restaurant.mapper.SettingsMapper;
import iw.gdupo.restaurant.repository.SettingsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class SettingsService {

    private final SettingsRepository settingsRepository;
    private final SettingsMapper settingsMapper;

    public SettingsDTO getLastSettings() {
        return settingsMapper.toDto(settingsRepository.findTopByOrderByIdDesc());
    }

    @Transactional
    public Long addNewSettings(SettingsDTO settingsDTO) {
        return settingsRepository.save(settingsMapper.toEntity(settingsDTO)).getId();
    }
}
