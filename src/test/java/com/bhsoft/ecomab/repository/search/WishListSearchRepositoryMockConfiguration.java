package com.bhsoft.ecomab.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of WishListSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class WishListSearchRepositoryMockConfiguration {

    @MockBean
    private WishListSearchRepository mockWishListSearchRepository;

}
