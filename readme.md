# Backend Mockup Server

## Setup
1. install node
2. npm install
3. make .env file in root directory and write `JWT_SECRET=secret`

## Run
npm start



# Ericsson Onboarding API v2 Postman Collection

## Setup
1. Import the collection JSON file into Postman.
2. Import the environment file as `GNP-Onboarding-Env` and set variables (`baseUrl`, `mnc`, `mcc`, etc..).
3. Run the **Auth** request in **Utilities** to get a `bearerToken`.

## Execution Flow
1. **Auth** → Get token.
2. **POST /applicationOwner** → Create an owner.
3. **POST /application** → Create an app under the owner.
4. **PATCH/GET** to update/get.

## Payload Sources
- Example payloads are from **sections 3.1 & 3.2** of the API spec.

# Ericsson End-Customer API – Postman Collection

This Postman collection demonstrates how to interact with Ericsson’s End-Customer Registration APIs (v2) to onboard Application Owners and Applications.

---

## 🧩 Included Components

- **Postman Collection**
  - Auth
  - ApplicationOwner (POST, PATCH, GET)
  - Application (POST, PATCH, GET)

- **Postman Environment**
  - `authUrl`, `baseUrl`, `bearerToken`, `mnc`, `mcc`, `aspId`, `appId`, `cspId`
    
    authUrl, baseUrl: 
        local: http://localhost:3000/api
        global: https://gnp-mockup.onrender.com/api
    others: any value
---

## 🚀 How to Run

1. **Import** the collection and environment into Postman.
2. **Set** your environment to `GNP-Onboarding-Env`.
3. **Run the flow in order**:

   1. `Utilities → Auth - Get Bearer Token`  
      Saves `{{bearerToken}}` to environment.

   2. `ApplicationOwner → POST - Create ApplicationOwner`              

   3. `Application → POST - Create Application`        

   4. (Optional) Run `PATCH` and `GET` requests to update and retrieve data.
      PATCH: Uses id

---

## 🔐 Authentication

- Auth endpoint:

- Requires:
- `client_id`
- `client_secret`
- `grant_type=client_credentials`

Token is stored in the environment as `bearerToken`.

---

## 📦 Sample Payloads

Request bodies are based on API specification sections:
- **3.1**: ApplicationOwner creation
- **3.2**: Application creation
- **3.9.1**: PATCH Application

---

## 🧪 Tests

Each request includes test scripts that validate:
- HTTP status (200, 201, 204)
- Presence of expected fields (e.g., `approvalStatus`, `id`)
- Automatic variable capture (`aspId`, `appId`)

---

## ⏱️ Run Time

You can import and run this entire collection in under 5 minutes.

---

## 🛠 Optional

You may implement mock endpoints or use Postman’s Mock Server to simulate responses if real CSP endpoints are unavailable.

