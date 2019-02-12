import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemCard from '~/components/teachers/organisms/TeachersProblemCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersProblemCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblemCard, { localVue })
  })

  describe('script', () => {
    describe('problem', () => {
      let problem
      beforeEach(() => {
        problem = {
          id: 1,
          title: 'タイトル',
          content: '内容',
          teacher_name: '講師',
          tags: ['タグ'],
          updated_at: '2019-01-01 00:00:00'
        }
      })

      test('problemの初期値', () => {
        expect(wrapper.props().problem).toEqual({
          id: 0,
          title: '',
          content: '',
          teacher_name: '',
          tags: [],
          updated_at: ''
        })
      })

      test('problemに代入', () => {
        wrapper.setProps({ problem: problem })
        expect(wrapper.props().problem).toEqual(problem)
      })
    })
  })
})
