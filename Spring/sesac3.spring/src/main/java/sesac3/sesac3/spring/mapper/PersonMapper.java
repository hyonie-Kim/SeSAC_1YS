package sesac3.sesac3.spring.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import sesac3.sesac3.spring.domain.Person;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id,pw,name) values(#{id}, #{pw}, #{name})")
    void insertPerson(Person person);

    @Select("select * from person where id=#{id} and pw=#{pw} limit 1")
    Person getPerson(String id, String pw);
}
