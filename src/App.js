import withTasks from "./withTasks";
import Body from "./Body";

function App(props) {
  const tasks = props.tasks;

  return (
    <div>
      Taks count: {tasks.length}
      <Body />
    </div>
  );
}
export default withTasks(App);
