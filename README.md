# DevSecOps Demo Pipeline

This project demonstrates a simple DevSecOps CI pipeline using GitHub Actions.

## Architecture
- Node.js application
- Docker containerization
- CI/CD with GitHub Actions
- Container vulnerability scanning using Trivy

## CI/CD Flow
1. Developer pushes code to GitHub
2. GitHub Actions builds Docker image
3. Trivy scans the image for vulnerabilities
4. Pipeline reports security findings without blocking delivery

## Security Tools
- Trivy (Container Vulnerability Scanner)
- GitHub Actions

## Purpose
Showcase secure software delivery practices in a regulated environment.
