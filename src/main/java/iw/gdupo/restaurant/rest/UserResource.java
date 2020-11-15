package iw.gdupo.restaurant.rest;

import iw.gdupo.restaurant.dto.UserPaymentInfoDTO;
import iw.gdupo.restaurant.dto.user.UserRequestDTO;
import iw.gdupo.restaurant.dto.user.UserResponseDTO;
import iw.gdupo.restaurant.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserResource {

    private final UserService userService;

    @GetMapping("/is-authenticated")
    public Boolean isAuthenticated(@CookieValue(value = "data", required = false) Cookie cookie) {
        return userService.isAuthenticated(cookie);
    }

    @PostMapping("/new")
    public Long registerNewUser(HttpServletResponse response, @RequestBody UserRequestDTO userRequestDTO) {
        return userService.registerNewUser(response, userRequestDTO);
    }

    @GetMapping("/get")
    public UserResponseDTO getUser(@CookieValue(value = "data", required = false) Cookie cookie) {
        return userService.getUserResponseFromCookie(cookie);
    }

    @GetMapping("/get/payment-info")
    public UserPaymentInfoDTO getUserPaymentInfo(@CookieValue(value = "data", required = false) Cookie cookie) {
        return userService.getPaymentInfo(cookie);
    }
}
