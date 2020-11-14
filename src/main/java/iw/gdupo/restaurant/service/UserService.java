package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.mapper.UserJsonMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
@AllArgsConstructor
public class UserService {

    private static final String DATA_ID = "data";

    private final UserJsonMapper userJsonMapper;

    public User initUserFromCookie(Cookie data) {
        if (data == null || data.getValue().isEmpty()) {
            User user = new User();
            return user;
        } else {
            return userJsonMapper.toObject(data.getValue());
        }
    }

    public void setUserToCookie(HttpServletResponse response, User user) {
        Cookie cookie = new Cookie(DATA_ID, userJsonMapper.toJson(user));
        cookie.setMaxAge(3600);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
