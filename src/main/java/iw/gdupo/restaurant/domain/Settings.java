package iw.gdupo.restaurant.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
@Data
@Table(name = "settings")
public class Settings extends AbstractEntity {

    @Column(name = "restaurant_name")
    private String restaurantName;

    @Column(name = "head_colour")
    private String headColour;

    @Column(name = "head_buttons_colour")
    private String headButtonsColour;

    @Column(name = "background_colour")
    private String backgroundColour;

    @Column(name = "order_button_colour")
    private String orderButtonColour;

    @Column(name = "detail_button_colour")
    private String detailButtonColour;

    @Column(name = "pay_button_colour")
    private String payButtonColour;

    @Column(name = "image_url")
    private String imageUrl;
}
