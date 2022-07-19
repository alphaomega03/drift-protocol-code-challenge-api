provider "google" {
  project = var.project_id
  region = var.region
  credentials = "./creds.json"
}


module "endpoints-prod" {
  source               = "./modules/endpoints-prod"
  project_id           = var.project_id
  region               = var.region
  project_number       = var.project_number
}
