import { shallowMount } from '@vue/test-utils'
import DeveloperPage from '@/views/DeveloperPage/DeveloperPage.vue'

describe('ConfiguratorPage.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'Develop i18n Test message'
    const wrapper = shallowMount(DeveloperPage, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
