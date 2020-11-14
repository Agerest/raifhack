package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.domain.PaymentInfo;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.paymentinfo.UserPaymentInfoRequestDTO;
import iw.gdupo.restaurant.repository.PaymentInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;
    private final OrderService orderService;

    public void savePaymentInfos(UserPaymentInfoRequestDTO paymentInfoRequestDTO, User user) {
        List<Order> orders = orderService.getByIds(paymentInfoRequestDTO.getOrderIds());
        List<PaymentInfo> paymentInfoList = orders.stream().map(order -> {
            PaymentInfo paymentInfo = new PaymentInfo();
            paymentInfo.setOrder(order);
            paymentInfo.addUser(user);
            return paymentInfo;
        }).collect(Collectors.toList());
        paymentInfoRepository.saveAll(paymentInfoList);
    }

    public List<PaymentInfo> findPaymentInfoList(User user) {
        return paymentInfoRepository.findAllByUsersId(user.getId());
    }
}
