// import Layout from "../layouts/Layout"

import Projects from "../dashboard/projects/Projects";
import AuthorsTable from "./Authors table/AuthorsTable";

const Table = () => {
  return (
    <>
    <div className="table">
      <h2>Authors table</h2>
      <AuthorsTable />
    </div>
      <Projects />
    </>
  )
}

export default Table;