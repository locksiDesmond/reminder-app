import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../components/Container";
import { View } from "react-native";
import { ListContext } from "../context/list-context/index";
import { Text } from "react-native";

const SelectList = ({ route: { params } }: any) => {
  const { list } = useContext(ListContext);
  return (
    <SafeAreaView>
      <Container>
        <View>
          <Text>Reminders will be created in "{list}"</Text>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SelectList;
