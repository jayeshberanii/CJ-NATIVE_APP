import { gql } from '@apollo/client';

// Fetch user profile
export const GET_PRODUCT_FEEDS = gql`
    query ProductFeeds {
        productFeeds(companyId: "shoppingProductFeeds", limit: 10, feedType: SHOPPING) {
            totalCount
            limit
            count
            resultList {
                adId
                advertiserId
                advertiserName
                advertiserCountry
                sourceFeedType
                currency
                language
                feedName
                lastUpdated
                productCount
            }
        }
    }
`;