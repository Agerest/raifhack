package iw.gdupo.restaurant.rest;

import iw.gdupo.restaurant.dto.UserDTO;
import iw.gdupo.restaurant.dto.order.OrderRequestDTO;
import iw.gdupo.restaurant.service.OrderService;
import iw.gdupo.restaurant.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@RequestMapping("/api/order")
@AllArgsConstructor
public class OrderResource {

    private final OrderService orderService;
    private final UserService userService;

    @PostMapping("/new")
    public Long createOrder(@CookieValue(value = "data", required = false) Cookie cookie,
                            @RequestBody OrderRequestDTO orderDTO) {
        UserDTO user = userService.getUserFromCookie(cookie);
        return orderService.createOrder(user, orderDTO);
    }
}
