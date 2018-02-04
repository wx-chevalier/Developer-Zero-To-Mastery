import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'react-bootstrap';

function NoSupport() {
  return (
    <div className='flexWrapper'>
      <div className='verticalAlign'>
        <h3 className='colourDarkGrey text-center'>
          This page is not supported in your browser
        </h3>
        <p className='colourDarkGrey'>
          {
            'We suggest upgrading to the latest version of one of the ' +
            'browsers below'
          }
        </p>
        <hr />
        <Row className='row-fluid'>
          <div className='flexSpaceAround'>
            <Col className='flexSpaceAround' sm={ 4 }>
              <a
                href='https://www.microsoft.com/en-gb/windows/microsoft-edge'
                rel='nofollow'
                target='_blank'
                >
                <FontAwesome
                  className='browserIcon'
                  name='edge'
                  size='4x'
                />
              </a>
            </Col>
            <Col className='flexSpaceAround' sm={ 4 }>
              <a
                href='https://www.google.com/chrome/browser/desktop/index.html'
                rel='nofollow'
                target='_blank'
                >
                <FontAwesome
                  className='browserIcon'
                  name='chrome'
                  size='4x'
                />
              </a>
            </Col>
            <Col className='flexSpaceAround' sm={ 4 }>
              <a
                href='https://www.mozilla.org/en-GB/firefox/new/'
                rel='nofollow'
                target='_blank'
                >
                <FontAwesome
                  className='browserIcon'
                  name='firefox'
                  size='4x'
                />
              </a>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default NoSupport;
