import React, { useState } from 'react'
import '../../../src/asset/css/Style.css'
import Header from '../header/Header'
import allUser from '../../data/UserData'
import { Table, TableBody, TableCell, TableHead, TableRow, Tabs } from '@mui/material'
import Tab from '@mui/material/Tab';
import instagram from '../../asset/image/instagram.svg'
import X from '../../asset/image/X.svg'
import remover from '../../asset/image/remover.svg'
import youtube from '../../asset/image/youtube.svg'

import CaroselSlider from '../carosel/CaroselSlider'



function Home() {

  // carddata
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState(allUser);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const [popup, setPopup] = useState(0);
  const [popupData, setPopupData] = useState(allUser);

  const handlePopup = (event, newValue) => {
    setPopup(newValue);
  };

  const [show, setShow] = useState(0);
  const [showData, setShowData] = useState(allUser);

  const handleShow = (event, newValue) => {
    setShow(newValue);

  };

  const [fixed, setFixed] = useState(0);
  const [fixedData, setFixedData] = useState(allUser);

  const handleFixed = (event, newValue) => {
    setFixed(newValue);
  };
  // carddata


  // card-collection-loadmore-button
  const mixedData = [allUser];
  const numCardsPerUser = 1;

  for (let i = 0; i < numCardsPerUser; i++) {
    for (const user of allUser) {
      if (i < user.viewCollection1.length) {
        mixedData.push({ user: user, view: user.viewCollection1[i] });
      }
    }
  }

  const [visibleData, setVisibleData] = useState(mixedData);
  const [cardsToShow, setCardsToShow] = useState(numCardsPerUser);

  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + numCardsPerUser);
  };
  // card-collection-loadmore-button


  return (
    <div>
      <Header />
      <CaroselSlider/>
      {/* all artist */}
      <section>
        <div className="container">
          <div className="all-artist">
            <div className="all-artist-one">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab className="tab-one" label="All" />
                <Tab className="tab-one" label="Artist" />
                <Tab className="tab-one" label="Top" />
                <Tab className="tab-one" label="Recent" />
              </Tabs>
            </div>
            <div className="all-artist-two">
              <Tabs
                value={popup}
                onChange={handlePopup}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {['4h', '24h', '1d', '1w'].map((label, index) => (
                  <Tab className="tab-one" label={label} key={index} />
                ))}
              </Tabs>
              <div className="all-artist-sub-two">
                <Tabs
                  value={show}
                  onChange={handleShow}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {['ETH', 'POL', 'SOL', 'BNB'].map((label, index) => (
                    <Tab className="tab-one" label={label} key={index} />
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
          <div className="card-one">
            {allUser.slice(0, cardsToShow).map((user, i) => (
              <div className="card-sub-one" key={i}>
                <div className="card">
                  <div className="card-content">
                    {user.viewCollection1.map((view, j) => (
                      <div className="collection-item" key={j}>
                        <img style={{ width: '389px', height: '270px', borderRadius: '28px ' }} src={view.collection} alt="CollectionImage" />
                        <div className="collection-one">
                          <div className="collection-two">
                            <img style={{ width: '58px', height: '58px', padding: '10px 0 10px 12px' }} src={user.profilePhoto} alt="" />
                            <div className="collection-sub-two">
                              <h3>{view.name}</h3>
                              <p>{view.userid}</p>
                            </div>
                          </div>
                          <div className="collection-three">
                            <div className="collection-sub-three">
                              <h6>Floor</h6>
                              <p>{view.floor}</p>
                            </div>
                            <div className="collection-sub-three">
                              <h6>{view.date}</h6>
                              <p>{view.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className='card-two'>
              {mixedData[cardsToShow] && (
                <button className="load-more-button" onClick={handleLoadMore}>
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* all artist */}
      {/* top 5 collective */}
      <section>
        <div className="container">
          <div className="top-collective">
            <h1>TOP 5 Collective</h1>
            <div className="topcollective-1">
              <Tabs
                value={fixed}
                onChange={handleFixed}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {['24h', '1d', '7d', '1m'].map((label, index) => (
                  <Tab className="tab-one" label={label} key={index} />
                ))}
              </Tabs>
            </div>
          </div>

          <div className="top-collective-2">
            {allUser.map((user, i) => (
              <div className='lemano-carosel' key={user.id} >
                <img style={{ width: '593px', height: '511px', borderRadius: '28px' }} className='background-img-one' src={user.background} alt='justimage' />
                <div className="background-add">
                  <div className='profile-photo'>
                    <img src={user.profilePhoto} alt={'profilePhoto'} />
                    <h1>{user.userid} {user.verify}</h1>
                    <p>By {user.name}</p>
                    <div className='profile-photo-1'>
                      <h6>{user.items} items | {user.price}</h6>
                    </div>
                  </div>
                  <div className='button-adjust'>
                    <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[1].collection2} alt="justimage" />
                    <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[0].collection1} alt="justimage" />
                    <button >viewCollection</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* top 5 collective */}
      {/* top artist */}
      <section>
        <div className="container">
          <div className='top-artist'>
            <h1>Top Artists</h1>
          </div>

          <div className="artist-table">
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead className="artist-flex">
                <TableRow className='line-eraiser'>
                  <TableCell className="artist-flex-1-1" align='' >Artists</TableCell>
                  <TableCell className="artist-flex-1">Volume</TableCell>
                  <TableCell className="artist-flex-1">Floor</TableCell>
                  <TableCell className="artist-flex-1">Sale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUser.map((row, i) => (
                  <TableRow className="artist-table-sub-1" key={i}>
                    {i + 1}
                    <TableCell className='artist-flex-2' component="th" scope="row">
                      <img style={{ width: '58px', height: '58px', padding: '10px 0 10px 12px' }} src={row.profilePhoto} alt="justlogo" />
                      <div className="artist-table-sub-1-2-1">
                        @{row.name}
                      </div>
                    </TableCell>
                    <TableCell className='artist-table-1' align="left">{row.volume}</TableCell>
                    <TableCell className='artist-table-1' align="left">{row.Floor}</TableCell>
                    <TableCell className='artist-table-1' align="left">{row.sale}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className='card-two'>
              {mixedData[cardsToShow] && (
                <button className="load-more-button" onClick={handleLoadMore}>
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* top artist */}
      <section className='first-community'>
        <div className="container">
          <div className="community">
            <div className="community-sub">
              <h2>Join the Community</h2>
            </div>
            <h4>Discover NFT Excellence: Where Digital Art Finds Its Value.</h4>

            <div className="community-1">
              <input type="email" name="Email" id="email-id" placeholder='Enter your email' />
              <button>join Now</button>
            </div>
            <div className="community-2">
              <img className='hover-img' src={instagram} alt="justIcon" />
              <img className='hover-img' src={remover} alt="justIcon" />
              <img className='hover-img' src={X} alt="justIcon" />
              <img className='hover-img' src={youtube} alt="justIcon" />
            </div>
          </div>
        </div>
        <section className='Graphitron'>
          <div className="container">
            <div className="Graphitron-1">
              <div className="Graphitron-2">
                <h2>Graphitron</h2>
                <h5>sfasdvfasdvsdavassadd
                  vdssgsg</h5>
              </div>
              <div className="Graphitron-3">
                <h4>Home</h4>
                <h6>My NFTs</h6>
                <h6>Browse NFTs</h6>
                <h6>Create NFT</h6>
                <h6>Marketplace</h6>
                <h5>FAQ</h5>
              </div>
              <div className="Graphitron-4">
                <h2>Contact</h2>
                <h5>naveenshark49@gamil.com</h5>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="nft-2023">
            <h2>© 2023 GraphitronNFTPlatform. All rights reserved</h2>
            <h2>Built with ❤️ for the NFT community.</h2>
          </div>
        </div>
      </section>
      {/* Graphitron */}

    </div>
  )
}

export default Home