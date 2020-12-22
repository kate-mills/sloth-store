import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/fashion.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="Right profile of woman wearing Hide and Wild earrings. She has her eyes closed and head tilted back."/>
        <article>
          <div className="title">
            <h2>About Hilary's Designs</h2>
            <div className="underline"></div>
          </div>
          <p>Hand cut designs made with love and natural elements by yours truly, in the beautiful Napa Valley. *coming soon* hideandwild.com</p>
        </article>

      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
