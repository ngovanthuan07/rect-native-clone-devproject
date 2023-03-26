import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

const EmptyModal = ({onClose}) => {
  return (
    <View style={styles.container}>
      <OptionContainer>
        <Text
          style={{
            paddingLeft: 16,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          
        </Text>
        <Feather
          name="x"
          size={25}
          color="black"
          style={{ paddingRight: 10 }}
          onPress={() => onClose()}
        />
      </OptionContainer>
      
      <View style={styles.containerText}>
        <Text>
            Cannot Items
        </Text>
      </View>
    </View>
  );
};

export default EmptyModal;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerText: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
})

const OptionContainer = styled(View)`
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  border-bottom-style: solid;
`;
