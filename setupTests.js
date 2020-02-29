import VueTestUtils from '@vue/test-utils'

VueTestUtils.config.mocks.$t = key => key
require('jest-fetch-mock').enableMocks()
