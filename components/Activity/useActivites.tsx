import React, { useState } from "react";

export interface MotivActivity {
  name: string;
  timesDone: number;
  buffs: Buff[];
}

export interface Buff {
  type: "hourly" | "daily";
  value: number;
}

const motivActivities: MotivActivity[] = [
  {
    name: "Programming for fun",
    timesDone: 3,
    buffs: [{ type: "hourly", value: 6 }],
  },
];

const emptyActivity: MotivActivity = { name: "", timesDone: 0, buffs: [] };

export default () => {
  const [activities, setActivities] =
    useState<MotivActivity[]>(motivActivities);

  const createNewActivity = () => {
    setActivities([...activities, emptyActivity]);
  };

  return { activities, createNewActivity };
};
