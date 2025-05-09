WITH FILTERED_CARS AS (
    -- 🚗 5회 이상 대여된 자동차 ID 찾기
    SELECT CAR_ID
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE START_DATE BETWEEN '2022-08-01' AND '2022-10-31'
    GROUP BY CAR_ID
    HAVING COUNT(HISTORY_ID) >= 5
)
-- 🎯 월별(CAST된 숫자로 변환) + 자동차별 대여 횟수 조회
SELECT CAST(DATE_FORMAT(START_DATE, '%c') AS UNSIGNED) AS MONTH, 
       CAR_ID, 
       COUNT(HISTORY_ID) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE START_DATE BETWEEN '2022-08-01' AND '2022-10-31'
AND CAR_ID IN (SELECT CAR_ID FROM FILTERED_CARS)  -- 🚗 5회 이상 대여된 자동차만 포함
GROUP BY MONTH, CAR_ID
ORDER BY MONTH ASC, CAR_ID DESC;

