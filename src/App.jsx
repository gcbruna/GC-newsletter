import { useState } from "react"

import ArticleList from "./componentes/ArticleList/ArticleList"
import Header from "./componentes/Header/Header"
import Form from "./componentes/Form/Form"

const App = () => {
  const [user, SetUser] = useState ()
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      { hasUser && <ArticleList /> }
      { hasUser || <Form onSubmit={SetUser} />}
    </div>
  )
}

export default App