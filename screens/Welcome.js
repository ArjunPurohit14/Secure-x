import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import Buttons from "../components/Buttons";
import { useNavigation } from '@react-navigation/native';

const Welcome = ( ) => {
  const navigation = useNavigation(); 
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/hero2.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/hero4.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* content */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View
            style={{
              marginVertical: 22,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              Secure Yourself with "SecureX"
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              Safe, Emergency, Report
            </Text>
          </View>

          {/* Buttons */}
          <Buttons
             title="Join SecureX"
             onPress={()=> navigation.navigate("Signup")}
             style={{
              marginTop: 22,
              width: "100%"
             }} />

             <View style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center"
             }}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.white
                }}>Already have an account?</Text>
                <Pressable onPress={()=>navigation.navigate("Login")}>
                  <Text style={{
                    fontSize: 16,
                    color:COLORS.white,
                    fontWeight: "bold",
                    marginLeft: 4
                  }}>
                    Login
                  </Text>
                </Pressable>
             </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
