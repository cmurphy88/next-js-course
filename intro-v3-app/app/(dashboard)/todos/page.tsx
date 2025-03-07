import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
