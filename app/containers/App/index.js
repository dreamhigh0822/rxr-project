/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';
import RxList from 'containers/RxListPage';
import RxRefillDetail from 'containers/RxRefillDetailPage';
import RxTrackingList from 'containers/RxTrackingListPage';
import RxHistory from 'containers/RxHistoryPage';
import MedicationInfo from 'containers/MedicationInfoPage';

export default function App() {
  return (
    <Container>
      <Helmet titleTemplate="%s - RxRefill" defaultTitle="RxRefill">
        <meta name="description" content="RexRefill" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/refillable-va-medications" component={RxList} />
        <Route path="/refillable-va-medications/:id" component={RxRefillDetail} />
        <Route path="/prescription-history" component={RxHistory} />
        <Route path="/track-delivery" component={RxTrackingList} />
        <Route path="/links" component={MedicationInfo} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Container>
  );
}
