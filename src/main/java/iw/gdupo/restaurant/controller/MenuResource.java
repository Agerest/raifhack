package iw.gdupo.restaurant.controller;

import iw.gdupo.restaurant.dto.MenuDTO;
import iw.gdupo.restaurant.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/menu")
public class MenuResource {

    private final MenuService menuService;

    @GetMapping("/list")
    public List<MenuDTO> getMenuList() {
        return menuService.getMenuList();
    }

    @PostMapping("/add")
    public Long addNewMenu(@RequestBody MenuDTO menuDTO) {
        return menuService.addNewMenu(menuDTO);
    }
}
