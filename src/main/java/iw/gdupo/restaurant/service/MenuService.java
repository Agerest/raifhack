package iw.gdupo.restaurant.service;

import iw.gdupo.restaurant.domain.Menu;
import iw.gdupo.restaurant.dto.MenuDTO;
import iw.gdupo.restaurant.mapper.MenuMapper;
import iw.gdupo.restaurant.repository.MenuRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final MenuMapper menuMapper;

    public List<MenuDTO> getMenuList() {
        return menuMapper.toDto(menuRepository.findAll());
    }

    public Long addNewMenu(MenuDTO menuDTO) {
        return menuRepository.save(menuMapper.toEntity(menuDTO)).getId();
    }

    public Menu getMenu(Long menuId) {
        return menuRepository.findById(menuId)
                .orElseThrow(() -> new IllegalStateException("Could not find menu with id = " + menuId));
    }
}
