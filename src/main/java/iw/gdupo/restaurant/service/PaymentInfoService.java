package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.domain.PaymentInfo;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.UserPaymentRequestDTO;
import iw.gdupo.restaurant.repository.PaymentInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;
    private final OrderService orderService;

    @Transactional
    public void savePaymentInfos(UserPaymentRequestDTO paymentInfoRequestDTO, User user) {
        List<Order> orders = orderService.getByIds(paymentInfoRequestDTO.getOrderIds());
        removeAllUserPayment(user);
        List<PaymentInfo> paymentInfoList = orders.stream().map(order -> {
            PaymentInfo paymentInfo = new PaymentInfo();
            paymentInfo.setOrder(order);
            paymentInfo.addUser(user);
            return paymentInfo;
        }).collect(Collectors.toList());
        paymentInfoRepository.saveAll(paymentInfoList);
    }

    private void removeAllUserPayment(User user) {
        List<PaymentInfo> paymentInfoList = findPaymentInfoList(user);
        for (PaymentInfo paymentInfo : paymentInfoList) {
            if (paymentInfo.getUsers().size() == 1) {
                paymentInfoRepository.delete(paymentInfo);
            } else {
                paymentInfo.getUsers().remove(user);
                paymentInfoRepository.save(paymentInfo);
            }
        }
    }

    public List<PaymentInfo> findPaymentInfoList(User user) {
        return paymentInfoRepository.findAllByUsersId(user.getId());
    }
}
