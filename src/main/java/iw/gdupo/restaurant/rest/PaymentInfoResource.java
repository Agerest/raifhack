package iw.gdupo.restaurant.rest;

import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.paymentinfo.UserPaymentInfoRequestDTO;
import iw.gdupo.restaurant.service.PaymentInfoService;
import iw.gdupo.restaurant.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@RequestMapping("/api/payment-info")
@AllArgsConstructor
public class PaymentInfoResource {

    private final PaymentInfoService paymentInfoService;
    private final UserService userService;

    @PostMapping("/new")
    public void savePaymentInfos(@CookieValue(value = "data", required = false) Cookie cookie,
                                 @RequestBody UserPaymentInfoRequestDTO paymentInfoRequestDTO) {
        User user = userService.getUserFromCookie(cookie);
        paymentInfoService.savePaymentInfos(paymentInfoRequestDTO, user);
    }
}
