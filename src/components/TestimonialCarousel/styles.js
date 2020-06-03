const testimonialCarouselStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },  
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1200px',
    "@media (max-width: 1440px)": {
      width: '80%',
    }
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    verticalAlign: 'middle',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginTop: '20px',
    marginBottom: '25px'
  },
  itemDescription: {
    color: 'black',
    fontSize: '36px',
    lineHeight: '140%',
    fontFamily: 'Oswald',
    marginTop: '15px',
    marginBottom: '15px',
    "@media (max-width: 768px)": {
      fontSize: '24px',
    }
  },
  itemJob: {
    color: '#9898A4',
    fontSize: '14px',
    lineHeight: '180%',
    fontFamily: 'Arial',
    "@media (max-width: 768px)": {
      lineHeight: '160%',
    }
  },
  indicatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10px',
  },
  indicatorDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#5C23FF',
    marginLeft: '15px',
    marginRight: '15px',
  },
  indicatorOFF: {    
    backgroundColor: '#DBDAE4',
  },
  btnArrowLeft: {
    marginRight: '100px',
    "@media (max-width: 768px)": {
      display: 'none',
    }
  },
  btnArrowRight: {
    marginLeft: '100px',
    "@media (max-width: 768px)": {
      display: 'none',
    }
  },
  arrowImg:{
    width: '13px',
    height: '24px',
  },
};

export default testimonialCarouselStyle;
