import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_BRivybveE",
    ClientId: "6emn7j5ci2vktakko0522ljcak",
};

export default new CognitoUserPool(poolData)
