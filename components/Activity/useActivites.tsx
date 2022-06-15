import React, { useState } from "react";
import { useQuery } from "react-query";
import { createGetActivitiesForUserUrl } from "../../apiRoutes/apiRoutes";
import axios from "axios";
import { getActivityForUser } from "../../apiRoutes/queryKeys";

export interface MotivActivity {
  name: string;
  timesDone: number;
  // buffs: Buff[];
}

export interface Buff {
  type: "hourly" | "daily";
  value: number;
}

const motivActivities: MotivActivity[] = [
  {
    name: "Programming for fun",
    timesDone: 3,
    // buffs: [{ type: "hourly", value: 6 }],
  },
];

// const emptyActivity: MotivActivity = { name: "", timesDone: 0, buffs: [] };
const emptyActivity: MotivActivity = { name: "", timesDone: 0 };

export default (userId: string) => {
  // const queryResults = { isLoading: false, data: {} };
  const queryResults = useQuery(createGetActivitiesForUserUrl(userId));
  console.log("result", queryResults.data);
  const [activities, setActivities] =
    useState<MotivActivity[]>(motivActivities);

  const createNewActivity = () => {
    setActivities([...activities, emptyActivity]);
  };

  return { activities, createNewActivity, queryResults };
};
