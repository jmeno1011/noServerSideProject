CREATE TABLE 테이블이름
(
    필드이름1 필드타입1,
    필드이름2 필드타입2,
    ...
)

CREATE TABLE pokemon
(
    no varchar(10),
    name varchar(25),
    type varchar(25),
    url text,
    primary key(no)
);

INSERT INTO `maintest`.`pokemon` (`no`, `name`, `type`, `url`) VALUES ('001', '이상해씨', '풀,독', 'https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/%ED%8F%AC%EC%BC%93%EB%AA%AC/001%EC%9D%B4%EC%83%81%ED%95%B4%EC%94%A8.png');