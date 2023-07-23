/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { getSingleMember, getMembersByTeam, deleteMember } from './MemberData';
import { getSingleTeam, deleteSingleTeam } from './TeamData';

const viewMemberDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObject) => {
      getSingleTeam(memberObject.team_id)
        .then((teamObject) => {
          resolve({ teamObject, ...memberObject });
        });
    }).catch((error) => reject(error));
});

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getMembersByTeam(teamFirebaseKey)])
    .then(([teamObject, teamMembersArray]) => {
      resolve({ ...teamObject, members: teamMembersArray });
    }).catch((error) => reject(error));
});

const deleteTeamMembers = (teamId) => new Promise((resolve, reject) => {
  getMembersByTeam(teamId).then((memberArray) => {
    console.warn(memberArray, 'Team Members');
    const deleteMemberPromises = memberArray.map((member) => deleteMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleTeam(teamId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewMemberDetails, viewTeamDetails, deleteTeamMembers };
