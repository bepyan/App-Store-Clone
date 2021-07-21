type DateValue = string | number | Date;
/**
 * @param target string | number | Date
 * @param now string | number | Date;
 * @returns 1초 전, 1분 전, 1시간 전, 1일 전, 1년 전
 */
// 동적으로 변하는 new Date()는 인수로 받아오는게 바람직하다.
export const toTimeDuration = (target: DateValue, now: DateValue) => {
    const second = Math.floor(
        (new Date(now).getTime() - new Date(target).getTime()) / 1000
    );
    if (second < 60) return `${second}초 전`;

    const minute = Math.floor(second / 60);
    if (minute < 60) return `${minute}분 전`;

    const hour = Math.floor(second / 3600);
    if (hour < 24) return `${hour}시간 전`;

    const day = Math.floor(hour / 24);
    if (day < 365) return `${day}일 전`;

    return `${Math.floor(day / 365)}년 전`;
};

/**
 * @param target string | number | Date
 * @returns 오전 10:30
 */
export const toClockFormat = (target: DateValue) => {
    const time = new Date(target);
    const h = time.getHours();
    const m = time.getMinutes();

    const indicator = h > 12 ? "오후" : "오전";
    const hour = h > 12 ? h - 12 : h;
    const minute = m < 10 ? "0" + m : m;

    return `${indicator} ${hour}:${minute}`;
};

/**
 * @param target string | number | Date
 * @returns 2021/3/31 (화) 오전 10:30
 */
export const toCommonFormate = (target: DateValue) => {
    const time = new Date(target);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const dayIdx = time.getDay();
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    return `${year}/${month}/${date} (${day[dayIdx]}) ` + toClockFormat(target);
};

/**
 * @param target string | number | Date
 * @returns 3/3
 */
export const toDateFomate = (target: string) => {
    const time = new Date(target);
    const month = time.getMonth() + 1;
    const date = time.getDate();
    return `${month}/${date}`;
};