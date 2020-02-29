import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer/Footer.vue'

describe('Footer.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Footer, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
