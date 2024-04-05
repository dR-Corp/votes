import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Vote from "./pages/Vote"

const App = () => { 

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Vote />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default App