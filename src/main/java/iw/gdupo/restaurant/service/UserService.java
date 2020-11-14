package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.dto.user.UserRequestDTO;
import iw.gdupo.restaurant.dto.user.UserResponseDTO;
import iw.gdupo.restaurant.mapper.UserJsonMapper;
import iw.gdupo.restaurant.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private static final String DATA_ID = "data";

    private final UserJsonMapper userJsonMapper;
    private final UserMapper userMapper;
    private final OrderService orderService;

    public UserResponseDTO getUserResponseFromCookie(Cookie data) {
        User user = getUserFromCookie(data);
        if (user == null) {
            return null;
        }
        UserResponseDTO userResponseDTO = userMapper.toResponseDTO(null);
        List<OrderResponseDTO> orderList = orderService.getOrderListByUserId(userResponseDTO.getId());
        userResponseDTO.setOrders(orderList);
        userResponseDTO.setTotalPrice(orderList.stream().map(OrderResponseDTO::getPrice).reduce(0, Integer::sum));
        return userResponseDTO;
    }

    public User getUserFromCookie(Cookie data) {
        if (!isAuthenticated(data)) {
            return null;
        }
        return userJsonMapper.toObject(data.getValue());
    }

    public Long registerNewUser(HttpServletResponse response, UserRequestDTO userRequestDTO) {
        User user = userMapper.toEntity(userRequestDTO);
        Cookie cookie = new Cookie(DATA_ID, userJsonMapper.toJson(user));
        cookie.setMaxAge(3600);
        cookie.setPath("/");
        response.addCookie(cookie);
        return user.getId();
    }

    public boolean isAuthenticated(Cookie data) {
        return data != null && !data.getValue().isEmpty();
    }
}
