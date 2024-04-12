-- 지역 테이블
CREATE TABLE GAJ(
GAJ_ID NUMBER PRIMARY KEY,
GAJ_NAME VARCHAR2(200) NOT NULL
);

CREATE SEQUENCE GAJ_ID
START WITH 1
INCREMENT BY 1
MAXVALUE 10000;

-- 테마 테이블
CREATE TABLE GAJ_THEMA(
GAJ_THEMA_ID NUMBER PRIMARY KEY,
GAJ_THEMA_NAME VARCHAR2(200) NOT NULL
);

-- 장소 테이블
CREATE TABLE GAJ_PLACE(
GAJ_ID NUMBER,
GAJ_THEMA_ID NUMBER,
GAJ_PLACE_ID NUMBER PRIMARY KEY,
GAJ_PLACE_NAME VARCHAR2(200) NOT NULL,
FOREIGN KEY(GAJ_ID)REFERENCES GAJ(GAJ_ID),
FOREIGN KEY(GAJ_THEMA_ID)REFERENCES GAJ_THEMA(GAJ_THEMA_ID)   
);



-- 이미지 테이블
CREATE TABLE GAJ_IMG(
GAJ_IMG_ID NUMBER PRIMARY KEY,
GAJ_IMG_URL VARCHAR2(255) NOT NULL,
GAJ_PLACE_ID NUMBER,
FOREIGN KEY(GAJ_PLACE_ID) REFERENCES GAJ_PLACE(GAJ_PLACE_ID)
);


SELECT * FROM GAJ;
SELECT * FROM gaj_thema;

SELECT * FROM gaj_place;
SELECT * FROM gaj_img;

INSERT INTO GAJ VALUES ('강원');




