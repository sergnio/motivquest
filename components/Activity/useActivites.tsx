import React, { useState } from "react";
import { useQuery } from "react-query";
import { createGetActivitiesForUserUrl } from "../../apiRoutes/apiRoutes";
import { dateYesterday, newDate } from "../../utls/betterDate";

export interface User {
  name: string;
  email: string;
  activities: MotivActivity[];
}

export interface MotivActivity {
  name: string;
  dailyActivites: DailyActivity[];
}

export interface DailyActivity {
  timesDone: number;
  dayOf: string;
  // buffs: Buff[];
}

export interface Buff {
  type: "hourly" | "daily";
  value: number;
}

const motivActivities: MotivActivity[] = [];

const emptyActivity: MotivActivity = {
  name: "Test",
  dailyActivites: [
    { timesDone: 2, dayOf: newDate() },
    { timesDone: 5, dayOf: dateYesterday() },
  ],
};

export default (userId: string) => {
  const queryResults = useQuery<Promise<User>, any, any, string>(
    createGetActivitiesForUserUrl(userId)
  );
  const [activities, setActivities] =
    useState<MotivActivity[]>(motivActivities);

  const createNewActivity = () => {
    setActivities([...activities, emptyActivity]);
  };

  return { activities, createNewActivity, queryResults };
};
