const inputFieldStyle = {
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    boxShadow: '0px 2px 0px rgba(56, 55, 74, 0.02)',
    marginTop: '20px',
  },
  success: {
    border: "1px solid #95E035",
  },
  error: {
    border: "1px solid #F1451F",
  },
  controlContainer: {
    display: 'flex',
    margin: '10px',
  },
  label: {
    color: "#38374A !important",
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.05em',
    opacity: '0.35',
  },
  input: {
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
  },
  successAdornment: {
    width: '18px',
    height: '18px',
  },
  errorAdornment: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '180%',
    color: '#F1451F',
  }, 
};

export default inputFieldStyle;
