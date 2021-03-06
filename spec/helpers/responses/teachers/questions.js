const get = {
  '/teachers/problems/1/questions': {
    id: 1,
    title: 'タイトル',
    content: '問題集概要',
    tags: ['タグ1'],
    count: 1,
    teacher_name: '講師',
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900',
    questions: [
      {
        id: 1,
        sentence: '問題',
        correct: '答え'
      }
    ]
  }
}

const post = {
  '/teachers/problems/1/questions': {
    id: 1,
    problem_id: 1,
    sentence: '問題',
    correct: '答え',
    created_at: '2019-01-01T00:00:00+0900',
    updated_at: '2019-01-01T00:00:00+0900'
  },

  '/teachers/problems/1/questions/upload': {
    questions: [
      {
        id: 1,
        problem_id: 1,
        sentence: '問題',
        correct: '答え',
        created_at: '2019-01-01T00:00:00+0900',
        updated_at: '2019-01-01T00:00:00+0900'
      }
    ]
  }
}

export default {
  get,
  post
}
