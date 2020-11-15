package iw.gdupo.restaurant.repository;

import iw.gdupo.restaurant.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
