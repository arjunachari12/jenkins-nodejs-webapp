pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-username/jenkins-nodejs-webapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Application') {
            steps {
                sh 'nohup node server.js &'
                echo 'Web app running on http://localhost:3000'
            }
        }
    }
}
