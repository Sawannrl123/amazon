import React, { Component } from "react";

import { Banner, Popup, Button, Icon, Breadcrum } from "../../components";
import {
  PageContainer,
  Row,
  Coloumn,
  Container
} from "../../components/common";
import {
  TierOneContainer,
  TierOneVideoContainer,
  TierOneVideo,
  TierOneVideoContent,
  TierOneContentContainer,
  TierOneContent,
  TierOneVideoTitle,
  SectionContainer,
  TierTwoContentContainer,
  TierTwoImage,
  TierTwoContent,
  TierTwoTitle,
  TierTwoText,
  TierTwoButton,
  MobileSection,
  ContactForm,
  Input,
  Textarea
} from "./InnovationStyle";
import { WHITE_COLOR } from "../../utils/globalConstants";
import { SampleImage } from "../../images";

class Innovation extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      query: ""
    }
  };

  submitQuery = e => {
    e.preventDefault();
    this.props.submitQuery(this.state.contact).then(() => {
      this.props.togglePopup();
    });
  };

  onFieldChange = e => {
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value
      }
    });
  };

  checkPopupContent = content => {
    if (typeof content === "string" && content.startsWith("/static")) {
      return (
        <video width="100%" height="500" controls autoPlay>
          <source src={content} type="video/mp4" />
        </video>
      );
    }
    return content;
  };

  renderPopup = () => {
    const { popupData } = this.props;
    const { display, content } = popupData;
    if (display) {
      return (
        <Popup closePopup={this.props.togglePopup}>
          {this.checkPopupContent(content)}
        </Popup>
      );
    }
    return null;
  };

  renderTierOne = () => {
    const { tier1 } = this.props;

    const tireOneItems = tier1.map((item, index) => {
      return (
        <Coloumn col="3" key={`tier${index}`}>
          <TierOneContainer>
            <TierOneVideoContainer
              onClick={e => this.props.togglePopup(item.video)}
            >
              <TierOneVideo>
                <img src={SampleImage} alt="tier1" />
              </TierOneVideo>
              <TierOneVideoContent>
                <TierOneVideoTitle>{item.title}</TierOneVideoTitle>
                <Icon name="video" color={WHITE_COLOR} size={24} />
              </TierOneVideoContent>
            </TierOneVideoContainer>
            <TierOneContentContainer>
              <TierOneContent>{item.shortDescription}</TierOneContent>
              <Button
                onClick={e => this.props.togglePopup(item.description)}
                primary
              >
                {item.ctaText}
              </Button>
            </TierOneContentContainer>
          </TierOneContainer>
        </Coloumn>
      );
    });

    return <Row>{tireOneItems}</Row>;
  };

  renderTierTwo = () => {
    const { tier2 } = this.props;

    const tireTwoItems = tier2.map((item, index) => {
      return (
        <Coloumn col="3" key={`tier${index}`}>
          <TierOneContainer>
            <TierTwoContentContainer>
              {item.image ? (
                <TierTwoImage>
                  <img src={item.image} alt="tier2" />
                </TierTwoImage>
              ) : null}
              <TierTwoContent>
                <TierTwoTitle>{item.title}</TierTwoTitle>
                <TierTwoText>{item.shortDescription}</TierTwoText>
              </TierTwoContent>
            </TierTwoContentContainer>
            <TierTwoButton>
              <Button
                onClick={e => this.props.togglePopup(item.description)}
                primary
              >
                {item.ctaText}
              </Button>
            </TierTwoButton>
          </TierOneContainer>
        </Coloumn>
      );
    });

    return <Row>{tireTwoItems}</Row>;
  };

  renderTierThree = () => {
    const { tier3 } = this.props;

    const tireThreeItems = tier3.map((item, index) => {
      return (
        <Coloumn col="1" key={`tier${index}`}>
          <TierOneContainer>
            <TierTwoContentContainer>
              {item.image ? (
                <TierTwoImage>
                  <img src={item.image} alt="tier3" />
                </TierTwoImage>
              ) : null}
              <TierTwoContent>
                <TierTwoTitle>{item.title}</TierTwoTitle>
                <TierTwoText>{item.shortDescription}</TierTwoText>
              </TierTwoContent>
            </TierTwoContentContainer>
            <TierTwoButton>
              <Button
                onClick={e => this.props.togglePopup(item.description)}
                primary
              >
                {item.ctaText}
              </Button>
            </TierTwoButton>
          </TierOneContainer>
        </Coloumn>
      );
    });

    return <Row>{tireThreeItems}</Row>;
  };

  renderRecommendation = () => {
    const { recommendation } = this.props;

    const popupContact = [
      <ContactForm onSubmit={this.submitQuery} key="contact-form">
        <Row>
          <Coloumn col="2">
            <Input
              type="text"
              name="name"
              placeholder="Enter Name*"
              onChange={this.onFieldChange}
              required
            />
          </Coloumn>
          <Coloumn col="2">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email*"
              onChange={this.onFieldChange}
              required
            />
          </Coloumn>
          <Coloumn col="1">
            <Textarea
              name="query"
              placeholder="Enter Your Query*"
              onChange={this.onFieldChange}
              required
            />
          </Coloumn>
          <Coloumn col="1">
            <Button type="submit" primary>
              Submit
            </Button>
          </Coloumn>
        </Row>
      </ContactForm>
    ];

    const recommendationItems = recommendation.map((item, index) => {
      return (
        <Coloumn col="1" key={`tier${index}`}>
          <TierOneContainer>
            <TierTwoContentContainer>
              {item.image ? (
                <TierTwoImage>
                  <img src={item.image} alt="recommendation" />
                </TierTwoImage>
              ) : null}
              <TierTwoContent>
                <TierTwoTitle>{item.title}</TierTwoTitle>
                <TierTwoText>{item.subTitle}</TierTwoText>
              </TierTwoContent>
            </TierTwoContentContainer>
            <TierTwoButton>
              <Button
                onClick={e => this.props.togglePopup(popupContact)}
                primary
              >
                {item.ctaText}
              </Button>
            </TierTwoButton>
          </TierOneContainer>
        </Coloumn>
      );
    });

    return <Row>{recommendationItems}</Row>;
  };

  render() {
    const { image, content } = this.props.banner;
    const { dimension, location } = this.props;
    const { width } = dimension;
    return (
      <PageContainer>
        <Banner image={image} content={content} />
        {width < 769 ? <Breadcrum path={location.pathname}/> : null}
        <SectionContainer>
          <Container>{this.renderTierOne()}</Container>
        </SectionContainer>
        {width < 769 ? (
          <MobileSection>
            <SectionContainer>
              <Container>{this.renderTierTwo()}</Container>
            </SectionContainer>
            <SectionContainer>
              <Container>{this.renderTierThree()}</Container>
            </SectionContainer>
            <Container>{this.renderRecommendation()}</Container>
          </MobileSection>
        ) : <Container>{this.renderTierTwo()}</Container>}
        {this.renderPopup()}
      </PageContainer>
    );
  }
}

export default Innovation;
