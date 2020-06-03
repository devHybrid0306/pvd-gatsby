const msgBoxStyle = {
  container: {
    width: '441px',
    height: '330px',
    background: '#FCFBFF',
    boxShadow: '0px 2px 0px rgba(56, 55, 74, 0.03), 0px 4px 16px rgba(56, 55, 74, 0.05)',
    borderradius: '4px',
    "@media (max-width: 540px)": {
      width: '80%',
    },
  },
  close: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    width: '16px',
    height: '16px',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    "@media (max-width: 540px)": {
      marginLeft: '20px',
    },
  },
  message: {
    marginTop: '60px',
    width: '64px',
    height: '48px',
    "@media (max-width: 540px)": {
      width: '48px',
      height: '36px',
    },
  },
  messageStatus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#95E035',
    border: '3px solid #FCFBFF',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    "@media (max-width: 540px)": {
      width: '16px',
      height: '16px',
    },
  },
  messageStatusImg: {
    width: '10px',
    height: '8px',
  },
  title: {
    marginTop: '24px',
    fontFamily: 'Oswald',
    fontweight: 'normal',
    fontSize: '24px',
    lineHeight: '36px',
    textAlign: 'center',
    color: '#38374A',
    "@media (max-width: 540px)": {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
  description: {
    marginTop: '16px',
    fontFamily: 'Arial',
    fontweight: 'normal',
    fontSize: '14px',
    lineHeight: '180%',
    textAlign: 'center',
    color: '#38374A',
    "@media (max-width: 540px)": {
      fontSize: '12px',
      lineHeight: '160%',
    },
  },
  button: {
    cursor: 'pointer',
    marginTop: '24px',
    fontFamily: 'Arial',
    fontweight: 'bold',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#561BFF',
  },
  underBtn: {
    width: '38px',
    height: '2px',
    opacity: 0.25,
    backgroundColor: '#561BFF',  
  }
};
export default msgBoxStyle;
