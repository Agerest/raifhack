package iw.gdupo.restaurant.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
@Data
@Table(name = "order_table")
public class Order extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "fk_order")
    private Menu menu;

    @Column(name = "user_id")
    private UUID userId;
}
