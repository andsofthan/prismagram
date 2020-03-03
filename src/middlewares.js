export const isAuthenticated = request => {
    if(!request.user){
        throw Error("이 페이지는 로그인 후 이용할수 있습니다.");
    }
    return;
};