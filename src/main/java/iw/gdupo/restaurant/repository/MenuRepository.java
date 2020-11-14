package iw.gdupo.restaurant.repository;

import iw.gdupo.restaurant.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
