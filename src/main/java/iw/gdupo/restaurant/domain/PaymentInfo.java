package iw.gdupo.restaurant.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
@Data
@Table(name = "payment_info")
public class PaymentInfo extends AbstractEntity {

    @OneToOne
    private Order order;

    @ManyToMany
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
    }
}
