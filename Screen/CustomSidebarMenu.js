import React, { useState } from 'react';
import {
  Avatar,
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { View, StyleSheet, SafeAreaView, Image, Linking } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomSidebarMenu = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.Container}>
          <View>
            <Avatar.Image
              source={{
                uri: 'https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg',
              }}
              size={50}
            />
          </View>
          <View style={styles.contentuser}>
            <Title style={styles.title}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
        <View style={[styles.Container, { marginTop: 10 }]}>
          <View style={styles.Container}>
            <Paragraph style={styles.paragraph}>80</Paragraph>
            <Caption style={styles.captions}>Following</Caption>
          </View>
          <View style={styles.Container}>
            <Paragraph style={styles.paragraph}>100</Paragraph>
            <Caption style={styles.captions}>Followers</Caption>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
            label="Home"
            icon={() => (
              <Icon
                name="home-outline"
                size={30}
                color="black"
              />
            )}
            onPress={() => { props.navigation.navigate('Home') }}
          />
          <DrawerItem
            label="Profile"
            icon={() => (
              <Icon
                name="account-outline"
                size={30}
                color="black"
              />
            )}
            onPress={() => { props.navigation.navigate('Profile') }}
          />
          <DrawerItem
            label="Bookmarks"
            icon={() => (
              <Icon
                name="bookmark-outline"
                size={30}
                color="black"
              />
            )}
            onPress={() => { props.navigation.navigate('BookmarksScreen') }}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="account-check-outline"
                color="black"
                size={30}
              />
            )}
            onPress={() => { props.navigation.navigate('Update') }}
            label="Support"
          />
          <DrawerItem
            label="Setting"
            icon={() => (
              <Icon
                name="cog"
                color="black"
                size={30}
              />
            )}
            onPress={() => { props.navigation.navigate('Settings') }}
          />
        </Drawer.Section>
        <View style={styles.Container}>
          <Title style={[styles.title, { marginLeft: 10 }]}>Preferences</Title>
        </View>
        <View>
          <Text style={styles.drak}>Drak Theme</Text>
          <Switch
            style={{ top: -23 }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Drawer.Section style={{
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
        }}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="exit-to-app"
                color={color}
                size={size}
              />
            )}
            label="Sign Out"
            onPress={() => { props.navigation.navigate('Home') }}
          />
        </Drawer.Section>

      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingLeft: 10,
    flexDirection: "row",
  },
  contentuser: {
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  caption: {
    lineHeight: 14,
    fontSize: 14,
  },
  captions: {
    marginLeft: 3,
    fontSize: 14,
  },
  paragraph: {
    fontWeight: "bold",
    fontSize: 16
  },
  drak: {
    marginLeft: 20,
    marginTop: 20
  }
});

export default CustomSidebarMenu;