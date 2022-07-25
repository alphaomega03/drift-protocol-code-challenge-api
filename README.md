# Drift Protocol Code Challenge API
This is a simple Express CRUD API Server used by our React application to store user social relations into our Firestore database.  It has three endpoints, one to create/update a relation, one to get a relation given a solana address, and another to delete a relation.  It is hosted within a Cloud Run instance.  We use Terraform to create the infrastructure necessary to instantiate the instance


## How to Run
First, you will need to download the necessary GCP credentials from 1Password:
[1Password Credentials](https://share.1password.com/s#cZ3LXBxBgbOKNa0KX-s8TLsy5UYcyC0aHyP3los-_bU)
You will need to save this file inside the following directories: 
- `src`
- `terraform`

In addition, you will need to create an `.env` file and populate it with contents specified in the `.env.example` file

Then, you can run the following commands: 
```bash
yarn install 
yarn start
```

Note that the server is api key authenticated.  You can use the api key specified in this 1Password vault [1Password Environment Variables](https://share.1password.com/s#wgEmDHhJU_iG_adF9DcXHHr0bZREniJ2B7WTJs-bXzE).  You can then pass this api key as a header with key `apiKey`

## How to Deploy

```bash 
cd terraform
gcloud auth login
terraform init
terraform plan
terraform apply
sh deploy-image-prod.sh
```

You'll need to be authenticated through gcloud to do this.  Let me know if you'd like to try this and I can add your email to the GCP project
