export const shortenTeamName = (team: string): string => {
  const team_split = team.split(" ");
  if (team_split.length > 2) {
    return team_split.slice(0, 2).join(" ");
  }

  return team;
};
