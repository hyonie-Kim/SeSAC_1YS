# mysql 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';

# DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

# 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
FLUSH PRIVILEGES;
select host, user, plugin, authentication_string from mysql.user;

# mysql 계정 비밀번호를 바꾸고 싶을 때
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';