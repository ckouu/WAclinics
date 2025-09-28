'use client'

import Link from 'next/link';
import Image from 'next/image';
import QItem from './components/q-item';

import dynamic from "next/dynamic";

export default function Home() {

  const Map = dynamic(() => import("./components/map"), { ssr:false });

  const faqData = [
    {question: 'Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
     answer: 'A: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {question: 'Q: Maecenas consequat pharetra risus a fringilla?',
     answer: 'A: Maecenas consequat pharetra risus a fringilla.'
    },
    {question: 'Q: Suspendisse quis tristique ipsum, et eleifend dui. Vivamus commodo, nibh sed?',
     answer: 'A: Suspendisse quis tristique ipsum, et eleifend dui. Vivamus commodo, nibh sed.'
    },
    {question: 'Q: Aliquam hendrerit pharetra ex, at dignissim augue volutpat eu?',
     answer: 'A: Aliquam hendrerit pharetra ex, at dignissim augue volutpat eu.'
    }
  ]

  return (
    <div>

      <nav>
        <Link className="nav-link" href="#about">about us</Link>
        <Link className="nav-link" href="#resources">resources & faq</Link>
        <Link className="nav-link" href="#map">interactive map</Link>
      </nav>

      <section>
        <div className="pink-callout">
          <h1>Find your nearest abortion clinic.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat pharetra risus a fringilla. Suspendisse quis tristique ipsum, et eleifend dui. Vivamus commodo, nibh sed ultrices finibus, ex eros consequat ligula, maximus hendrerit diam orci at tortor. Aliquam hendrerit pharetra ex, at dignissim augue volutpat eu. 
          </p>
        </div>
  
        <div id="map" className="map-container"><Map/></div>
        <p>Click on any dot to view more information about each clinic.</p>
      </section>

      <section id="resources">
        <h1>Resources & FAQ</h1>

        <div className='resources-container'>
          <div className='resource'>
            <h3>History</h3>
            <p>Interested in learning more about the history behind our reproductive rights?</p>
            <a href='https://www.google.com/' className='resource-link'>
              READ MORE
              <div className='arrow'></div>
            </a>
          </div>

          <div className='resource'>
            <h3>Policy</h3>
            <p>Stay informed on the current policies and laws surrounding reproductive rights in your state.</p>
            <a href='https://www.google.com/' className='resource-link'>
              LEARN MORE
              <div className='arrow'></div>
            </a>
          </div>

          <div className='resource'>
            <h3>Donate</h3>
            <p>Support the fight for reproductive rights across the world by donating to the Planned Parenthood Action Fund!</p>
            <a href='https://www.google.com/' className='resource-link'>
              DONATE
              <div className='arrow'></div>
            </a>
          </div>
        </div>

        {faqData.map((item, index) => (
          <QItem key={index} question={item.question} answer={item.answer}></QItem>
        ))}

      </section>

      <section id="about">
        <div className="pink-callout">
          <h1>About Us</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat pharetra risus a fringilla. Suspendisse quis tristique ipsum, et eleifend dui. Vivamus commodo, nibh sed ultrices finibus, ex eros consequat ligula, maximus hendrerit diam orci at tortor. Aliquam hendrerit pharetra ex, at dignissim augue volutpat eu.
          <div>
            <a href='https://www.google.com/' className="ig-button"></a>
            <a href='https://www.google.com/' className="email-button"></a>
            <a href='https://www.google.com/' className="web-button"></a>
          </div>
        </div>
      </section>

    </div>
    
  );
}
