const changeHelpMessage = (value, status) => {
  return {
    type: 'CHANGE_HELP_MESSAGE',
    value,
    status
  };
};

export default changeHelpMessage;
