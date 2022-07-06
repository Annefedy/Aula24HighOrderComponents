import withTasks from "./withTasks";

function Body({ tasks }) {
  return <div>Counting on body {tasks.length}</div>;
}

export default withTasks(Body);
