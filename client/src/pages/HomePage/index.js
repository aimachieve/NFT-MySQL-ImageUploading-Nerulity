import React from 'react';
import { Stack, styled } from '@mui/material';
import HeroSection from './HeroSection';
import RoadmapSection from './RoadmapSection';
import WhoWeAreSection from './WhoWeAreSection';
import JoinCommunitySection from './JoinCommunitySection';
import FaqSection from './FaqSection';
import Footer from '../../components/Footer';
import WhitelistSection from './WhitelistSection';
import AboutUsSection from './AboutUsSection';
import MintSection from './MintSection';
import useWhitelist from '../../hooks/useWhitelist';
import useWallet from '../../hooks/useWallet';
import OverviewSection from './OverviewSection';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

export default function HomePage() {
  const { registerAvailableWhitelist, mintAvailableWhitelist } = useWhitelist();
  const { walletConnected } = useWallet();
  return (
    <>
      <HeroSection />
      <ContentStyle>
        <Stack spacing={{ xs: 8, sm: 16, md: 20 }}>
          {(walletConnected && registerAvailableWhitelist) && <WhitelistSection />}
          {(walletConnected && mintAvailableWhitelist) && <MintSection />}
          <AboutUsSection />
          <OverviewSection />
          <RoadmapSection />
          <WhoWeAreSection />
          <FaqSection />
          <JoinCommunitySection />
        </Stack>
        <Footer />
      </ContentStyle>
    </>
  );
}