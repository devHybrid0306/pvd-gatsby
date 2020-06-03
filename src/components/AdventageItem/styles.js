const adventageItemStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '30%',
    marginRight: '30px',
    "@media (max-width: 1024px)": {
      width: '40%',
      marginRight: '20px',
  
    },
    "@media (max-width: 540px)": {
      width: '100%',
      marginRight: '0px',
    }
  },  
  itemImg: {
    paddingBottom: '15px',
    paddingTop: '15px',
  },  
  itemTitle: {
    color: 'black',
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'Oswald',
    textAlign: 'left',
    padding: '10px 0',    
  },
  itemDescription: {
    color: 'black',
    fontSize: '16px',
    lineHeight: '30px',
    fontFamily: 'Arial',
    textAlign: 'left',
    padding: '10px 0', 
    opacity: '0.85',
  }
};
export default adventageItemStyle;
