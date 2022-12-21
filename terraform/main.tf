provider "aws" {
  region     = "us-east-1"
  access_key = ""
  secret_key = ""
}

resource "aws_cognito_user_pool" "exampleCognitoPool" {
  name                     = "testAuthEmail"
  username_attributes      = ["email"]
  auto_verified_attributes = ["email"]
  verification_message_template {
    default_email_option = "CONFIRM_WITH_LINK"
  }
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
  password_policy {
    minimum_length  = 8
    require_numbers = true

  }
}

resource "aws_cognito_user_pool_client" "exampleCognitoPoolClient" {
  name         = "testAuthEmail"
  user_pool_id = aws_cognito_user_pool.exampleCognitoPool.id
}

resource "aws_cognito_user_pool_domain" "domainCognitoPool" {
  domain       = "c0mrade"
  user_pool_id = aws_cognito_user_pool.exampleCognitoPool.id
}