package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.Menu;
import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.dto.OrderDTO;
import iw.gdupo.restaurant.dto.UserDTO;
import iw.gdupo.restaurant.dto.order.OrderRequestDTO;
import iw.gdupo.restaurant.mapper.OrderMapper;
import iw.gdupo.restaurant.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final MenuService menuService;

    public List<OrderDTO> getOrderList(UUID userId) {
        return orderMapper.toDtoList(orderRepository.findAllByUserId(userId));
    }

    public Long createOrder(UserDTO user, OrderRequestDTO orderDTO) {
        Menu menu = menuService.getMenu(orderDTO.getMenuId());
        Order order = new Order();
        order.setMenu(menu);
        order.setUserId(user.getId());
        return orderRepository.save(order).getId();
    }
}
