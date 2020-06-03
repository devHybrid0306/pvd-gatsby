const serviceListStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',    
  },
  list:{
    "@media (max-width: 600px)": {
      display: 'none',
    }
  },
  mobileList:{
    marginTop: '20px',
    "@media (min-width: 601px)": {
      display: 'none',
    }
  },
  listPanel: {
    backgroundColor: '#F7F5FF',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  listItem: {
    width: '80%',
    height: '71px',
    border: '1px solid #464646',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F7F5FF',
    padding: '0 10px',
    marginTop: '-7px',
    "@media (max-width: 540px)": {
      backgroundColor: 'white',
      marginTop: '10px',
      border: 'none',
      width: '90%',
    },
  },
  listItemClick: {
    borderRight: '2px solid #561BFF',
    backgroundColor: 'white',
    zIndex: 1,
    "&:focus": {
      boxShadow: 'none',
      outline: 'none',
    },
    "@media (max-width: 540px)": {
      borderRight: 'none',
      borderBottom: '1px solid #561BFF',
    },
  },
  listItemImg: {
    padding: '0 10px',
  },
  listItemText: {
    color: '#38374A',
    fontSize: '18px',
    lineHeight: '27px',
    fontFamily: 'Oswald',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  listItemClickText: {
    color: '#561BFF',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contentTitle: {
    color: '#38374A',
    fontSize: '36px',
    lineHeight: '53px',
    fontWeight: 'normal',
    fontFamily: 'Oswald',
    textAlign: 'left',
    paddingBottom: '10px',
    "@media (max-width: 540px)": {
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  contentSubTitle: {
    color: '#38374A',
    fontSize: '20px',
    lineHeight: '36px',
    fontWeight: 'normal',
    fontFamily: 'Arial',
    textAlign: 'left',
    paddingTop: '10px',
    paddingBottom: '10px',
    "@media (max-width: 540px)": {
      fontSize: '18px',
      lineHeight: '140%',
    },
  },
  contentDescription: {
    color: '#38374A',
    fontSize: '16px',
    lineHeight: '30px',
    fontWeight: 'normal',
    fontFamily: 'Arial',
    textAlign: 'left',
    paddingTop: '10px',
    paddingBottom: '10px',
    "@media (max-width: 540px)": {
      fontSize: '14px',
      lineHeight: '160%',
    },
  },
};

export default serviceListStyle;
