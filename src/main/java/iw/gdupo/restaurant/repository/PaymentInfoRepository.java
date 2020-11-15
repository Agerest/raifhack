package iw.gdupo.restaurant.repository;

import iw.gdupo.restaurant.domain.PaymentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentInfoRepository extends JpaRepository<PaymentInfo, Long> {

    List<PaymentInfo> findAllByUsersId(Long userId);
}
