import { gql } from '@apollo/client';

// Fetch user profile
export const GET_PRODUCTS = gql`
  query Products {
        products(companyId: "7400639") {
            totalCount
            limit
            count
            resultList {
                additionalImageLink
                adId
                advertiserCountry
                advertiserId
                advertiserName
                brand
                catalogId
                customLabel0
                customLabel1
                customLabel2
                customLabel3
                customLabel4
                description
                id
                imageLink
                isDeleted
                itemListId
                itemListName
                lastUpdated
                link
                mobileLink
                salePriceEffectiveDateEnd
                salePriceEffectiveDateStart
                serviceableAreas
                sourceFeedType
                targetCountry
                title
            }
        }
    }
`;