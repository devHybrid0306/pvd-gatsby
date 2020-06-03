const portfolioStyle = {
  container: {
    marginTop: '20px',
    borderRadius: 15,
  },
  image: {
    width: '320px',
    height: '240px',
    borderRadius: 15,
    "@media (max-width: 360px)": {
      width: '100%',
      height: '200px',
    }
  },
  dialog: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
  dlgHeader: {
    margin: 12,
  },
  availableImg: {
    width: 6,
    height: 6,
    marginLeft: 20,
    "@media (max-width: 768px)": {
      display: 'none',
    }
  },
  availableText: {
    flex: 1,
    marginLeft: '10px',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.05em',
    color: '#38374A',
    opacity: 0.85,
    "@media (max-width: 768px)": {
      display: 'none',
    }
  },
  back: {
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.05em',
    color: '#38374A',
    opacity: 0.35,
    "@media (max-width: 768px)": {
      flex: 1,
      justifyContent: 'flex-end',      
    }
  },
  close: {
    fontSize: 36,
    fontWeight: 200,
    color: '#38374A',
  },
  body: {
    margin: '0 150px',    
    justifyContent: 'space-between',
    "@media (max-width: 1366px)": {
      justifyContent: 'center',
    },
    "@media (max-width: 786px)": {
      margin: '0',
    }
  },
  bodyLeft:{
    justifyContent: 'flex-start',
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '20px',
    width: '386px',
    "@media (max-width: 540px)": {
      marginLeft: '20px'
    },
    "@media (max-width: 426px)": {
      width: '100%',
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize: '42px',
    lineHeight: '140%',
    color: '#38374A',
    "@media (max-width: 540px)": {
      fontSize: '32px',
    },
  },
  keywordContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30px',
  },
  keyword: {
    padding: '10px',
    marginRight: '10px',
    height: '21px',
    background: '#EEEAFF',
    borderRadius: '6px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '180%',
    color: '#561BFF',
    "@media (max-width: 540px)": {
      fontSize: '12px',
      padding: '5px',
    },
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  dateItem: {
    marginRight: '10px',
  },
  subTitle: {
    fontFamily: 'Arial',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '30px',
    color: '#38374A',
    opacity: '0.35',
    "@media (max-width: 540px)": {
      fontSize: '12px',
      lineHeight: '24px',
    },
  },
  dateContent: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#38374A',
    "@media (max-width: 540px)": {
      fontSize: '12px',
    },
  },
  live: {
    textDecorationLine: 'underline',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column', 
    marginTop: '30px',   
  },
  infoContent: {
    fontFamily:  'Arial', 
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '170%',
    color: '#38374A',
    "@media (max-width: 540px)": {
      fontSize: '12px',
    },
  },
  bodyRight:{
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: '20px', 
    width: '60%',
    "@media (max-width: 1366px)": {
      width: '100%',
    },
    "@media (max-width: 786px)": {
      margin: '0 50px',
    },
    "@media (max-width: 540px)": {
      margin: '0 20px',
    }
  },
  portfolioImg: {    
    width: '100%',
    height: '563px',
    borderRadius: '8px',
    "@media (max-width: 540px)": {
      height: '100%',
    }
  },
};

export default portfolioStyle;