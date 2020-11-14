package iw.gdupo.restaurant.repository;

import iw.gdupo.restaurant.domain.Settings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingsRepository extends JpaRepository<Settings, Long> {

    Settings findTopByOrderByIdDesc();
}
