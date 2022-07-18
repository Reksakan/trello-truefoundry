import Header from './components/Layout/Header/Header'
import Navbar from './components/Layout/Navbar/Navbar'
import Main from './components/Layout/Main/Main'
import TasksProvider from './data/dataProvider'
import styles from './App.css'

function App() {
  return (
    <TasksProvider>
      <Header />
      <Navbar />
      <Main />
    </TasksProvider>
  );
}

export default App;
