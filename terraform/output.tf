output "aws_pool_id" {
  value       = aws_cognito_user_pool.exampleCognitoPool.id
  description = "User Pool ID"
}

output "aws_pool_client_id" {
  value       = aws_cognito_user_pool_client.exampleCognitoPoolClient.id
  description = "User Pool Client ID"
}