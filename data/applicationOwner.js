export let applicationOwner = [
    {
        "@baseType": "PartyRole",
        "@type": "ApplicationOwner",
        "id": 31,
        "href":
            "/openGatewayOperateAPIOnboardingAndOrdering/v5/applicationOwner/31",
        "name": "Testing business profile",
        "description": "Testing business profile",
        "engagedParty": {
            "@baseType": "Organization",
            "@type": "ApplicationOwnerOrganization",
            "contactMedium": [
                {
                    "@type": "EmailContactMedium",
                    "contactType": "email",
                    "emailAddress": "private_data_not_informed@consumer.com",
                    "id": "contact_medium",
                    "preferred": true
                }
            ],
            "dataProtectionOfficer": {
                "@type": "ApplicationOwnerRelatedOrganization",
                "contactMedium": [
                    {
                        "@type": "EmailContactMedium",
                        "contactType": "email",
                        "emailAddress": "dpo@test.com",
                        "id": "dpo",
                        "preferred": true
                    }
                ],
                "name": "DPO Office"
            },
            "name": "Testing business profile",
            "organizationIdentification": [
                {
                    "@type": "OrganizationIdentification",
                    "identificationId": "not_provided"
                }
            ],
            "organizationType": "dpv:ForProfitOrganisation ",
            "privacyManager": {
                "@type": "ApplicationOwnerRelatedOrganization",
                "contactMedium": [
                    {
                        "@type": "EmailContactMedium",
                        "contactType": "email",
                        "emailAddress": "manager@test.com",
                        "id": "privacy_manager",
                        "preferred": true
                    }
                ],
                "name": "Privacy Office"
            },
            "privacyPolicyURL": "https://1LThiQzd.com",
            "registeredGeographicAddress": {
                "@baseType": "GeographicAddress",
                "@type": "LightGeographicAddress",
                "city": "Madrid",
                "countryCode": {
                    "@baseType": "StandardIdentifier",
                    "@type": "ISO31661Alpha2StandardIdentifier",
                    "value": "ES"
                },
                "locality": "Madrid",
                "postcode": "28020",
                "stateOrProvince": "Madrid",
                "streetName": "address 1 address 2"
            },
            "taxNumber": "1234567890",
            "tradingName": "Testing business profile"
        },
        "approvalStatus": "pendingApproval",
        "status": "inProgress",
        "gnpMetaDa": {
            "cspId": "l3-csp-id",
            "aspId": "l3-asp-id"
        }
    }

]