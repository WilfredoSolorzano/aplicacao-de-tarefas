import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext' // Importando o contexto das tarefas
import Home from './pages/Home' // Página inicial que exibe a lista de tarefas
import AddTask from './pages/AddTask' // Página para adicionar tarefas

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-task" component={AddTask} />
        </Switch>
      </TaskProvider>
    </Router>
  )
}

export default App
