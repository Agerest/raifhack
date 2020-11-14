package iw.gdupo.restaurant.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
@Data
@Table(name = "order_table")
public class Order extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "fk_menu")
    private Menu menu;

    @ManyToOne
    @JoinColumn(name = "fk_users")
    private User user;

    @Column(name = "tabble_id")
    private Long tableId;

    @Column(name = "complete")
    private boolean paid = false;
}
