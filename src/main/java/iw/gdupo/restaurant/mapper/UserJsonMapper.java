package iw.gdupo.restaurant.mapper;

import com.google.gson.Gson;
import iw.gdupo.restaurant.domain.User;
import org.springframework.stereotype.Service;

@Service
public class UserJsonMapper {

    public String toJson(User entity) {
        return new Gson().toJson(entity);
    }

    public User toObject(String json) {
        return new Gson().fromJson(json, User.class);
    }
}
