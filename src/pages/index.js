import React, { useState } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {
  Grid,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

import validator from 'email-validator';
import validatePhoneNumber from 'validate-phone-number-node-js';

import Header from "./../components/Header"
import AdventageItem from "./../components/AdventageItem";
import ServiceList from "./../components/ServiceList";
import PortfolioItem from "./../components/PortfolioItem";
import TestimonialCarousel from "./../components/TestimonialCarousel";
import InputField from "./../components/InputField";
import CustomButton from "./../components/CustomButton";
import MessageBox from "./../components/MessageBox";
import PrivacyPolicy from "./../components/PrivacyPolicy"

import ImgSamsung from "./../assets/images/Samsung.svg";
import ImgBentley from "./../assets/images/Bentley.svg";
import ImgVisa from "./../assets/images/Visa.svg";
import ImgDove from "./../assets/images/Dove.svg";
import ImgJaguar from "./../assets/images/Jaguar.svg";
import ImgPortfolio1 from "./../assets/images/portfolio1.jpeg";
import ImgPortfolio2 from "./../assets/images/portfolio2.jpeg";
import ImgPortfolio3 from "./../assets/images/portfolio3.jpeg";
import ImgPhone from "./../assets/images/phone.svg";
import ImgMail from "./../assets/images/mail.svg";
import ImgFacebook from "./../assets/images/facebook.svg";
import ImgTwitter from "./../assets/images/twitter.svg";
import ImgInstagram from "./../assets/images/instagram.svg";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const serviceList = [
  {
    index: 1,
    title: "User Interface Design",
    subtitle: "Design - There are many variations of passages of Lorem Ipsum available, but the majority.",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.\n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
  },
  {
    index: 2,
    title: "Web Development",
    subtitle: "Web Development - There are many variations of passages of Lorem Ipsum available, but the majority.",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.\n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
  },
  {
    index: 3,
    title: "Mobile Development",
    subtitle: "Mobile Development - There are many variations of passages of Lorem Ipsum available, but the majority.",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.\n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
  }
];

const adventageList = [
  {
    title: "1-Professional Interview",
    desp: "1-Suspendisse et mi non odio semper accumsan vel sed sem."
  },
  {
    title: "2-Professional Interview",
    desp: "Suspendisse et mi non odio semper accumsan vel sed sem."
  },
  {
    title: "3-Professional Interview",
    desp: "Suspendisse et mi non odio semper accumsan vel sed sem."
  },
  {
    title: "4-Professional Interview",
    desp: "Suspendisse et mi non odio semper accumsan vel sed sem."
  },
  {
    title: "5-Professional Interview",
    desp: "Suspendisse et mi non odio semper accumsan vel sed sem."
  },
  {
    title: "6-Professional Interview",
    desp: "Suspendisse et mi non odio semper accumsan vel sed sem."
  }
];

const portfolioList = [
  {
    img: ImgPortfolio1
  },
  {
    img: ImgPortfolio2
  },
  {
    img: ImgPortfolio3
  }
];

const IndexPage = () => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [values, setValues] = useState(
    {
      name: '',
      email: '',
      phonenumber: '',
      message: '',
      letterEmail: '',
    }
  );
  const [errors, setErrors] = useState({ email: false, phonenumber: false });

  const [state, setState] = useState({ jason: false });
  const [message, setMessage] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  const scrollToPosition = (id) => {
    const objDiv = document.getElementById(id);
    if (objDiv !== null) {
      objDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleMenuChange = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleInputChange = e => {
    const { id, value } = e.target
    if (id === 'email') {
      if (validator.validate(values.email)) {
        setErrors({ ...errors, [id]: true })
      } else {
        setErrors({ ...errors, [id]: false })
      }
    }
    if (id === 'phonenumber') {
      if (validatePhoneNumber.validate(values.phonenumber)) {
        setErrors({ ...errors, [id]: true })
      } else {
        setErrors({ ...errors, [id]: false })
      }
    }
    setValues({ ...values, [id]: value });
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { jason } = state;

  const closeMessage = () => {
    setMessage(null);
  }

  const sendInquiry = () => {
    if (values.name.trim() !== "" &&
      values.email.trim() !== "" &&
      values.phonenumber.trim() !== "" &&
      values.message.trim() !== "" &&
      errors.email &&
      errors.phonenumber
    ) {
      setMessage(<MessageBox close={closeMessage} />);
    }
  }

  const closePrivacyPolicy = () => {
    setPrivacyPolicy(null);
  }

  const goPrivacyPolicy = () => {
    setPrivacyPolicy(<PrivacyPolicy close={closePrivacyPolicy} />);
  }

  const signUp = () => {
    if (validator.validate(values.letterEmail)) {
      setMessage(<MessageBox close={closeMessage} />);
    }
  }

  return (
    <div id='pvd' className={menuOpen ? classes.headerContainer : classes.container}>
      {message}
      {privacyPolicy}
      <Header
        open={menuOpen}
        handleChange={handleMenuChange}
        scrollToPosition={scrollToPosition}
      />
      {
        !menuOpen
          ?
          <>
            <Grid container className={classes.sectionBanner}>
              <video autoPlay loop className={classes.sectionBannerLandScape}>
                <source
                  src={"https://www.uber-assets.com/video/upload/f_mp4,vc_auto,q_auto,w_1920,h_1080/v1570064081/videos/Uber_Works_-_Landing_Page_Video_10s__v601_WEB.mp4"}
                  type='video/mp4'
                />
                <track default kind="captions" srcLang="en" />
              </video>
              <video autoPlay loop className={classes.sectionBannerPortrait}>
                <source
                  src={"https://www.uber-assets.com/video/upload/f_webm,vc_auto,q_auto,w_450,h_675/v1570064084/videos/Uber_Works_-_Landing_Page_Video_10s_V601_MOBILE.mp4"}
                  type='video/mp4'
                />
                <track default kind="captions" srcLang="en" />
              </video>
              <Grid item xs={12} className={classes.bannerBody}>
                <div className={classes.bannerTitle}>
                  Take an epic ventures <br />with our digital passion
                </div>
                <div className={classes.bannerDescription}>
                  We design handcrafted, awesome websites.
                  <br />
                  Not only for money, for passion generally.
                </div>
                <Grid container direction='row'>
                  <Grid
                    className={classes.bannerBtnContact}
                    onClick={() => scrollToPosition('section-contact')}
                  >
                    contact
                  </Grid>
                  <Grid
                    className={classes.bannerBtnPortfolio}
                    onClick={() => scrollToPosition('section-portfolio')}
                  >
                    Portfolio
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.bannerArrowContainer}>
                <div className={classes.bannerArrow} />
              </div>
            </Grid>
            <Grid container className={classes.sectionPartner}>
              <Grid item className={classes.partnerDescription}>
                We took part in projects for:
              </Grid>
              <Grid id="partners" item className={classes.partners}>
                <Carousel
                  infinite
                  slidesPerPage={1}
                  slidesPerScroll={1}
                  animationSpeed={60000}
                  autoPlay={500}
                  offset={50}
                  itemWidth={150}
                >
                  <img className={classes.partnerMark} src={ImgSamsung} alt="img-samsung" />
                  <img className={classes.partnerMark} src={ImgBentley} alt="img-bentley" />
                  <img className={classes.partnerMark} src={ImgVisa} alt="img-visa" />
                  <img className={classes.partnerMark} src={ImgDove} alt="img-dove" />
                  <img className={classes.partnerMark} src={ImgJaguar} alt="img-jaguar" />
                </Carousel>
              </Grid>
            </Grid>
            <div className={classes.divider} />
            <Grid
              container
              className={classes.section}
              id="section-about"
            >
              <Grid item xs={12} sm={5} className={classes.sectionTitle}>
                <div className={classes.smallTitle}>About us</div>
                <div className={classes.bigTitle}>Who we are?</div>
              </Grid>
              <Grid item xs={12} sm={7} className={classes.aboutBody}>
                <div className={classes.aboutContent}>
                  <div className={readMore ? classes.showAboutConent : null}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    <br /><br />
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </div>
                  {readMore ? <div className={classes.gradient} /> : null}
                </div>
                <Grid className={classes.readMore} onClick={() => setReadMore(!readMore)}>
                  {readMore ? "read more ↓" : "read less ↑"}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.section + " " + classes.evenSection}
              id="section-services"
            >
              <Grid container className={classes.sectionTitle}>
                <div className={classes.smallTitle}>services</div>
                <div className={classes.bigTitle}>We're focus on</div>
              </Grid>
              <ServiceList data={serviceList} />
            </Grid>
            <Grid
              container
              className={classes.section}
              id="section-whyus"
            >
              <Grid container className={classes.sectionTitle}>
                <div className={classes.smallTitle}>Adventages</div>
                <div className={classes.bigTitle}>Why us?</div>
              </Grid>
              <Grid container className={classes.adventageBody}>
                {
                  adventageList.map((item, key) => {
                    return (
                      <AdventageItem key={key} title={item.title} description={item.desp} />
                    )
                  })
                }
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.section + " " + classes.evenSection}
              id="section-portfolio"
            >
              <Grid container className={classes.sectionTitle}>
                <div className={classes.smallTitle}>Pixels</div>
                <div className={classes.bigTitle}>Portfolio</div>
              </Grid>
              <Grid container justify='space-between' className={classes.portfolioBody}>
                {
                  portfolioList.map((item, key) => {
                    return (
                      <div key={key}>
                        <PortfolioItem img={item.img} />
                      </div>
                    )
                  })
                }
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.section}
              id="section-testimonials"
            >
              <Grid container className={classes.sectionTitle}>
                <div className={classes.smallTitle}>Testimonials</div>
                <div className={classes.bigTitle}>People says</div>
              </Grid>
              <TestimonialCarousel autoplay />
            </Grid>
            <Grid
              container
              className={classes.section + " " + classes.evenSection}
              id="section-contact"
            >
              <Grid item xs={12} sm={6} className={classes.contactLeft}>
                <div className={classes.smallTitle}>Contact</div>
                <div className={classes.bigTitle}>Would you talk about the project? Say Hello</div>
                <div className={classes.contactList}>
                  <div className={classes.contactItem}>
                    <div className={classes.contactItemImg}>
                      <img src={ImgPhone} alt="img-phone" />
                    </div>
                    <div className={classes.contactItemText}>+47 700 839 386</div>
                  </div>
                  <div className={classes.contactItem}>
                    <div className={classes.contactItemImg}>
                      <img src={ImgMail} alt="img-mail" />
                    </div>
                    <div className={classes.contactItemText}>
                      HELLO@PASSIONVENTURES.DIGITAL
                    </div>
                  </div>
                </div>
                <div className={classes.touchContainer}>
                  <div className={classes.smallDivider} />
                  <div className={classes.getInTouch}>Get in touch</div>
                  <div className={classes.socialIconList}>
                    <div className={classes.socialIcon}>
                      <img src={ImgFacebook} alt="img-facebook" />
                    </div>
                    <div className={classes.socialIcon}>
                      <img src={ImgTwitter} alt="img-twitter" />
                    </div>
                    <div className={classes.socialIcon}>
                      <img src={ImgInstagram} alt="img-instagram" />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={classes.contactMsgDescription}>Send Message:</div>
                <InputField
                  className={classes.contactMsgInput}
                  label="NAME"
                  required
                  id="name"
                  value={values.name}
                  onChange={handleInputChange}
                  success={values.name.trim() !== "" ? true : false}
                />
                <InputField
                  label="E-MAIL ADDRESS"
                  className={classes.contactMsgInput}
                  required
                  id="email"
                  value={values.email}
                  onChange={handleInputChange}
                  success={values.email.trim() !== "" && errors.email ? true : false}
                  error={values.email.trim() !== "" && !errors.email ? true : false}
                />
                <InputField
                  label="PHONE NUMBER"
                  className={classes.contactMsgInput}
                  required
                  id="phonenumber"
                  value={values.phonenumber}
                  onChange={handleInputChange}
                  success={values.phonenumber.trim() !== "" && errors.phonenumber ? true : false}
                  error={values.phonenumber.trim() !== "" && !errors.phonenumber ? true : false}
                />
                <InputField
                  label="YOUR MESSAGE"
                  className={classes.contactMsgInput}
                  required
                  multiline
                  rows={3}
                  id="message"
                  value={values.message}
                  onChange={handleInputChange}
                  success={values.message.trim() !== "" ? true : false}
                />
                <FormControlLabel
                  className={classes.contactMsgCheck}
                  control={
                    <Checkbox
                      className={classes.contactMsgCheckBox}
                      checked={jason}
                      onChange={handleChange}
                      name="jason"
                      color={"primary"}
                    />
                  }
                  label="All the Lorem Ipsum generators on the Internet tend to repeat."
                />
                <CustomButton title="Send an inquiry" onClick={sendInquiry} />
              </Grid>
              <Grid item className={classes.mobileTouchContainer}>
                <div className={classes.smallDivider} />
                <div className={classes.getInTouch}>Get in touch</div>
                <div className={classes.socialIconList}>
                  <div className={classes.socialIcon}>
                    <img src={ImgFacebook} alt="img-facebook" />
                  </div>
                  <div className={classes.socialIcon}>
                    <img src={ImgTwitter} alt="img-twitter" />
                  </div>
                  <div className={classes.socialIcon}>
                    <img src={ImgInstagram} alt="img-instagram" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container className={classes.sectionLink}>
              <Grid item className={classes.linkLeft}>
                <div className={classes.linkTitle}>Links</div>
                <Grid container className={classes.linkList}>
                  <div className={classes.linkItem}>Consulting</div>
                  <div className={classes.linkItem}>User Interface Design</div>
                  <div className={classes.linkItem}>Web Development</div>
                  <div className={classes.linkItem}>Mobile Development</div>
                  <div className={classes.linkItem}>Blog</div>
                  <Grid className={classes.linkItem} onClick={goPrivacyPolicy}>
                    Privacy Policy
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.linkRight}>
                <div className={classes.linkTitle}>Newsletter</div>
                <div className={classes.emailControl}>
                  <input
                    id="letterEmail"
                    type="text"
                    placeholder="E-MAIL ADDRESS"
                    className={classes.emailControlInput}
                    value={values.letterEmail}
                    onChange={handleInputChange}
                  />
                  <Grid
                    className={classes.emailControlButton}
                    onClick={signUp}
                  >
                    SignUp
                  </Grid>
                </div>
                <div className={classes.emailDescription}>Be informed about offers and new articles</div>
              </Grid>
            </Grid>
            <Grid container className={classes.footer}>
              <div id="footer" className={classes.footerText}>2020 BY PASSIONVENTURES.DIGITAL. COPYRIGHTS ARE PROTECTED.</div>
              <div className={classes.footerText}>PROUDLY MADE WITH PASSION</div>
            </Grid>
          </>
          : null
      }
    </div >
  );
}

export default IndexPage;
