import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionNewForm from '~/components/teachers/organisms/TeachersQuestionsNewForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersQuestionNewForm', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionNewForm, { localVue })
    content = id => `[data-test="${id}"`
  })

  describe('template', () => {
    test('問題一括登録フォームが存在すること', () => {
      expect(wrapper.find(content('form-questions'))).toBeTruthy()
    })
  })
})