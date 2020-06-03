const headerStyle = {
  appBar: {
    backgroundColor: "#FCFBFF",
    position: "static",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
    "@media (max-width: 1024px)": {
      position: "fixed",
    }
  },
  openBar: {
    backgroundColor: "#FCFBFF",
    position: "relative",
  },
  container: {
    display: 'flex',
    alignItems: 'start-between',
    margin: '10px',    
  },
  brand: {
    width: '164px',
    height: '73px',
    "@media (max-width: 1024px)": {
      width: '120px',
      height: '50px',
    }
  },
  btnMenu: {
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Oswald',
    marginRight: '30px',
  },
  btnContact: {
    width: '118px',
    height: '53px',
    borderRadius: '4px',
    backgroundColor: '#561BFF',
    fontSize: '14px',
    lineHeight: '21px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#561BFF',
    },
    "@media (min-width: 1280px)": {
      marginLeft: '150px',
    }
  },
  divider: {
    width: '1px',
    backgroundColor: '#DBDAE4',
    marginRight: '20px',
  },
  mnuImg: {
    width: '40px',
    height: '40px',
  },
  mobileMenu: {
    fontFamily: 'Oswald',
    fontSize: '24px',
    lineHeight: '36px',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0.05em',
    color: '#38374A',
    '&:hover': {
      color: '#561BFF',
    },
  },
  mobileContact: {
    marginTop: '60px',
    marginBottom: '30px',
    width: '90%',
    height: '75px',
    borderRadius: '6px',
    backgroundColor: '#561BFF',
    fontSize: '18px',
    lineHeight: '27px',
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'white',
    '&:hover': {
      backgroundColor: '#561BFF',
    },
  },
};
export default headerStyle;
