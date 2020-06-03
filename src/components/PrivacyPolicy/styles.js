const portfolioStyle = {
  container: {
    width: 400,
    height: 300,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
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
    fontStyle: 'normal',
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
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '100%',    
    color: '#38374A',    
  },
  subtitle: {
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '27px',    
    color: '#38374A',
  },
  content: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '180%',    
    color: '#38374A',
  },
};

export default portfolioStyle;