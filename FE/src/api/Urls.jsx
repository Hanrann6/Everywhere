///User///
export const SIGN_UP_URL = '/user/create'; // 회원가입
export const WITHDRAWAL_URL = (userId) => `/user/delete/${userId}`; //회원 탈퇴 
export const SIGN_IN_URL = '/user/login'; // 로그인
//export const GET_USER_STATUS = 

///Fac///
export const GET_FAC_DETAIL = (facId) => ` /fac/${facId}`; // 시설 상세 페이지 조회
export const GET_FILTERED_FAC = '/fac?buildingId=200&buildingId=100&socket_yn=true&eat_yn=true'; // 시설 필터링
// 위 GET_FILTERED_FAC 확인 필요

///Review///
export const GET_REVIEW = (facId) => ` /fac/reviews/${facId}`; // 리뷰 조회
export const WRITE_REVIEW = (facId) => `/fac/reviews/${facId}` ; // 리뷰 작성
