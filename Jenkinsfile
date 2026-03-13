# Add this to your package.json scripts
"pretest": "npx playwright install --with-deps chromium"pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Make sure this matches your Jenkins NodeJS installation name
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --reporter=html,allure-playwright'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName:cf 'Playwright Report'
            ])
        }
    }
}


// Make sure to have the Playwright and Allure plugins installed in Jenkins
// and configure the NodeJS tool in Jenkins global settings.    
// This Jenkinsfile is set up to run Playwright tests with Allure reporting.
// It assumes you have a NodeJS tool configured in Jenkins and Playwright installed in your project.
// Add this to your package.json scripts
"pretest": "npx playwright install --with-deps chromium"
pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Make sure this matches your Jenkins NodeJS installation name
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --reporter=html,allure-playwright'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}
