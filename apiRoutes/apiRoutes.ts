const apiurl = "https://motivquestnodeapi.herokuapp.com";
// const apiurl = "http://localhost:3000";
export const baseUrl = apiurl;
/*
uncomment if we change out to env variable instead of hard coded string
if (apiurl == null)
  throw new Error(
    `API Url not provided! Please add an API_URL var to the ".env" file`
  );
 */

// const baseUserUrl = `${baseUrl}/users`;
const baseUserUrl = `/users`;
const getUserId = (userId: string) => `${baseUserUrl}/${userId}`;
export const createGetActivitiesForUserUrl = (userId: string) =>
  `${getUserId(userId)}/activities`;
