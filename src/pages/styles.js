import image from "./../assets/images/footer.png";

const indexPageStyle = theme => ({
  container: {
    margin: 0,
    textAlign: 'center',
    background: '#FCFBFF',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    "@media (max-width: 1024px)": {
      marginTop: "64px",
    }
  },
  headerContainer: {
    margin: '-8px',
    background: '#FCFBFF',
  },
  sectionBanner: {
    display: 'block',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    "@media (min-width: 768px)": {
      clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
    },
  },
  sectionBannerLandScape: {
    width: '100%',
    "@media (max-width: 540px)": {
      display: 'none',
    }
  },
  sectionBannerPortrait: {
    width: '100%',
    "@media (min-width: 541px)": {
      display: 'none',
    }
  },
  bannerBody: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
    top: '15%',
    left: '84px',
    "@media (max-width: 1024px)": {
      top: '10%',
      left: '50px',
      width: '80%',
    },
    "@media (max-width: 400px)": {
      top: '10%',
      left: '20px',
      width: '80%',
    }
  },
  bannerTitle: {
    color: '#FCFBFF',
    fontSize: '64px',
    lineHeight: '140%',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    textAlign: 'left',
    "@media (max-width: 1200px)": {
      fontSize: '40px',
      lineHeight: '120%',
    },
    "@media (max-width: 320px)": {
      fontSize: '30px',
      lineHeight: '120%',
    },
  },
  bannerDescription: {
    color: '#FCFBFF',
    fontSize: '16px',
    lineHeight: '36px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    textAlign: 'left',
    padding: '50px 0',
    "@media (max-width: 1200px)": {
      fontSize: '14px',
      lineHeight: '21px',
      padding: '20px 0',
    },
    "@media (max-width: 540px)": {
      lineHeight: '30px',
      padding: '40px 0',
    },
    "@media (max-width: 320px)": {
      lineHeight: '21px',
      padding: '20px 0',
    },
  },
  bannerBtnContact: {
    width: '142px',
    height: '72px',
    borderRadius: '4px',
    backgroundColor: '#561BFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FCFBFF',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Oswald',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    "@media (max-width: 1200px)": {
      width: '120px',
      height: '54px',
      fontSize: '14px',
      lineHeight: '21px',
    },
    "@media (max-width: 320px)": {
      width: '100px',
      height: '48px',
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  bannerBtnPortfolio: {
    marginLeft: '10px',
    width: '142px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FCFBFF',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Oswald',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    "@media (max-width: 1200px)": {
      width: '120px',
      height: '54px',
      fontSize: '14px',
      lineHeight: '21px',
    },
    "@media (max-width: 320px)": {
      width: '100px',
      height: '48px',
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  bannerArrowContainer: {
    position: 'absolute',
    left: '50%',
    bottom: '120px',
    "@media (max-width: 720px)": {
      bottom: '90px',
    },
    "@media (max-width: 640px)": {
      bottom: '60px',
    },
    "@media (max-width: 540px)": {
      bottom: '120px',
    },
  },
  bannerArrow: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    "&::after": {
      content: "''",
      width: '25px',
      height: '25px',
      position: 'absolute',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(45deg)',
      animation: `$arrow 3000ms infinite ${theme.transitions.easing.easeIn}`,
    },
  },
  "@keyframes arrow": {
    "0%": { top: '30px' },
    "100%": { top: '30px' },
    "50%": { top: '50px' },
  },
  sectionPartner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '30px 84px',
    "@media (max-width: 768px)": {
      padding: '20px 20px',
    }
  },
  partnerDescription: {
    color: 'black',
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'left',
    width: '20%',
    marginRight: '20px',
    "@media (max-width: 1024px)": {
      width: '100%',
    },
    "@media (min-width: 1024px)": {
      maxWidth: '120px',
    }
  },
  partners: {
    display: 'flex',
    overflowX: "scroll",
    justifyContent: 'space-around',
    width: '80%',
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (max-width: 1024px)": {
      justifyContent: 'space-between',
      width: '100%'
    },
  },
  partnerMark: {
    marginRight: '20px',
  },
  divider: {
    width: '90%',
    height: '1px',
    opacity: 0.1,
    backgroundColor: '#38374A',
    marginLeft: '5%',
    marginTop: '50px',
    marginBottom: '50px',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    padding: '50px 84px',
    "@media (max-width: 768px)": {
      padding: '30px 20px',
    },
    "@media (min-width: 600px)": {
      minHeight: '700px',
    },
  },
  evenSection: {
    backgroundColor: '#F7F5FF',
    padding: '80px 84px',
    "@media (max-width: 880px)": {
      padding: '30px 20px',
    },
    "@media (min-width: 880px)": {
      clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
    }
  },
  sectionTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  smallTitle: {
    color: '#38374A',
    opacity: 0.5,
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    "@media (max-width: 880px)": {
      fontSize: '12px',
      lineHeight: '18px',
    }
  },
  bigTitle: {
    color: '#38374A',
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '140%',
    maxWidth: '500px',
    "@media (max-width: 880px)": {
      fontSize: '30px',
      fontWeight: '600',
    }
  },
  aboutBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  aboutContent: {
    position: 'relative',
    fontFamily: 'Arial',
    color: '#38374A',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'left',
    "@media (max-width: 600px)": {
      marginTop: '20px',
    },
  },
  showAboutConent: {
    height: '200px',
    overflowY: 'hidden',
  },
  gradient: {
    width: '100%',
    height: '100px',
    bottom: '0px',
    position: 'absolute',
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255,1))',
    zIndex: 999,
  },
  readMore: {
    color: '#561BFF',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '20px',
    "@media (max-width: 880px)": {
      fontSize: '14px',
      lineHeight: '21px',
    },
    "@media (min-width: 600px)": {
      marginTop: '50px',
    },
  },
  adventageBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  portfolioBody: {
    display: 'flex',
    flexDirection: 'row',
    "@media (min-width: 600px)": {
      paddingTop: '20px',
    },
  },
  contactLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingRight: '20px',
  },
  contactList: {
    paddingTop: '30px',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '10px',
  },
  contactItemImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#E6E0FF',
  },
  contactItemText: {
    color: '#38374A',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '21px',
    fontFamily: 'Oswald',
    marginLeft: '10px',
    "@media (max-width: 320px)": {
      fontSize: '10px',
    },
  },
  contactMsgDescription: {
    fontFamily: 'Oswald',
    fontweight: 'normal',
    fontWize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#38374A',
    opacity: '0.5',
    textAlign: 'left',
    paddingTop: '20px',
    paddingBottom: '10px',
    "@media (min-width: 600px)": {
      display: 'none',
    },
  },
  contactMsgInput: {
    width: '100%',
  },
  contactMsgCheck: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '10px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#38374A',
    textAlign: 'left',
    width: '100%',
  },
  contactMsgCheckBox: {
    top: '-10px',
  },
  touchContainer: {
    "@media (max-width: 600px)": {
      display: 'none',
    },
  },
  mobileTouchContainer: {
    marginBottom: '50px',
    "@media (min-width: 601px)": {
      display: 'none',
    },
  },
  smallDivider: {
    width: '30%',
    height: '1px',
    opacity: 0.1,
    backgroundColor: '#38374A',
    margin: '30px 0',
  },
  getInTouch: {
    color: '#38374A',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  socialIconList: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '20px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #E6E0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
  },
  sectionLink: {
    paddingLeft: '84px',
    paddingRight: '84px',
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + image + ')',
    backgroundSize: 'cover',
    width: '100%',
    marginTop: '-50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    "@media (max-width: 768px)": {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    "@media (min-width: 768px)": {
      clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
    }
  },
  linkLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '70%',
    "@media (max-width: 1280px)": {
      width: '60%',
    },
    "@media (max-width: 990px)": {
      width: '100%',
    }
  },
  linkTitle: {
    color: '#FCFBFF',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '36px',
    fontFamily: 'Oswald',
    paddingTop: '10px',
    paddingBottom: '15px',
    "@media (max-width: 768px)": {
      lineHeight: '140%',
    }
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '130px',
    "@media (max-width: 320px)": {
      height: '100px',
    },
  },
  linkItem: {
    cursor: 'pointer',
    color: '#FCFBFF',
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '36px',
    fontFamily: 'Oswald',
    paddingTop: '10px',
    textAlign: 'left',
    width: '30%',
    "@media (max-width: 1280px)": {
      fontSize: '18px',
      lineHeight: '27px',
      width: '50%',
    },
    "@media (max-width: 320px)": {
      fontSize: '14px',
      lineHeight: '18px',
      width: '50%',
    },
  },
  linkRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '30%',
    "@media (max-width: 1280px)": {
      width: '40%',
    },
    "@media (max-width: 990px)": {
      width: '100%',
      marginBottom: '20px',
    }
  },
  emailControl: {
    backgroundColor: 'white',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '384px',
    height: '66px',
    "@media (max-width: 540px)": {
      width: '328px',
    },
    "@media (max-width: 360px)": {
      width: '100%',
    }
  },
  emailControlInput: {
    flex: 1,
    marginLeft: '10px',
    marginRight: '10px',
    outline: 'transparent',
    border: 'none',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Oswald',
    fontWeight: '500',
  },
  emailControlButton: {
    cursor: 'pointer',
    width: '114px',
    height: '58px',
    borderRadius: '4px',
    backgroundColor: '#561BFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Oswald',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '0 10px',
    marginRight: '4px',
  },
  emailDescription: {
    color: 'white',
    fontSize: '13px',
    lineHeight: '16px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    textAlign: 'left',
    paddingTop: '10px',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px 84px',
    "@media (max-width: 768px)": {
      padding: '30px 20px 0 20px',
    }
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '21px',
    color: '#38374A',
    fontFamily: 'Oswald',
    textAlign: 'left',
    "@media (max-width: 768px)": {
      marginBottom: '30px',
    }
  }
});

export default indexPageStyle;
