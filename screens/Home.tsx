import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../components/Container";
import Search from "../components/search/Search";
import Sections from "../components/sections/Sections";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eeeeee" }}>
      <Container>
        <Search />
        <Sections navigation={navigation} />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
