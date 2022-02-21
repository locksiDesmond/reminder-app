import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonBottom from "../components/button-bottom/ButtonBottom";
import Container from "../components/Container";
import MyList from "../components/my-lists/MyList";
import Search from "../components/search/Search";
import Sections from "../components/sections/Sections";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f1f6" }}>
      <Container>
        <Search />
        <Sections />
        <MyList />
        <ButtonBottom />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
