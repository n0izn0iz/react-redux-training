const sortPostsReverse = (a, b) => {
  if (a.id < b.id)
    return (1);
  else if (a.id === b.id)
    return (0);
  else
    return (-1);
}

export default sortPostsReverse;
