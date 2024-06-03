terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.52.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  access_key = var.access_key
  secret_key = var.secret_key

}

variable "key_name" {}
variable "ami_id" {}
variable "access_key" {}
variable "secret_key" {}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.1"

  name = "chatapp-vpc"
  cidr = "10.2.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  public_subnets  = ["10.2.1.0/24", "10.2.2.0/24"]
}

resource "aws_security_group" "chatapp_sg" {
  name        = "chatapp-sg"
  description = "Allow SSH, HTTP, NodeJS and RabbitMQ traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "NodeJS"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "RabbitMQ"
    from_port   = 5672
    to_port     = 5672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "RabbitMQ Management"
    from_port   = 15672
    to_port     = 15672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_ssh_http"
  }
}

module "ec2-instance" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "5.6.1"

  name = "chatapp-instance"

  instance_type          = "t3.medium"
  key_name               = var.key_name
  ami                    = var.ami_id
  associate_public_ip_address = true
  vpc_security_group_ids = [aws_security_group.chatapp_sg.id]
  subnet_id = module.vpc.public_subnets[0]

  user_data = <<EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install -y docker.io docker-compose git
    sudo usermod -aG docker ubuntu
    sudo systemctl start docker
    sudo systemctl enable docker
    git clone https://github.com/HanMyatThu/wgw.git
    rm -rf mobile
    cd ./server
    npm install
    npm run build
    npm docker:start
    npm start
  EOF

}

output "vpc_id" {
  value = module.vpc.vpc_id
}

