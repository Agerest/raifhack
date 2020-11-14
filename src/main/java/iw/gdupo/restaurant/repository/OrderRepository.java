package iw.gdupo.restaurant.repository;

import iw.gdupo.restaurant.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findAllByUserId(Long userId);

    List<Order> findAllByTableIdAndPaidFalse(Long tableId);

    List<Order> findAllByTableIdAndPaidTrue(Long tableId);

    List<Order> findAllByIdIn(Set<Long> ids);
}
