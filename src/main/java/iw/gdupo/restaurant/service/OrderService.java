package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.Menu;
import iw.gdupo.restaurant.domain.Order;
import iw.gdupo.restaurant.domain.User;
import iw.gdupo.restaurant.dto.order.OrderListDTO;
import iw.gdupo.restaurant.dto.order.OrderRequestDTO;
import iw.gdupo.restaurant.dto.order.OrderResponseDTO;
import iw.gdupo.restaurant.mapper.OrderMapper;
import iw.gdupo.restaurant.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final MenuService menuService;

    public List<OrderResponseDTO> getOrderListByUserId(Long userId) {
        return orderMapper.toDtoList(orderRepository.findAllByUserId(userId));
    }

    public List<OrderResponseDTO> getOrderList() {
        return orderMapper.toDtoList(orderRepository.findAll());
    }

    @Transactional
    public Long createOrder(User user, OrderRequestDTO orderDTO) {
        Menu menu = menuService.getMenu(orderDTO.getMenuId());
        Order order = new Order();
        order.setMenu(menu);
        order.setUser(user);
        return orderRepository.save(order).getId();
    }

    public OrderListDTO getUnpaidOrderList(Long tableId) {
        OrderListDTO orderListDTO = new OrderListDTO();
        List<OrderResponseDTO> orders = orderMapper.toDtoList(orderRepository.findAllByTableIdAndPaidFalse(tableId));
        orderListDTO.setOrders(orders);
        orderListDTO.setTotalPrice(orders.stream().map(OrderResponseDTO::getPrice).reduce(BigDecimal.ZERO, BigDecimal::add));
        return orderListDTO;
    }

    public OrderListDTO getPaidOrderList(Long tableId) {
        OrderListDTO orderListDTO = new OrderListDTO();
        List<OrderResponseDTO> orders = orderMapper.toDtoList(orderRepository.findAllByTableIdAndPaidTrue(tableId));
        orderListDTO.setOrders(orders);
        orderListDTO.setTotalPrice(orders.stream().map(OrderResponseDTO::getPrice).reduce(BigDecimal.ZERO, BigDecimal::add));
        return orderListDTO;
    }

    public List<Order> getByIds(Set<Long> orderIds) {
        return orderRepository.findAllByIdIn(orderIds);
    }
}
