import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6347",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          height: 66,
          paddingTop: 8,
          paddingBottom: 9,
          borderTopColor: "#E2E8F0",
          backgroundColor: "#FFFFFF"
        },
        tabBarLabelStyle: { fontWeight: "800", fontSize: 12 }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Play Game",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="rules"
        options={{
          title: "Rules",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
