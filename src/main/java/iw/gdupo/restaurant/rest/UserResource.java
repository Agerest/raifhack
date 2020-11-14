package iw.gdupo.restaurant.rest;

import iw.gdupo.restaurant.dto.UserDTO;
import iw.gdupo.restaurant.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

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
    public UUID registerNewUser(HttpServletResponse response, @RequestParam String name) {
        return userService.registerNewUser(response, name);
    }

    @GetMapping("/get")
    public UserDTO getUser(@CookieValue(value = "data", required = false) Cookie cookie) {
        return userService.getUserFromCookie(cookie);
    }
}
