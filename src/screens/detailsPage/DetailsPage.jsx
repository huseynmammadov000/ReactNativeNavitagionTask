import React from 'react';
import {View, Text} from 'react-native';
import {StyledText, StyledView} from '@common/StyledComponents';

const DetailsPage = ({route}) => {
  const { itemDetails } = route.params; 

  return (
    <StyledView className="p-4">
      <StyledText className="text-3xl font-bold mb-4">{itemDetails.name}</StyledText>
      <StyledText className="text-lg mb-2">Email: {itemDetails.email}</StyledText>
      <StyledText className="text-lg">Company: {itemDetails.company.name}</StyledText>
    </StyledView>
  );
};

export default DetailsPage;
