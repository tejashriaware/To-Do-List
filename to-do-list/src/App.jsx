
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>React To-Do App</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
