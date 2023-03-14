package sesac3.sesac3.spring.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac3.sesac3.spring.domain.User;

import java.util.List;
// mapper 참고하기
@Mapper
public interface MainMapper {
    
    // mapper 참고 안 하기
    List<User> retrieveAll();

    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(User user);
}
