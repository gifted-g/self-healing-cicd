# Self-Healing CI/CD Pipeline (MVP)

A resilient CI/CD pipeline that builds a containerized microservice, deploys to Kubernetes, monitors health, and auto-rolls back on failure.

## Contents
- app/: simple Node.js app with /health endpoint
- k8s/: Kubernetes manifests (Deployment & Service)
- .github/workflows/cicd.yml: GitHub Actions workflow to build, push, deploy, and verify, with rollback logic

## Notes
- The workflow assumes you provide `DOCKER_REGISTRY`, `KUBE_CONFIG` and `IMAGE` secrets in GitHub.
