import React from "react";
import WorkspaceMain from "./WorkspaceMain";
import WorkspaceMenuLeft from "./Menu/WorkspaceMenuLeft";

const Workspace = () => {
  return (
    <div className="ws">
      <section className="ws-left">
        <WorkspaceMenuLeft />
      </section>
      <section className="ws-right">
        <WorkspaceMain />
      </section>
    </div>
  );
};

export default Workspace;
