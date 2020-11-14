package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.dto.OrderDTO;
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

    public List<OrderDTO> getOrderList(UUID userId) {
        return orderMapper.toDtoList(orderRepository.findAllByUserId(userId));
    }
}
