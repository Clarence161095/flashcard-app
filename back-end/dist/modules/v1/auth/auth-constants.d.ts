declare const authConstants: {
    jwt: {
        secret: string;
        expirationTime: {
            accessToken: string;
            refreshToken: string;
        };
        secrets: {
            accessToken: string;
            refreshToken: string;
        };
    };
    redis: {
        expirationTime: {
            jwt: {
                accessToken: number;
                refreshToken: number;
            };
        };
    };
};
export default authConstants;
