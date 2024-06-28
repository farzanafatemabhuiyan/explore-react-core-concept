
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3> React Core Concept</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Button Two</button>
      <button onClick={() => alert("button 3 clicked")}>Button #3</button>
      <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
