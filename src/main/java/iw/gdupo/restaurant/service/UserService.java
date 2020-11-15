package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.PaymentInfo;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.UserPaymentInfoDTO;
import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserRequestDTO;
import iw.gdupo.restaurant.dto.user.UserResponseDTO;
import iw.gdupo.restaurant.mapper.OrderMapper;
import iw.gdupo.restaurant.mapper.UserJsonMapper;
import iw.gdupo.restaurant.mapper.UserMapper;
import iw.gdupo.restaurant.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService {

    private static final String DATA_ID = "data";

    private final UserJsonMapper userJsonMapper;
    private final UserMapper userMapper;
    private final OrderService orderService;
    private final PaymentInfoService paymentInfoService;
    private final OrderMapper orderMapper;
    private final UserRepository userRepository;

    public UserResponseDTO getUserResponseFromCookie(Cookie data) {
        User user = getUserFromCookie(data);
        if (user == null) {
            return null;
        }
        UserResponseDTO userResponseDTO = userMapper.toResponseDTO(user);
        List<OrderResponseDTO> orderList = orderService.getOrderListByUserId(userResponseDTO.getId());
        userResponseDTO.setOrders(orderList);
        userResponseDTO.setTotalPrice(orderList.stream()
                .map(OrderResponseDTO::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add));
        return userResponseDTO;
    }

    public User getUserFromCookie(Cookie data) {
        if (!isAuthenticated(data)) {
            return null;
        }
        return userJsonMapper.toObject(data.getValue());
    }

    @Transactional
    public Long registerNewUser(HttpServletResponse response, UserRequestDTO userRequestDTO) {
        User user = userRepository.save(userMapper.toEntity(userRequestDTO));
        Cookie cookie = new Cookie(DATA_ID, userJsonMapper.toJson(user));
        cookie.setMaxAge(3600);
        cookie.setPath("/");
        response.addCookie(cookie);
        return user.getId();
    }

    public boolean isAuthenticated(Cookie data) {
        return data != null && !data.getValue().isEmpty();
    }

    public UserPaymentInfoDTO getPaymentInfo(Cookie cookie) {
        User user = getUserFromCookie(cookie);
        List<PaymentInfo> paymentInfoList = paymentInfoService.findPaymentInfoList(user);
        UserPaymentInfoDTO paymentInfoResponseDTO = new UserPaymentInfoDTO();
        paymentInfoResponseDTO.setPayer(userMapper.toShortResponseDTO(user));
        List<OrderResponseDTO> orders = paymentInfoList.stream()
                .map(paymentInfo -> {
                    OrderResponseDTO orderResponseDTO = orderMapper.toDto(paymentInfo.getOrder());
                    int usersSize = paymentInfo.getUsers().size();
                    orderResponseDTO.setPrice(orderResponseDTO.getPrice().divide(BigDecimal.valueOf(usersSize)));
                    return orderResponseDTO;
                })
                .collect(Collectors.toList());
        paymentInfoResponseDTO.setOrders(orders);
        paymentInfoResponseDTO.setTotalSum(orders.stream()
                .map(OrderResponseDTO::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add));
        return paymentInfoResponseDTO;
    }
}
