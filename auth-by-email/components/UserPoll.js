import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.UserPoolId,
    ClientId: process.env.ClientId
};


export default new CognitoUserPool(poolData)
