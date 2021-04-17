import React from "react";
import Complaint from "../../components/complaint/Complaint";
import { ComplaintData } from "../../FetchData/ComplaintData";

import { Grid } from "@material-ui/core";

function HomePage() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        {ComplaintData.map((val, key) => {
          if (val.status === "Open") {
            return (
              <Complaint
                key={val.id}
                title={val.title}
                desc={val.description}
                dept={val.department}
                date={val.date}
                status={val.status}
                type={val.status}
              />
            );
          } else {
            return "";
          }
        })}
      </Grid>
    </div>
  );
}

export default HomePage;
