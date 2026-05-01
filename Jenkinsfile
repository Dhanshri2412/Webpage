pipeline {
 agent any

 stages {

  stage('Clone') {
   steps {
    git 'https://github.com/Dhanshri2412/Webpage'
   }
  }

  stage('Build Docker Image') {
   steps {
    bat 'docker build -t webpage:latest .'
   }
  }

  stage('Run Container') {
   steps {
    bat 'docker run -d -p 8082:80 webpage:latest'
   }
  }

 }
}
