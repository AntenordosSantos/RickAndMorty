import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import LocationCell from './';
import { Location } from 'src/data/models/location';

const Container = styled.View`
  flex: 1;
  background-color: #008000};
`;

const LOCATION_1: Location = {id: 1, name: 'Earth (c-137)', dimension: 'Dimension: C-137', type: 'planet', url: '',residents: [], created: ''};

const LOCATION_2: Location = {id: 2, name: 'Sophia', dimension: 'Dimension: C-599', type: 'Human', url: '',residents: [], created: ''};

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/LocationCell', module).add('default', () => (
  <Container>
    <LocationCell location={LOCATION_1} {...actions} />
    <LocationCell location={LOCATION_2} {...actions} />
  </Container>
));
                                                                                     