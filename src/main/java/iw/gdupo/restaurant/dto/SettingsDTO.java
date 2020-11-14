package iw.gdupo.restaurant.dto;

import lombok.Data;

@Data
public class SettingsDTO {

    private Long id;
    private String restaurantName;
    private String headColour;
    private String headButtonsColour;
    private String backgroundColour;
    private String orderButtonColour;
    private String detailButtonColour;
    private String payButtonColour;
    private String imageUrl;
}
