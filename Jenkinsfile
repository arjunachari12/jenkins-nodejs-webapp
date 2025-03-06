pipeline {
    agent {
        docker {
            image 'node:18' // Use Node.js 18 official Docker image
        }
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/arjunachari12/jenkins-nodejs-webapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
