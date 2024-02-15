import './App.css';
import ParentParentChild from "./parent_parentchild.js"
import ParentChildParent from "./parent_childparent.js"
import ParentChildChild from "./parent_childchild.js"
import ParentContext from "./parent_context.js"

function App() {
  return (
    <div className="App">
    {/* ===== 1. Parent to Child ===== */}
    {/* <ParentParentChild /> */}

    {/* ===== 2. child to Parent ===== */}
    <ParentChildParent />

    {/* ===== 3. Child to Child  ===== */}
    {/* <ParentChildChild /> */}

    {/* ===== 4.Avoid prop drilling ===== */}
    {/* <ParentContext /> */}
</div>
  );
}

export default App;
