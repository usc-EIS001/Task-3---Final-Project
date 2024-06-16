import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Recipies } from './Pages/recipies'
import { RecipieDetails } from './Pages/recipieDetails'
import { CreateRecipies } from './Pages/createRecipies'
import { Layout } from './Components/Layout'

function App() {

  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipies" element={<Recipies/>}/>
        <Route path="/recipie/:id" element={<RecipieDetails/>}/>
        <Route path="/createRecipies" element={<CreateRecipies/>}/>
        </Route>
      </Routes>
    </Router>
  )

}

export default App
