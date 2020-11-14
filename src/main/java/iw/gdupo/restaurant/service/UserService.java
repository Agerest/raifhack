package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.OrderDTO;
import iw.gdupo.restaurant.dto.UserDTO;
import iw.gdupo.restaurant.mapper.UserJsonMapper;
import iw.gdupo.restaurant.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService {

    private static final String DATA_ID = "data";

    private final UserJsonMapper userJsonMapper;
    private final UserMapper userMapper;
    private final OrderService orderService;

    public UserDTO getUserFromCookie(Cookie data) {
        if (!isAuthenticated(data)) {
            return null;
        }
        UserDTO user = userMapper.toDto(userJsonMapper.toObject(data.getValue()));
        List<OrderDTO> orderList = orderService.getOrderList(user.getId());
        user.setOrders(orderList);
        user.setTotalPrice(orderList.stream().map(OrderDTO::getPrice).reduce(0, Integer::sum));
        return user;
    }

    public UUID registerNewUser(HttpServletResponse response, String name) {
        User user = new User();
        user.setId(UUID.randomUUID());
        user.setName(name);
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
