package iw.gdupo.restaurant.rest;

import iw.gdupo.restaurant.dto.SettingsDTO;
import iw.gdupo.restaurant.service.SettingsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/settings")
@AllArgsConstructor
public class SettingsResource {

    private final SettingsService settingsService;

    @GetMapping("/get")
    public SettingsDTO getSettings() {
        return settingsService.getLastSettings();
    }

    @PostMapping("/new")
    public Long addNewSettings(@RequestBody SettingsDTO settingsDTO) {
        return settingsService.addNewSettings(settingsDTO);
    }
}
